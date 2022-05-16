import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import * as NavigationService from '../../../Navigators/NavigationService';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import CBLogo from '../../../Components/CBLogo';
import AuthButton from '../AuthButton';
import AnotherOption from '../AnotherOption';
import AOButton from '../AOButton';
import DialogUtil from '../../../Utils/DialogUtil';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import PasswordInput from '../../../Components/PasswordInput';
import {scale} from '../../../Utils/scale';
import AuthBack from '../AuthBack';
import CBLoader from '../../../Components/CBLoader';
import APIManager from '../../../Network/APIManager';
import {useTheme} from '../../../Providers/ThemeProvider';

export default function ConfirmResetPassword(props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const {colors} = useTheme();

  let confirmPasswordRef = useRef(null);

  const onPressConfirm = () => {
    if (password === '') {
      DialogUtil.showWarning('New Password field is required');
      return;
    }

    if (confirmPassword === '') {
      DialogUtil.showWarning('Confirm New Password field is required');
      return;
    }

    if (password !== confirmPassword) {
      DialogUtil.showWarning('Passwords do not match');
      return;
    }

    setIsLoading(true);
    APIManager.resetPassword(props.navigation.getParam('token'), password)
      .then(res => {
        console.log(res);
        setIsLoading(false);
        NavigationService.navigate('LogIn');
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        DialogUtil.showWarning(error);
      });
  };

  const onPressLogIn = () => {
    NavigationService.navigate('LogIn');
  };

  return (
    <KeyboardAwareScrollView style={styles(colors).container}>
      <View style={styles(colors).logoContainer}>
        <CBLogo />
      </View>
      <View style={styles(colors).backBtn}>
        <AuthBack />
      </View>
      <View style={styles(colors).mainContainer}>
        <Text style={ApplicationStyles(colors).authTitle}>Reset Password</Text>
        <PasswordInput
          colors={colors}
          value={password}
          returnKeyType={'next'}
          onChangeText={text => setPassword(text)}
          onNext={() => confirmPasswordRef.onFocus()}
        />
        <PasswordInput
          colors={colors}
          ref={inputRef => (confirmPasswordRef = inputRef)}
          placeholder={'Confirm New Password'}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          onNext={() => onPressConfirm()}
        />
        <AuthButton
          label={'Confirm'}
          style={{marginTop: scale(20)}}
          onPress={() => onPressConfirm()}
        />
        <AnotherOption label={'Login in to your account'} />
        <AOButton label={'LOG IN'} onPress={() => onPressLogIn()} />
      </View>
      <CBLoader isLoading={isLoading} />
    </KeyboardAwareScrollView>
  );
}
