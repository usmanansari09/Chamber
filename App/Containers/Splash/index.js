import React, {Component} from 'react';
import {View} from 'react-native';
import * as NavigationService from '../../Navigators/NavigationService';
import {styles} from './styles';
import CBLogo from '../../Components/CBLogo';
import HelperService from '../../Utils/HelperService';
import connect from 'react-redux/lib/connect/connect';
import * as userActions from '../../Sagas/UserSaga/actions';
import {useTheme} from '../../Providers/ThemeProvider';
import AuthBG from '../Auth/AuthBG';
import dynamicLinks from '@react-native-firebase/dynamic-links';

class SplashScreen extends Component {
  async componentDidMount() {
    const token = await HelperService.getUserToken();
    console.log('token', token);
    if (token !== '') {
      this.props.actions.getProfile();
    } else {
      setTimeout(async () => {
        dynamicLinks()
          .getInitialLink()
          .then(link => {
            if (link) {
              if (link.url === 'https://rnchamberapp.page.link/') {
                NavigationService.navigate('SignUp');
              }
            } else {
              NavigationService.navigate('LogIn');
            }
          });
      }, 2000);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user.id != null && prevProps.user.id == null) {
      NavigationService.navigate('HomeStack');
    }
  }

  render() {
    return <SplashContainer />;
  }
}

function SplashContainer() {
  const {colors} = useTheme();
  return (
    <View style={styles(colors).container}>
      <AuthBG />
      <CBLogo />
    </View>
  );
}

const mapStateToProps = state => ({
  user: state.User.user,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getProfile: () => {
      dispatch(userActions.getProfile());
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
