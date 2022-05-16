import React, {Component} from 'react';
import {Keyboard, ScrollView, View} from 'react-native';
import * as NavigationService from '../../Navigators/NavigationService';
import LogOutBS from './LogOutBS';
import Animated from 'react-native-reanimated';
import EditProfileBS from './EditProfileBS';
import * as userActions from '../../Sagas/UserSaga/actions';
import connect from 'react-redux/lib/connect/connect';
import HelperService from '../../Utils/HelperService';
import CameraChooseBS from './CameraChooseBS';
import * as ImagePicker from 'react-native-image-crop-picker';
import Constants from '../../Constants/Constants';
import CBLoader from '../../Components/CBLoader';
import APIManager from '../../Network/APIManager';
import DialogUtil from '../../Utils/DialogUtil';
import ProfileForm from './ProfileForm';
import {isIOS} from '../../Utils/extension';

class MyProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.bsRef = React.createRef(null);
    this.profileBsRef = React.createRef(null);
    this.cameraBsRef = React.createRef(null);
    this.state = {
      keyboardHeight: 0,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.onKeyboardDidShow,
    );
    this.keyboardHidenListener = Keyboard.addListener(
      'keyboardDidHide',
      this.onKeyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardShowListener && this.keyboardShowListener.remove();
    this.keyboardHidenListener && this.keyboardHidenListener.remove();
  }

  onKeyboardDidShow = e => {
    this.setState({keyboardHeight: isIOS() ? e.endCoordinates.height : 0});
  };

  onKeyboardDidHide = () => {
    this.setState({keyboardHeight: 0});
  };

  handleLogout = async () => {
    this.bsRef.current.snapTo(0);
    await HelperService.storeUserToken('');
    await HelperService.clearUserCredentials();
    NavigationService.navigate('LogIn');
  };

  onPressCamera = () => {
    this.cameraBsRef.current.snapTo(0);
    ImagePicker.openCamera({
      width: Constants.avatarSize,
      height: Constants.avatarSize,
      cropping: true,
    }).then(image => {
      this.uploadPhoto(image);
    });
  };

  onPressPL = () => {
    this.cameraBsRef.current.snapTo(0);
    ImagePicker.openPicker({
      width: Constants.avatarSize,
      height: Constants.avatarSize,
      cropping: true,
    }).then(image => {
      this.uploadPhoto(image);
    });
  };

  updateProfile = request => {
    this.setState({isLoading: true});
    APIManager.updateProfile(request)
      .then(res => {
        this.setState({isLoading: false});
        console.log(res);
        this.props.actions.getProfile();
        const onResult = this.props.navigation.getParam('onResult');
        if (onResult) {
          onResult();
        }
      })
      .catch(error => {
        this.setState({isLoading: false});
        DialogUtil.showWarning(error);
      });
  };

  uploadPhoto = image => {
    this.updateProfile({
      image: {
        name: image.filename ?? 'image.jpeg',
        uri: image.path,
        type: image.mime,
      },
    });
  };

  onConfirmEdit = request => {
    this.updateProfile(request);
  };

  onPressAvatar = () => {
    this.cameraBsRef.current.snapTo(1);
  };

  fall = new Animated.Value(1);

  render() {
    const {keyboardHeight} = this.state;
    const {user} = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#2c2c2f'}}>
        <CameraChooseBS
          ref={this.cameraBsRef}
          callbackNode={this.fall}
          onPressCamera={this.onPressCamera}
          onPressPL={this.onPressPL}
        />
        <LogOutBS
          ref={this.bsRef}
          callbackNode={this.fall}
          user={user}
          onPressConfirm={this.handleLogout}
        />
        <EditProfileBS
          ref={this.profileBsRef}
          user={user}
          extraHeight={keyboardHeight}
          callbackNode={this.fall}
          onPressConfirm={this.onConfirmEdit}
          onPressAvatar={this.onPressAvatar}
        />
        <ScrollView bounces={false}>
          <ProfileForm
            user={user}
            fall={this.fall}
            handleOpenProfileBS={() => this.profileBsRef.current.snapTo(1)}
            handleOpenBS={() => this.bsRef.current.snapTo(1)}
          />
        </ScrollView>
        <CBLoader isLoading={this.state.isLoading} />
      </View>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileScreen);
