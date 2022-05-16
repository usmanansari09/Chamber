from datetime import datetime, timedelta
from pytz import utc

from django.db.models import Q
from django.core.mail import EmailMessage
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from django.utils import timezone
from django.conf import settings
from django.http.response import Http404

from rest_framework import status
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView, UpdateAPIView, RetrieveAPIView, ListAPIView
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.exceptions import NotFound, NotAcceptable


from home.api.v1.serializers import (
    InviteRegisterSerializer,
    InviteSerializer,
    SignupSerializer,
    UserSerializer,
    UserSignupSerializer,
    UserProfileSerializer,
    CustomAuthTokenSerializer,
    ForgotPasswordSerializer,
    ChangePasswordSerializer,
    OtherProfileSerializer,
    ChatRoomSerializer,
    MessageSerializer
)
from home.permissions import IsPostOrIsAuthenticated

from users.models import ChatGroup, Invite, Message

from home.api.v1.otp import generateHOTP, verifyOTP, generateSignUpHOTP, verifyOTPSignup, send_otp_sms



User = get_user_model()
EXPIRE_HOURS = getattr(settings, 'REST_FRAMEWORK_TOKEN_EXPIRE_HOURS', 24)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})


class UserCreateListView(ListCreateAPIView):
    """
    Create an Inactive User and send an OTP or List Active Users
    """
    queryset = User.objects.all().exclude(is_superuser=True).exclude(is_staff=True)
    serializer_class = UserSignupSerializer
    permission_classes = (IsPostOrIsAuthenticated,)

    def get_queryset(self):
        return User.objects.all().exclude(Q(is_superuser=True) | Q(is_staff=True) | Q(pk=self.request.user.pk))

    def perform_create(self, serializer):
        phone= serializer.validated_data.get('phone')
        otp = generateSignUpHOTP(phone)
        send_otp_sms(phone=phone, otp=otp)
        serializer.save(otp=otp, activation_key=None)

    def list(self, *args, **kwargs):
        serializer_class = UserProfileSerializer
        serializer = serializer_class(self.get_queryset(), many=True)
        return Response(serializer.data)


class UserUpdateRetrieveView(RetrieveUpdateAPIView):
    """
    An endpoint for returning a user profile or updating a user profile
    """
    permission_classes = (IsAuthenticated,)
    serializer_class = UserProfileSerializer

    def get_object(self):
        return self.request.user


@api_view(['POST'])
@permission_classes([AllowAny,])
def verifySignupOTP(request, otp):
    """
    An endpoint that verifies the OTP sent to the User on signup
    """
    try:
        user = User.objects.get(otp=otp, is_active=False)
        _otp = user.otp
        if otp != _otp:
            return Response({"OTP": "Invalid OTP"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        else:
            if verifyOTPSignup(otp, user): 
                user.is_active = True
                user.otp = None
                user.activation_key = None
                user.save()
                return Response({"Verification Successful": "Your account has been successfully activated"})

            else: 
                return Response({"OTP Expired": "Your OTP has timed out, please try again"}, status=status.HTTP_408_REQUEST_TIMEOUT)

    except Exception as e:
        return Response({"No User": "No inactive user found or Invalid OTP"}, status=status.HTTP_400_BAD_REQUEST)


class ObtainExpiringAuthToken(ObtainAuthToken):
    """
    Endpoint that creates an Auth Token that expires after 24 hours
    """
    def post(self, request, **kwargs):
        serializer = CustomAuthTokenSerializer(data=request.data)

        if serializer.is_valid():
            token, created = Token.objects.get_or_create(user=serializer.validated_data['user'])
            # utc_now = datetime.utcnow()
            # if not created and token.created < timezone.now() - timedelta(hours=EXPIRE_HOURS):
            #     token.delete()
            #     token = Token.objects.create(user=serializer.validated_data['user'])
            #     token.created = datetime.utcnow().replace(tzinfo=utc)
            #     token.save()

            return Response({'token': token.key}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([AllowAny,])
def SendOTP(request, phone):
    """
    Sends/Refreshes an OTP to the phone provided
    """
    try:
        user = User.objects.get(phone=phone)
    except ObjectDoesNotExist:
        return Response({"Phone": "Invalid Phone Number"}, status=status.HTTP_406_NOT_ACCEPTABLE)

    otp = generateHOTP(user)
    user.otp = otp
    user.counter += 1
    user.save()
    send_otp_sms(phone=phone, otp=otp)
    return Response({"OTP": "New OTP has been sent"}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny,])
def verifyResetOtp(request, otp):
    """
    An endpoint that verifies a Reset Password OTP sent to the User
    """
    try:
        user = User.objects.get(otp=otp)
        _otp = user.otp
        if otp != _otp:
            return Response({"OTP": "Invalid OTP"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        else:
            if verifyOTP(otp, user): 
                user.is_active = True
                user.save()
                return Response({"Verification Successful": "The OTP has been verified. Proceed to Change Password"}, status=status.HTTP_200_OK)
            else:
                return Response({"OTP Expired": "Your OTP has timed out, please try again"}, status=status.HTTP_408_REQUEST_TIMEOUT)
    except:
        return Response({"No User": "Invalid User or OTP"}, status=status.HTTP_406_NOT_ACCEPTABLE)


class ResetPasswordView(UpdateAPIView):
    """
    An endpoint for resetting the user password after confirming the OTP
    """
    serializer_class = ForgotPasswordSerializer
    model = User
    permission_classes = (AllowAny,)
    lookup_url_kwarg = 'otp'

    def get_object(self, queryset=None):
        try:
            obj = User.objects.get(otp=self.kwargs['otp'])
        except User.DoesNotExist:
            raise NotFound('OTP does not match a user')
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        otp = self.kwargs['otp']
        _otp = self.object.otp
        if otp != _otp:
            return Response({"OTP": "Invalid OTP"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        else:
            activation_key = int(self.object.phone) + int(self.object.counter)
            if verifyOTP(otp, self.object): 
                if serializer.is_valid():
                    self.object.set_password(serializer.data.get("new_password"))
                    self.object.otp = None
                    self.object.activation_key = None
                    self.object.save()
                    return Response({"Password Reset": "Successful"}, status=status.HTTP_200_OK)
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"OTP Expired": "Your OTP has timed out, please try again"}, status=status.HTTP_408_REQUEST_TIMEOUT)


class ChangePasswordView(UpdateAPIView):
    """
    An endpoint for changing the User password
    """
    serializer_class = ChangePasswordSerializer
    model = User
    permission_classes = (IsAuthenticated,)

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            return Response({"Password Change": "Successful"}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FindProfileView(RetrieveAPIView):
    """
    An endpoint for returning another user's profile.
    """
    permission_classes = (IsAuthenticated,)
    serializer_class = OtherProfileSerializer

    def get_object(self):
        try:
            obj = User.objects.get(pk=self.kwargs['pk'])
            return obj
        except ObjectDoesNotExist:
            raise Http404


@api_view(['PATCH'])
@permission_classes([IsAuthenticated,])
def block_user(request, pk):
    """
    An endpoint for blocking/unblocking a particular User
    """
    try:
        user = request.user
        blocked_user = User.objects.get(pk=pk)
        if blocked_user in user.blocked_users.all():
            user.blocked_users.remove(blocked_user)
            user.save()
            return Response({"User Unblocked": "Successful"}, status=status.HTTP_200_OK)
        else:
            user.blocked_users.add(blocked_user)
            user.save()
            return Response({"User Blocked": "Successful"}, status=status.HTTP_200_OK)
    except:
        return Response({"No User": "Invalid User"}, status=status.HTTP_406_NOT_ACCEPTABLE)


@api_view(['PATCH'])
@permission_classes([IsAuthenticated,])
def mute_user(request, pk):
    """
    An endpoint for muting/unmuting a particular User
    """
    try:
        user = request.user
        muted_user = User.objects.get(pk=pk)
        if muted_user in user.muted_notification.all():
            user.muted_notification.remove(muted_user)
            user.save()
            return Response({"User Unmuted": "Successful"}, status=status.HTTP_200_OK)
        else:
            user.muted_notification.add(muted_user)
            user.save()
            return Response({"User Muted": "Successful"}, status=status.HTTP_200_OK)
    except:
        return Response({"No User": "Invalid User"}, status=status.HTTP_406_NOT_ACCEPTABLE)


@api_view(['DELETE'])
@permission_classes([AllowAny,])
def delete_user(request, phone):
    """
    A temporary endpoint for testing to remove a User
    """
    try:
        user = User.objects.get(phone=phone)
        user.delete()
        return Response({'Success': 'User Deleted Successfully'}, status=status.HTTP_204_NO_CONTENT)
    except:
        return Response({'Fail': 'Invalid Phone Number Provided'}, status=status.HTTP_400_BAD_REQUEST)


class GroupListCreateView(ListCreateAPIView):
    """
    An endpoint for creating or listing all groups
    """
    permission_classes = (IsAuthenticated,)
    serializer_class = ChatRoomSerializer
    queryset = ChatGroup.objects.all()

    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(
            users__id=self.request.user.id
        )

    def perform_create(self, serializer):
        instance = serializer.save(created_by=self.request.user)
        instance.users.add(self.request.user.pk)
        instance.save()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, context = {"request": request})
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class SingleChatListView(ListAPIView):
    """
    An endpoint for listing 1:1 Chats
    """
    permission_classes = (IsAuthenticated,)
    serializer_class = ChatRoomSerializer
    queryset = ChatGroup.objects.all().exclude(group_chat=True)

    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(
            users__id=self.request.user.id
        )


class GroupChatListView(ListAPIView):
    """
    An endpoint for listing Group Chats
    """
    permission_classes = (IsAuthenticated,)
    serializer_class = ChatRoomSerializer
    queryset = ChatGroup.objects.all().exclude(group_chat=False)

    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(
            users__id=self.request.user.id
        )

class GroupRetrieveUpdateView(RetrieveUpdateAPIView):
    """
    An endpoint for retrieving or updating a group
    """
    permission_classes = (IsAuthenticated,)
    serializer_class = ChatRoomSerializer
    queryset = ChatGroup.objects.all()

    def get_object(self):
        try:
            obj = ChatGroup.objects.get(pk=self.kwargs['pk'])
            return obj
        except ObjectDoesNotExist:
            raise Http404


@api_view(['PATCH'])
@permission_classes([IsAuthenticated,])
def add_remove_user_group(request):
    """
    An endpoint for adding or removing a User from a group
    """
    group_id = request.data.get('group_id')
    email = request.data.get('email')
    sender = request.user.first_name
    try:
        chatroom = ChatGroup.objects.get(id=group_id)
    except ChatGroup.DoesNotExist:
        return Response({'detail': 'Invalid Chatroom ID'})
    try:
        user = User.objects.get(email=email)
        if user in chatroom.users.all():
            chatroom.users.remove(user)
            chatroom.save()
            return Response({"User Removed": "Successful"}, status=status.HTTP_200_OK)
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
    serializer = ChatRoomSerializer(chatroom)
    return Response(serializer.data)

    
@api_view(['PATCH'])
@permission_classes([IsAuthenticated,])
def add_multiple_users_group(request):
    """
    An endpoint for adding a list of users
    """
    if isinstance(request.data['users'], list):
        emails = []
        sender = request.user.first_name
        for user in request.data.pop('users'):
            if 'email' not in user:
                return Response({'detail': 'Key Error - No User IDs'}, status=status.HTTP_406_NOT_ACCEPTABLE)
            emails.append(user['email'])
        
        try:
            group_id = request.data['group']
            chatroom = ChatGroup.objects.get(pk=group_id)
            # if chatgroup.group_chat == False:
            #     return Response({"detail": "Cannot add or remove members of a 1:1 Chat"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        except:
            return Response({'detail': 'Key Error - Invalid Group ID'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        if emails:
            for email in emails:
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
                serializer = ChatRoomSerializer(chatroom)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'Key Error - Missing User Emails'})


class MessageListCreate(ListCreateAPIView):
    """
    Send a message or return a list of messages
    """
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        chatgroup = self.kwargs['group_id']
        try:
            chatroom = ChatGroup.objects.get(pk=chatgroup)
        except:
            raise NotFound('Chatroom not found')
        if self.request.user not in chatroom.users.all():
            raise NotAcceptable('User must be a member of the Chatroom')
        return Message.objects.filter(chatroom__id=chatgroup).order_by('-sent_at')

    def perform_create(self, serializer):
        sender = None
        if self.request and hasattr(self.request, "user"):
            sender = self.request.user
        try:
            chatgroup_id = self.kwargs['group_id']
            chatgroup = ChatGroup.objects.get(pk=chatgroup_id)
        except:
            raise NotFound('Chatroom not found')
        if not sender in chatgroup.users.all():
            raise NotAcceptable('User is not a member of the Chatroom')
        serializer.save(sender=sender, chatroom=chatgroup)


class InviteView(APIView):
    """
    An endpoint to handle the registration of an invited User
    """
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = InviteRegisterSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            user = User.objects.get(email=email)
            user_serializer = UserProfileSerializer(user)
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'user': user_serializer.data}, status=status.HTTP_201_CREATED)
        return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
