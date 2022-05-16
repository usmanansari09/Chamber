import React, {useState} from 'react';
import {Text, View} from 'react-native';
import * as NavigationService from '../../../Navigators/NavigationService';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import PhoneInput from '../../../Components/PhoneInput';
import CBLogo from '../../../Components/CBLogo';
import AuthButton from '../AuthButton';
import AnotherOption from '../AnotherOption';
import AOButton from '../AOButton';
import ValidateUtil from '../../../Utils/ValidateUtil';
import DialogUtil from '../../../Utils/DialogUtil';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import APIManager from '../../../Network/APIManager';
import {useTheme} from '../../../Providers/ThemeProvider';

export default function ResetPasswordScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const {colors} = useTheme();

  const onPressSend = () => {
    if (!ValidateUtil.validatePhoneNumber(phoneNumber)) {
      DialogUtil.showWarning('A valid phone number is required');
      return;
    }

    APIManager.sendOTP(phoneNumber).then(res => {
      console.log(res);
    });

    NavigationService.navigate('EnterOTP', {phoneNumber});
  };

  const onPressLogIn = () => {
    NavigationService.navigate('LogIn');
  };

  return (
    <KeyboardAwareScrollView style={styles(colors).container}>
      <View style={styles(colors).logoContainer}>
        <CBLogo />
      </View>
      <View style={styles(colors).mainContainer}>
        <Text style={ApplicationStyles(colors).authTitle}>Reset Password</Text>
        <PhoneInput
          colors={colors}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
        <AuthButton
          label={'Send OTP'}
          style={styles(colors).sendBtn}
          onPress={() => onPressSend()}
        />
        <AnotherOption
          label={'Login in to your account'}
          style={styles(colors).option}
        />
        <AOButton label={'LOG IN'} onPress={() => onPressLogIn()} />
      </View>
    </KeyboardAwareScrollView>
  );
}
