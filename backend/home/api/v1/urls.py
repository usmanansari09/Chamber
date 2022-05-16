from django.urls import path, include
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    UserCreateListView,
    UserUpdateRetrieveView,
    verifySignupOTP,
    ObtainExpiringAuthToken,
    SendOTP,
    verifyResetOtp,
    ResetPasswordView,
    ChangePasswordView,
    FindProfileView,
    block_user,
    mute_user,
    GroupListCreateView,
    GroupRetrieveUpdateView,
    add_remove_user_group,
    add_multiple_users_group,
    MessageListCreate,
    delete_user,
    GroupChatListView,
    SingleChatListView,
    InviteView
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")

urlpatterns = [
    path("", include(router.urls)),
    path('users/', UserCreateListView.as_view(), name='users'),
    path('users/invite/', InviteView.as_view(), name='invites'),
    path('users/token/', ObtainExpiringAuthToken.as_view(), name='token'),
    path('users/profile/', UserUpdateRetrieveView.as_view(), name='user_profile'),
    path('users/profile/change-password/', ChangePasswordView.as_view(), name='change_password'),
    path('users/otp/<int:phone>/', SendOTP, name='send_otp'),
    path('users/profile/<int:pk>/', FindProfileView.as_view(), name='find_profile'),
    path('users/profile/block/<int:pk>/', block_user, name='block_user'),
    path('users/profile/mute/<int:pk>/', mute_user, name='mute_user'),
    path('groups/', GroupListCreateView.as_view(), name='list_create_group'),
    path('groups/single/', SingleChatListView.as_view(), name='single_groups'),
    path('groups/multi/', GroupChatListView.as_view(), name='multi_groups'),
    path('groups/<int:pk>/', GroupRetrieveUpdateView.as_view(), name='retrieve_update_group'),
    path('groups/users/multi/', add_multiple_users_group, name='add_remove_user_group'),
    path('groups/users/', add_remove_user_group, name='add_remove_user_group'),
    path('groups/chat/<int:group_id>/', MessageListCreate.as_view(), name='chatroom_messages'),
    path('users/delete/<int:phone>/', delete_user, name='delete_user'),
    path('users/reset/confirmed/<str:otp>/', ResetPasswordView.as_view(), name='reset_password'),
    path('users/reset/<str:otp>/', verifyResetOtp, name='reset_password_verify_otp'),
    path('users/<str:otp>/', verifySignupOTP, name="signup_verify"),

]
