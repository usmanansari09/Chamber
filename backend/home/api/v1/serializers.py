from datetime import date, datetime, timedelta
from django.contrib.auth import get_user_model, authenticate
from django.core.mail import EmailMessage
from django.core.signing import Signer
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from django.db.models import Q
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email

from rest_framework import serializers
from rest_auth.serializers import PasswordResetSerializer

from users.models import ChatGroup, Invite, Message


User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                }
            },
            'email': {
                'required': True,
                'allow_blank': False,
            }
        }

    def _get_request(self):
        request = self.context.get('request')
        if request and not isinstance(request, HttpRequest) and hasattr(request, '_request'):
            request = request._request
        return request

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address."))
        return email

    def create(self, validated_data):
        user = User(
            email=validated_data.get('email'),
            name=validated_data.get('name'),
            username=generate_unique_username([
                validated_data.get('name'),
                validated_data.get('email'),
                'user'
            ])
        )
        user.set_password(validated_data.get('password'))
        user.save()
        request = self._get_request()
        setup_user_email(request, user, [])
        return user

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name']


class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""
    password_reset_form_class = ResetPasswordForm


class UserSignupSerializer(serializers.ModelSerializer):
    """
    Custom serializer for creating an inactive User prior to OTP verification
    """

    class Meta:
        model = get_user_model()
        fields = ('phone', 'password', 'first_name', 'last_name', 'email', 'company', 'otp', 'activation_key', 'registration_id')
        extra_kwargs = {'password': {'write_only': True, 'min_length': 5},
                        'otp': {'write_only': True},
                        'activation_key': {'write_only': True}
                        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data['username'] = validated_data.get('phone')
        user = super().create(validated_data)
        user.set_password(password)
        user.is_active = False
        user.save()
        return user



class BlockedProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for blocked profiles of a user
    """

    class Meta:
        model = get_user_model()
        fields = ('id', 'phone', 'first_name', 'last_name', 'image', 'registration_id')
        extra_kwargs = {'id': {'read_only': True}}


class MutedProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for muted profiles of a user
    """

    class Meta:
        model = get_user_model()
        fields = ('id', 'phone', 'first_name', 'last_name', 'image', 'registration_id')
        extra_kwargs = {'id': {'read_only': True}}


class UserProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for returning a user profile
    """
    muted_notification = MutedProfileSerializer(many=True)
    blocked_users = BlockedProfileSerializer(many=True)

    class Meta:
        model = get_user_model()
        fields = ('id', 'phone', 'first_name', 'last_name', 'email', 'company', 'image', 'muted_notification', 'blocked_users', 'status', 'registration_id')
        extra_kwargs = {'id': {'read_only': True}, 'phone': {'read_only': True}, 'muted_notification': {'read_only': True}, 'blocked_users': {'read_only': True}}



class BasicUserProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for returning just the full name of a User
    """
    fullname = serializers.SerializerMethodField()

    class Meta:
        model = get_user_model()
        fields = ('id', 'first_name', 'last_name', 'fullname', 'registration_id')

    def get_fullname(self, obj):
        return obj.first_name + ' ' + obj.last_name


class CustomAuthTokenSerializer(serializers.Serializer):
    """
    Serializer for the user authentication object
    """
    phone = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'}, trim_whitespace=False)

    def validate(self, attrs):
        phone = attrs.get('phone')
        password = attrs.get('password')

        user = authenticate(
            request=self.context.get('request'),
            username=phone,
            password=password
        )
        if not user:
            msg = _('Unable to authenticate with provided credentials')
            raise serializers.ValidationError(msg, code='authentication')
        else:
            if user.is_active == False:
                user.delete()
                msg = _('Account unverified. Please register again')
                raise serializers.ValidationError(msg, code='authentication')
        attrs['user'] = user
        return attrs


class ForgotPasswordSerializer(serializers.Serializer):
    """
    Serializer for forgotten password endpoint
    """
    model = get_user_model()
    new_password = serializers.CharField(required=True)


class ChangePasswordSerializer(serializers.Serializer):
    """
    Serializer for password change endpoint
    """
    model = get_user_model()
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


class OtherProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for returning another user's profile
    """
    status = serializers.SerializerMethodField()

    class Meta:
        model = get_user_model()
        fields = ('id', 'phone', 'first_name', 'last_name', 'email', 'company', 'image', 'status', 'registration_id')
        extra_kwargs = {'id': {'read_only': True}}


    def to_representation(self, instance):
        representation = super().to_representation(instance)
        user = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
            if instance in user.muted_notification.all():
                muted = True
            else:
                muted = False
            representation['is_muted'] = muted
            if instance in user.blocked_users.all():
                blocked = True
            else:
                blocked = False
            representation['is_blocked'] = blocked
        return representation   


    def get_status(self, obj):
        return obj.get_status_display()


class InviteSerializer(serializers.ModelSerializer):
    """
    Serializer for handling user email invites
    """

    class Meta:
        model = Invite
        exclude = ('chatroom',)


class ChatRoomSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for returning chat groups
    """
    users = OtherProfileSerializer(read_only=True, many=True)
    created_by = BasicUserProfileSerializer(read_only=True)
    last_message = serializers.SerializerMethodField()
    invites = InviteSerializer(many=True)

    class Meta:
        model = ChatGroup
        fields = ('id', 'name', 'image', 'description', 'users', 'created_by', 'group_chat', 'last_message', 'invites')
        extra_kwargs = {'id': {'read_only': True},
                        'group_chat': {'required': False}}


    def get_last_message(self, obj):
        try:
            messages = Message.objects.filter(chatroom=obj).latest('sent_at')
            resp = MessageSerializer(messages)
            resp = resp.data
        except Message.DoesNotExist:
            resp = []
        return resp


    def create(self, validated_data):
        invites_data = validated_data.pop('invites', '')
        try:
            sender = self.context.get('request').user.first_name
        except Exception as e:
            sender = 'Unknown'
        chatroom = super().create(validated_data)
        for invite_data in invites_data:
            email = invite_data['email']
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                invite = Invite.objects.create(chatroom=chatroom, email=email)
                link = "https://the-chamber-30129.botics.co?invite={}&email={}".format(invite.id, email) 
                email_body = """\
                    <html>
                    <head></head>
                    <body>
                        <p>Hi,<br>
                        %s has invited you to join their chamber. Please click on the link below to access the chamber.<br>
                        %s<br>
                        Regards</p>
                    </body>
                    </html>
                    """ % (sender, link)
                email = EmailMessage("You've been invited to The Chamber", email_body, from_email='sallar.rezaie@crowdbotics.com', to=[email])
                email.content_subtype = "html"
                email.send()
            else:
                chatroom.users.add(user.pk)
                link = "https://the-chamber-30129.botics.co"
                email_body = """\
                    <html>
                    <head></head>
                    <body>
                        <p>Hi,<br>
                        %s has added you to their Chamber. Please click below to open the app.<br>
                        %s<br>
                        Regards</p>
                    </body>
                    </html>
                    """ % (sender, link)
                email = EmailMessage("You've been added to a Chamber", email_body, from_email='sallar.rezaie@crowdbotics.com', to=[email])
                email.content_subtype = "html"
                email.send()
        return chatroom

        # try:
        #     user_ids = []
        #     for user in self.initial_data['users']:
        #         if 'id' not in user:
        #             raise serializers.ValidationError({'detail': 'Key Error'})
        #         user_ids.append(user['id'])

        #     if user_ids:
        #         for user_id in user_ids:
        #             user_qs = User.objects.filter(pk=user_id)
        #             if not user_qs.exists():
        #                 raise serializers.ValidationError({'detail': 'Invalid User ID'})

        #     group_chat = validated_data.get('group_chat')
        #     if group_chat == False:
        #         if len(user_ids) > 2:
        #             raise serializers.ValidationError({'detail': 'If there are more than 2 group members, set group_chat to True'})
        #     new_chatgroup = ChatGroup.objects.create(**validated_data)

        #     if user_ids:
        #         for user_id in user_ids:
        #             new_chatgroup.users.add(user_id)
        #     user = None
        #     request = self.context.get("request")
        #     if request and hasattr(request,"user"):
        #         user = request.user
        #     new_chatgroup.created_by = user
        #     new_chatgroup.save()
        #     return new_chatgroup

        # except Exception as e:
        #     raise serializers.ValidationError({'detail': e})



class ChatUserProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for returning the full name of a User and their Profile Picture
    """
    fullname = serializers.SerializerMethodField()

    class Meta:
        model = get_user_model()
        fields = ('id', 'first_name', 'last_name', 'fullname', 'image', 'registration_id')

    def get_fullname(self, obj):
        return obj.first_name + ' ' + obj.last_name

class MessageSerializer(serializers.ModelSerializer):
    """
    Serializer for returning a Chat Room including it's Users and Messages
    """
    sender = ChatUserProfileSerializer(default=serializers.CurrentUserDefault())

    class Meta:
        model = Message
        fields = ('id', 'sender', 'message', 'attachment', 'mimetype', 'attachment_name', 'sent_at')
        extra_kwargs = {'id': {'read_only': True}}

    def validate(self, data):
        if not 'message' in data and not 'attachment' in data:
            raise serializers.ValidationError({'detail': 'Message cannot be blank'})
        else:
            if 'message' in data and len(data['message']) == 0:
                raise serializers.ValidationError({'detail': 'Message cannot be blank'})
        return data


class InviteRegisterSerializer(serializers.Serializer):
    """
    A custom serializer to handle the registration of an invited User
    """
    invite = serializers.UUIDField()
    first_name = serializers.CharField(max_length=255)
    last_name = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    phone = serializers.RegexField(regex=r'^\+?1?\d{9,14}$',       
            required=True)
    password_1 = serializers.CharField(max_length=32)
    password_2 = serializers.CharField(max_length=32)
    photo = serializers.ImageField(required=False)

    def validate(self, attrs):
        attrs = super().validate(attrs)
        invite = attrs.get('invite')
        password_1 = attrs.get('password_1')
        password_2 = attrs.get('password_2')
        email = attrs.get('email')
        phone = attrs.get('phone')
        first_name = attrs.get('first_name')
        last_name = attrs.get('last_name')
        photo = attrs.get('photo')
        if password_1 != password_2:
            raise serializers.ValidationError("Passwords do not match")
        # Check if invite is valid
        try:
            invite = Invite.objects.get(id=invite)
        except Invite.DoesNotExist:
            raise serializers.ValidationError("Invalid Invitation Link - incorrect code")
        else:
            cutoff = datetime.now() - timedelta(days=30)
            if invite.created_at.timestamp() < cutoff.timestamp():
                raise serializers.ValidationError("Invitation link is expired")
            if invite.used == True:
                raise serializers.ValidationError("Invalid Invitation Link - already used")
        # Check if User already exists
        if User.objects.filter(Q(email=email) | Q(phone=phone)).exists():
            raise serializers.ValidationError("User with the same email or phone number already exists")
        # Process Registration
        user = User.objects.create_user(first_name=first_name,
                                   last_name=last_name,
                                   username=phone,
                                   email=email,
                                   phone=phone,
                                   password=password_1,
                                   image=photo)
        invite.used = True
        invite.save()
        chatroom = invite.chatroom
        chatroom.users.add(user.pk)
        return attrs
