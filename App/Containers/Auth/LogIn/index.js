import React, {useEffect, useState} from 'react';
import {Linking, Text, View} from 'react-native';
import * as NavigationService from '../../../Navigators/NavigationService';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import PhoneInput from '../../../Components/PhoneInput';
import PasswordInput from '../../../Components/PasswordInput';
import CBLogo from '../../../Components/CBLogo';
import ForgotPassword from './ForgotPassword';
import AuthButton from '../AuthButton';
import AnotherOption from '../AnotherOption';
import AOButton from '../AOButton';
import ValidateUtil from '../../../Utils/ValidateUtil';
import DialogUtil from '../../../Utils/DialogUtil';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import APIManager from '../../../Network/APIManager';
import CBLoader from '../../../Components/CBLoader';
import HelperService from '../../../Utils/HelperService';
import * as userActions from '../../../Sagas/UserSaga/actions';
import connect from 'react-redux/lib/connect/connect';
import {useTheme} from '../../../Providers/ThemeProvider';
import AuthBG from '../AuthBG';
import messaging from '@react-native-firebase/messaging';
import {usePubNub} from 'pubnub-react';
import ChatService from '../../../Utils/ChatService';
import {firebase} from '@react-native-firebase/dynamic-links';

function LogInScreen(props) {
  const pubnub = usePubNub();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {colors} = useTheme();

  useEffect(() => {
    messaging().requestPermission();
  }, []);

  useEffect(() => {
    loginUsingSavedCreds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginUsingSavedCreds = async () => {
    const credentials = await HelperService.getUserCredentials();
    if (credentials.phone && credentials.password) {
      setIsLoading(true);
      APIManager.login(credentials.phone, credentials.password)
        .then(async res => {
          await HelperService.storeUserToken(res.token);
          onLoginSuccess();
        })
        .catch(error => {
          setIsLoading(false);
          HelperService.clearUserCredentials();
        });
    }
  };

  const onPressLogIn = async () => {
    if (!ValidateUtil.validatePhoneNumber(phoneNumber)) {
      DialogUtil.showWarning('A valid phone number is required');
      return;
    }
    if (password === '') {
      DialogUtil.showWarning('Password field is required');
      return;
    }
    setIsLoading(true);
    APIManager.login(phoneNumber, password)
      .then(async res => {
        console.log('login success: ', res);
        await HelperService.storeUserToken(res.token);
        await HelperService.storeUserCredentials({
          phone: phoneNumber,
          password: password,
        });
        onLoginSuccess();
      })
      .catch(error => {
        onFailed(error);
      });
  };

  const onLoginSuccess = () => {
    messaging()
      .getToken()
      .then(fcmToken => {
        console.log('fcmToken', fcmToken);
        APIManager.updateProfile({registration_id: fcmToken})
          .then(profile => {
            setupChannels(profile.id);
          })
          .catch(error => {
            onFailed(error);
          });
      })
      .catch(error => {
        APIManager.updateProfile({registration_id: ''})
          .then(profile => {
            setupChannels(profile.id);
          })
          .catch(e => {
            onFailed(e);
          });
      });
  };

  const setupChannels = userId => {
    APIManager.fetchGroups()
      .then(groupList => {
        setIsLoading(false);
        const mygroup = groupList.filter(g =>
          g.users.some(u => u.id === userId),
        );

        ChatService.addDeviceIds(pubnub, mygroup);

        props.actions.getProfile();
        NavigationService.navigate('HomeStack');
      })
      .catch(error => {
        onFailed(error);
      });
  };

  const onFailed = error => {
    setIsLoading(false);
    DialogUtil.showError(error);
  };

  const onPressSignUp = () => {
    NavigationService.navigate('SignUp');
  };

  return (
    <View style={styles(colors).container}>
      <AuthBG />
      <KeyboardAwareScrollView>
        <View style={styles(colors).logoContainer}>
          <CBLogo />
        </View>
        <View style={styles(colors).mainContainer}>
          <Text style={ApplicationStyles(colors).authTitle}>Log In</Text>
          <PhoneInput
            colors={colors}
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
          />
          <PasswordInput
            colors={colors}
            value={password}
            onChangeText={text => setPassword(text)}
            onNext={() => onPressLogIn()}
          />
          <ForgotPassword />
          <AuthButton label={'Log in'} onPress={() => onPressLogIn()} />
          <AnotherOption label={'Don’t have an account?'} />
          <AOButton label={'SIGN UP'} onPress={() => onPressSignUp()} />
        </View>
        <CBLoader isLoading={isLoading} />
      </KeyboardAwareScrollView>
    </View>
  );
}

const mapDispatchToProps = dispatch => ({
  actions: {
    getProfile: () => {
      dispatch(userActions.getProfile());
    },
  },
});

export default connect(null, mapDispatchToProps)(LogInScreen);
