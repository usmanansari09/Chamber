import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import * as NavigationService from '../../../Navigators/NavigationService';
import {styles} from './styles';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import AuthBack from '../AuthBack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AuthButton from '../AuthButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import APIManager from '../../../Network/APIManager';
import DialogUtil from '../../../Utils/DialogUtil';
import CBLoader from '../../../Components/CBLoader';
import {useTheme} from '../../../Providers/ThemeProvider';

export default function EnterOTPScreen(props) {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {colors} = useTheme();

  const onPressContinue = () => {
    setIsLoading(true);
    const firstName = props.navigation.getParam('firstName');
    if (firstName == null) {
      APIManager.verifyOTP(token)
        .then(res => {
          console.log(res);
          setIsLoading(false);
          onVerified();
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
          DialogUtil.showWarning('Please try again later');
        });
    } else {
      APIManager.verifyOTP(token, true)
        .then(res => {
          console.log(res);
          setIsLoading(false);
          onVerified();
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
          DialogUtil.showWarning('Please try again later');
        });
    }
  };

  const onVerified = () => {
    const password = props.navigation.getParam('password');

    if (password != null) {
      NavigationService.navigate('LogIn');
    } else {
      NavigationService.navigate('ConfirmResetPassword', {token});
    }
  };

  return (
    <SafeAreaView style={ApplicationStyles(colors).fullView}>
      <KeyboardAwareScrollView contentContainerStyle={styles(colors).container}>
        <AuthBack />
        <View style={styles(colors).mainContainer}>
          <View style={styles(colors).subView}>
            <Text style={ApplicationStyles(colors).authTitle}>OTP Code</Text>
            <Text style={styles(colors).subTitle}>
              Enter the code sent to your phone number
            </Text>
            <OTPInputView
              style={styles(colors).otpContainer}
              pinCount={6}
              autoFocusOnLoad
              codeInputFieldStyle={styles(colors).underlineStyleBase}
              codeInputHighlightStyle={styles(colors).underlineStyleHighLighted}
              onCodeFilled={t => setToken(t)}
            />
            <AuthButton label={'Continue'} onPress={() => onPressContinue()} />
          </View>
        </View>
        <CBLoader isLoading={isLoading} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
