from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient, APITestCase
from users.models import ChatGroup
from home.authentication import ExpiringTokenAuthentication
import time

def sample_user(phone='4169944347', password='testpass'):
    """
    Create a sample user
    """
    return get_user_model().objects.create_user(phone, password)


class ModelTests(TestCase):

    def test_create_user_with_phone_successful(self):
        """
        Test creating a new user with a phone number and username matching phone number
        """
        phone = '4169944347'
        password = 'Testpass123'
        username = phone
        user = get_user_model().objects.create_user(phone=phone, username=username, password=password)

        self.assertEqual(user.phone, phone)
        self.assertEqual(user.username, username)
        self.assertTrue(user.check_password(password))

    def test_new_user_email_normalized(self):
        """
        Test the email for a new user is normalized
        """
        email = 'test@GMAIL.com'
        phone = '4169944347'
        password = 'Testpass123'
        username = phone

        user = get_user_model().objects.create_user(phone=phone, username=username, email=email, password=password)
        self.assertEqual(user.email, email.lower())

    def test_new_user_invalid_phone(self):
        """
        Test creating user with no phone raises error
        """
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(None, 'test123')

    def test_can_create_new_superuser(self):
        """
        Test creating a new superuser
        """
        username = 'testuser'
        email = 'test@gmail.com'
        password = 'test123'
        user = get_user_model().objects.create_superuser(username=username, email=email, password=password)

        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)

    def test_user_str(self):
        """
        Test the User string representation
        """
        email = 'test@gmail.com'
        phone = '4169944347'
        password = 'Testpass123'
        username = phone
        user = get_user_model().objects.create_user(phone=phone, username=username, email=email, password=password)

        self.assertEqual(str(user), user.phone)


class CreateUserTest(APITestCase):
    def setUp(self):
        User = get_user_model()
        self.superuser = User.objects.create_superuser(
            phone='4161111111',
            email='admin@gmail.com',
            username='4161111111',
            password='testpass123',
        )
        self.client.login(phone='4161111111', password='testpass123')
        self.data = {
            'phone': '4169999999',
            'password': 'testpass123',
            'first_name': 'Amir',
            'last_name': 'Rezaie',
            'email': 'test@gmail.com',
            'company': 'Microsoft'
        }

    def test_can_create_user(self):
        """
        Test that we can create a new User object
        """
        response = self.client.post(reverse('users'), self.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class AuthenticatedUserTest(APITestCase):
    def setUp(self):
        self.data = {
            'phone': '4169999999',
            'password': 'testpass123',
            'first_name': 'Amir',
            'last_name': 'Rezaie',
            'email': 'test@gmail.com',
            'company': 'Microsoft'
        }
        url = reverse('users')
        resp = self.client.post(url, self.data)
        self.user = get_user_model().objects.get(phone='4169999999')
        self.user.is_active = True
        self.client.force_authenticate(user=self.user)

    def test_can_get_user_list(self):
        url = reverse('users')
        resp = self.client.get(url)
        self.assertEqual(resp.status_code, status.HTTP_200_OK)

    def test_can_get_user_profile(self):
        """
        Test that an authenticated User can get their own profile
        """
        url = reverse('user_profile')
        resp = self.client.get(url)
        self.assertEqual(resp.status_code, status.HTTP_200_OK)

    def test_can_change_password(self):
        """
        Test that an authenticated User can change their own password
        """
        data = {
            'old_password': 'testpass123',
            'new_password': 'testpass321',
        }
        url = reverse('change_password')
        resp = self.client.patch(url, data)
        self.assertEqual(resp.status_code, status.HTTP_200_OK)

    def test_wrong_old_password(self):
        """
        Test that an incorrect old password prevents a password change
        """
        data = {
            'old_password': 'testpass111',
            'new_password': 'testpass321',
        }
        url = reverse('change_password')
        resp = self.client.patch(url, data)
        self.assertEqual(resp.status_code, status.HTTP_400_BAD_REQUEST)

    def test_find_user_profile(self):
        """
        Test that an Authenticated User can find a User Profile
        """
        second_user = get_user_model().objects.create(phone='4162222222', password='testpass123', username='4162222222')
        url = reverse('find_profile', kwargs={'pk': second_user.pk})                
        resp = self.client.get(url)
        self.assertEqual(resp.status_code, status.HTTP_200_OK)

    def tearDown(self):
        self.client.credentials()
        return super().tearDown()


class UnauthenticatedUserTest(APITestCase):
    def setUp(self):
        self.data = {
            'phone': '4169999999',
            'password': 'testpass123',
            'first_name': 'Amir',
            'last_name': 'Rezaie',
            'email': 'test@gmail.com',
            'company': 'Microsoft'
        }
        url = reverse('users')
        resp = self.client.post(url, self.data)
        self.user = get_user_model().objects.get(phone='4169999999')
        
    def test_unauthenticated_user_list(self):
        """
        Test that Users are unavailable if not authenticated
        """
        url = reverse('users')
        resp = self.client.get(url)
        self.assertEqual(resp.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_unauthenticated_user_profile(self):
        """
        Test that an unauthenticated User cannot get a profile
        """
        url = reverse('user_profile')
        resp = self.client.get(url)
        self.assertEqual(resp.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_unauthenticated_change_password(self):
        """
        Test that an unauthenticated User cannot change a password
        """
        data = {
            'old_password': 'testpass123',
            'new_password': 'testpass321',
        }
        url = reverse('change_password')
        resp = self.client.patch(url, data)
        self.assertEqual(resp.status_code, status.HTTP_401_UNAUTHORIZED)  

    def test_unauthenticated_cannot_get_user_profile(self):
        """
        Test that an unauthenticated User cannot find a User Profile
        """
        second_user = get_user_model().objects.create(phone='4162222222', password='testpass123', username='4162222222')
        url = reverse('find_profile', kwargs={'pk': second_user.pk})                
        resp = self.client.get(url)
        self.assertEqual(resp.status_code, status.HTTP_401_UNAUTHORIZED)


class TokenRetrievalTest(APITestCase):
    def setUp(self):
        self.data = {
            'phone': '4169999999',
            'password': 'testpass123',
            'name': 'Amir',
            'last_name': 'Rezaie',
            'email': 'test@gmail.com',
            'company': 'Microsoft'
        }
        url = reverse('users')
        response = self.client.post(url, self.data)
        self.user = get_user_model().objects.get(phone='4169999999')
        second_url = reverse('signup_verify', kwargs={'otp': self.user.otp})
        verified_response = self.client.post(second_url)

    def test_get_token(self):
        """
        Test that a token can be received
        """
        url = reverse('token')
        final_response = self.client.post(url, {'phone': self.user.phone, 'password': 'testpass123'})
        self.assertEqual(final_response.status_code, status.HTTP_200_OK)


class OTPSendingTest(APITestCase):
    def setUp(self):
        self.data = {
            'phone': '4169999999',
            'password': 'testpass123',
            'first_name': 'Amir',
            'last_name': 'Rezaie',
            'email': 'test@gmail.com',
            'company': 'Microsoft'
        }
        url = reverse('users')
        resp = self.client.post(url, self.data)
        self.user = get_user_model().objects.get(phone='4169999999')


    def test_send_otp(self):
        """
        Test that a 6 digit OTP is sent
        """
        url = reverse('send_otp', kwargs={'phone':'4169999999'})
        resp = self.client.get(url)
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        user = get_user_model().objects.get(phone='4169999999')
        otp = user.otp
        self.assertEqual(len(str(otp)), 6)


class OTPVerifyTest(APITestCase):
    def setUp(self):
        self.data = {
            'phone': '4169999999',
            'password': 'testpass123',
            'first_name': 'Amir',
            'last_name': 'Rezaie',
            'email': 'test@gmail.com',
            'company': 'Microsoft'
        }
        url = reverse('users')
        resp = self.client.post(url, self.data)
        self.user = get_user_model().objects.get(phone='4169999999')

    def test_verify_reset_otp(self):
        """
        Test that an otp is verifiable
        """
        url = reverse('send_otp', kwargs={'phone':'4169999999'})
        resp = self.client.get(url)
        user = get_user_model().objects.get(phone='4169999999')
        otp = user.otp
        url = reverse('reset_password_verify_otp', kwargs={'otp': otp})
        resp = self.client.post(url)
        self.assertEqual(resp.status_code, status.HTTP_200_OK)


class OTPResetPassTest(APITestCase):
    def setUp(self):
        self.data = {
            'phone': '4169999999',
            'password': 'testpass123',
            'first_name': 'Amir',
            'last_name': 'Rezaie',
            'email': 'test@gmail.com',
            'company': 'Microsoft'
        }
        url = reverse('users')
        resp = self.client.post(url, self.data)
        self.user = get_user_model().objects.get(phone='4169999999')

    def test_can_reset_password(self):
        """
        Test that a password can be reset with a valid OTP
        """
        url = reverse('send_otp', kwargs={'phone':'4169999999'})
        resp = self.client.get(url)
        user = get_user_model().objects.get(phone='4169999999')
        otp = user.otp
        url = reverse('reset_password', kwargs={'otp': otp})
        resp = self.client.patch(url, {'new_password': 'testpass333'})
        self.assertEqual(resp.status_code, status.HTTP_200_OK)


class OTPIncorrectResetPassTest(APITestCase):
    def setUp(self):
        self.data = {
            'phone': '4169999999',
            'password': 'testpass123',
            'first_name': 'Amir',
            'last_name': 'Rezaie',
            'email': 'test@gmail.com',
            'company': 'Microsoft'
        }
        url = reverse('users')
        resp = self.client.post(url, self.data)
        self.user = get_user_model().objects.get(phone='4169999999')

    def test_incorrect_otp_cannot_reset_password(self):
        """
        Test that an incorrect OTP cannot reset a password
        """
        url = reverse('send_otp', kwargs={'phone':'4169999999'})
        resp = self.client.get(url)
        user = get_user_model().objects.get(phone='4169999999')
        otp = 0
        url = reverse('reset_password', kwargs={'otp': otp})
        resp = self.client.patch(url, {'new_password': 'testpass333'})
        self.assertEqual(resp.status_code, status.HTTP_404_NOT_FOUND)
