import React, {Component} from 'react';
import * as NavigationService from '../../../Navigators/NavigationService';
import ValidateUtil from '../../../Utils/ValidateUtil';
import DialogUtil from '../../../Utils/DialogUtil';
import APIManager from '../../../Network/APIManager';
import SignUpForm from './SignUpForm';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      company: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,

      isLoading: false,
    };
  }

  onPressSignUp = () => {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      company,
      password,
      confirmPassword,
      agreeTerms,
    } = this.state;

    if (firstName === '') {
      DialogUtil.showWarning('First Name field is required');
      return;
    }

    if (lastName === '') {
      DialogUtil.showWarning('Last Name field is required');
      return;
    }

    if (!ValidateUtil.validatePhoneNumber(phoneNumber)) {
      DialogUtil.showWarning('A valid phone number is required');
      return;
    }

    if (email === '') {
      DialogUtil.showWarning('Email field is required');
      return;
    }

    if (company === '') {
      DialogUtil.showWarning('Company field is required');
      return;
    }

    if (password === '') {
      DialogUtil.showWarning('Password field is required');
      return;
    }

    if (confirmPassword === '') {
      DialogUtil.showWarning('Confirm Password field is required');
      return;
    }

    if (!agreeTerms) {
      DialogUtil.showWarning(
        'You must agree to the terms of use and privacy policy',
      );
      return;
    }

    this.setState({isLoading: true});
    APIManager.register({
      firstName,
      lastName,
      phone: phoneNumber,
      email,
      company,
      password,
    })
      .then(res => {
        this.setState({isLoading: false});
        console.log(res);
        NavigationService.navigate('EnterOTP', {
          firstName,
          lastName,
          phoneNumber,
          email,
          company,
          password,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({isLoading: false});
        DialogUtil.showWarning(error);
      });
  };

  onPressLogIn = () => {
    NavigationService.navigate('LogIn');
  };

  render() {
    return (
      <SignUpForm
        state={this.state}
        setState={obj => this.setState(obj)}
        isLoading={this.state.isLoading}
        onPressLogIn={this.onPressLogIn}
        onPressSignUp={this.onPressSignUp}
      />
    );
  }
}
