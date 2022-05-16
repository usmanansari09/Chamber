from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model

from users.forms import UserChangeForm, UserCreationForm
from users.models import ChatGroup, Message

User = get_user_model()


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):

    form = UserChangeForm
    add_form = UserCreationForm
    fieldsets = (("Profile", {"fields": ("phone", "company", "image", "status")}),) + \
        (("Auth", {"fields": ("otp", "counter")}),) + \
        (("Relations", {"fields": ("muted_notification", "blocked_users")}),) + \
        (("User", {"fields": ("name",)}),) + auth_admin.UserAdmin.fieldsets
    list_display = ["phone", "first_name", "last_name", "is_superuser", "is_active", "username"]
    search_fields = ["name", "phone"]


@admin.register(ChatGroup)
class ChatAdmin(admin.ModelAdmin):

    list_display = ("name", "created_at")
    search_fields = ["name"]


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):

    list_display = ("chatroom", "sender", "sent_at")
    search_fields = ["chatroom", "sender"]

