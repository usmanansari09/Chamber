from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.core.validators import RegexValidator
from django.utils.translation import ugettext_lazy as _
from django.dispatch import receiver
import uuid

class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """
    STATUS_CHOICES = (
        ('Away', 'Away'),
        ('Online', 'Online')
    )

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = models.CharField(_("Name of User"), blank=True, null=True, max_length=255)
    phone_regex = RegexValidator( regex   =r'^\+?1?\d{9,14}$', message ="Phone number must be entered in the format: '+999999999'. Up to 14 digits allowed.")
    phone = models.CharField(validators=[phone_regex], max_length=17, unique=True)
    company = models.CharField(max_length=255, blank=True, null=True, default=None)
    otp = models.CharField(max_length=6, blank=True, null=True)
    activation_key = models.CharField(max_length=150, blank=True, null=True)
    image = models.ImageField(upload_to='media/user/', blank=True, null=True)
    muted_notification = models.ManyToManyField('User', symmetrical=False,blank=True, related_name='muted')
    blocked_users = models.ManyToManyField('User', symmetrical=False, blank=True, related_name='blocked')
    status = models.CharField(max_length=6, choices=STATUS_CHOICES, default='Online')
    registration_id = models.CharField(max_length=255, blank=True, null=True)
    counter = models.IntegerField(default=1)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})

    def __str__(self):
        return self.phone


@receiver(models.signals.post_delete, sender=User)
def remove_user_file_from_s3(sender, instance, using, **kwargs):
    instance.image.delete(save=False)


class ChatGroup(models.Model):
    """
    Group for a selection of Users in a chat
    """
    name = models.CharField(max_length=255, blank=False, null=False)
    image = models.ImageField(upload_to='media/group/images/', blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    users = models.ManyToManyField(User, blank=True, related_name='users')
    group_chat = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


@receiver(models.signals.post_delete, sender=ChatGroup)
def remove_chatgroup_file_from_s3(sender, instance, using, **kwargs):
    instance.image.delete(save=False)


class Message(models.Model):
    """
    Messages from a User to a Chatroom with other Users
    """
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='messages')
    chatroom = models.ForeignKey(ChatGroup, on_delete=models.CASCADE, related_name='messages')
    message = models.CharField(max_length=255, blank=True, null=True)
    attachment = models.FileField(upload_to='media/group/chat/files/', blank=True, null=True)
    mimetype = models.CharField(max_length=255, blank=True, null=True)
    attachment_name = models.CharField(max_length=255, blank=True, null=True)
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.chatroom.name + ': ' + self.sender.first_name


@receiver(models.signals.post_delete, sender=Message)
def remove_message_file_from_s3(sender, instance, using, **kwargs):
    instance.attachment.delete(save=False)


class Invite(models.Model):
    """
    An invite to a Group Chat by a host
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    chatroom = models.ForeignKey(ChatGroup, on_delete=models.CASCADE, related_name='invites')
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    used = models.BooleanField(default=False)
