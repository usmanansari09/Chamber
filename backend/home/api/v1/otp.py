from the_chamber_30129.settings import TWILIO_ACCOUNT_SID, TWILIO_ACCOUNT_TOKEN, DEBUG
import pyotp
from twilio.rest import Client
from twilio.base.exceptions import TwilioRestException
from rest_framework.serializers import ValidationError
from django.utils.translation import ugettext_lazy as _


#MG55a4c87c3ad86badab7fcf918362cc3a
#MGc5b9814b458f6577f98b59fe0c957ca4
def send_otp_sms(phone, otp):
    if not DEBUG:
        try:
            client = Client(TWILIO_ACCOUNT_SID, TWILIO_ACCOUNT_TOKEN) 
            message = client.messages.create(  
                                        messaging_service_sid='MG38fa505fa467f1aac48ed796bf02a7db', 
                                        body='Your OTP is {}'.format(otp),      
                                        to='+1{}'.format(phone) 
                                    )
        except TwilioRestException as e:
            raise ValidationError(_('Please enter a valid North American phone number excluding country code')) 

def generateHOTP(user): 
    hotp = pyotp.HOTP('base32secret3232') 
    # userid = int(userid)
    # user = User.objects.get(phone=phone)
    counter = user.counter
    activation_key = int(user.phone) + user.counter
    # user.counter += 1
    # user.save()
    return hotp.at(activation_key) 

def verifyOTP(otp, user): 
    if user:
        phone = int(user.phone)
        # user = User.objects.get(phone=phone)
        counter = user.counter - 1
        activation_key = phone + counter
        hotp = pyotp.HOTP('base32secret3232') 
        if hotp.verify(otp, activation_key): 
            # user.counter += 1
            # user.save()
            return True 
        else: 
            totp = pyotp.TOTP('base32secret3232') 
        if totp.verify(otp): 
            return True 
    return False

def generateSignUpHOTP(userid): 
    hotp = pyotp.HOTP('base32secret3232') 
    phone = int(userid)
    return hotp.at(phone) 

def verifyOTPSignup(otp, user): 
    if user:
        userid = int(user.phone)
        # user = User.objects.get(phone=userid)
        activation_key = userid
        hotp = pyotp.HOTP('base32secret3232') 
        if hotp.verify(otp, activation_key): 
            return True 
        else: 
            totp = pyotp.TOTP('base32secret3232') 
        if totp.verify(otp): 
            return True 
    return False
