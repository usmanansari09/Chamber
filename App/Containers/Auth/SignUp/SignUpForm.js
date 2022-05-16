import React, {useRef} from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import AuthInput from '../../../Components/AuthInput';
import CheckBox from './CheckBox';
import AuthButton from '../AuthButton';
import AnotherOption from '../AnotherOption';
import AOButton from '../AOButton';
import CBLoader from '../../../Components/CBLoader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTheme} from '../../../Providers/ThemeProvider';

export default function SignUpForm(props) {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    company,
    password,
    confirmPassword,
    agreeTerms,
  } = props.state;
  const {onPressLogIn, onPressSignUp, isLoading} = props;

  let lastNameRef = useRef(null);
  let phoneNumberRef = useRef(null);
  let emailRef = useRef(null);
  let companyRef = useRef(null);
  let passwordRef = useRef(null);
  let confirmPasswordRef = useRef(null);

  const {colors} = useTheme();

  return (
    <KeyboardAwareScrollView style={styles(colors).container}>
      <View style={styles(colors).mainContainer}>
        <Text style={ApplicationStyles(colors).authTitle}>Sign Up</Text>
        <AuthInput
          colors={colors}
          placeholder={'First Name'}
          returnKeyType="next"
          value={firstName}
          onChangeText={text => props.setState({firstName: text})}
          onSubmitEditing={() => lastNameRef.onFocus()}
        />
        <AuthInput
          colors={colors}
          ref={inputRef => (lastNameRef = inputRef)}
          placeholder={'Last Name'}
          returnKeyType="next"
          value={lastName}
          onChangeText={text => props.setState({lastName: text})}
          onSubmitEditing={() => phoneNumberRef.onFocus()}
        />
        <AuthInput
          colors={colors}
          ref={inputRef => (phoneNumberRef = inputRef)}
          placeholder={'Phone Number'}
          keyboardType={'decimal-pad'}
          returnKeyType="next"
          value={phoneNumber}
          onChangeText={text => props.setState({phoneNumber: text})}
          onSubmitEditing={() => emailRef.onFocus()}
        />
        <AuthInput
          colors={colors}
          ref={inputRef => (emailRef = inputRef)}
          placeholder={'Email'}
          keyboardType={'email-address'}
          returnKeyType="next"
          value={email}
          onChangeText={text => props.setState({email: text})}
          onSubmitEditing={() => companyRef.onFocus()}
        />
        <AuthInput
          colors={colors}
          ref={inputRef => (companyRef = inputRef)}
          placeholder={'Company'}
          returnKeyType="next"
          value={company}
          onChangeText={text => props.setState({company: text})}
          onSubmitEditing={() => passwordRef.onFocus()}
        />
        <AuthInput
          colors={colors}
          ref={inputRef => (passwordRef = inputRef)}
          placeholder={'Password'}
          returnKeyType="next"
          value={password}
          secureTextEntry={true}
          onChangeText={text => props.setState({password: text})}
          onSubmitEditing={() => confirmPasswordRef.onFocus()}
        />
        <AuthInput
          colors={colors}
          ref={inputRef => (confirmPasswordRef = inputRef)}
          placeholder={'Confirm Password'}
          returnKeyType="go"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={text => props.setState({confirmPassword: text})}
          onSubmitEditing={() => onPressSignUp()}
        />
        <CheckBox
          value={agreeTerms}
          onChange={value => props.setState({agreeTerms: value})}
        />
        <AuthButton
          label={'Sign Up'}
          style={styles(colors).signUpBtn}
          onPress={() => onPressSignUp()}
        />
        <AnotherOption label={'Already have an account?'} />
        <AOButton label={'LOG IN'} onPress={() => onPressLogIn()} />
      </View>
      <CBLoader isLoading={isLoading} />
    </KeyboardAwareScrollView>
  );
}
