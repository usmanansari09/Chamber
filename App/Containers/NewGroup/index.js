import React, {useRef, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as NavigationService from '../../Navigators/NavigationService';
import {styles} from './styles';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import CBAppBar from '../../Components/CBAppBar';
import * as userActions from '../../Sagas/UserSaga/actions';
import connect from 'react-redux/lib/connect/connect';
import CBInput from '../../Components/CBInput';
import {scale} from '../../Utils/scale';
import CBSvg from '../../assets/svgs/CBSvg';
import PicSVG from '../../assets/svgs/PicSVG';
import CreateChatSVG from '../../assets/svgs/CreateChatSVG';
import ProfileItemBtn from '../MyProfile/ProfileItemBtn';
import {useTheme} from '../../Providers/ThemeProvider';
import DialogUtil from '../../Utils/DialogUtil';
import Animated from 'react-native-reanimated';
import CameraChooseBS from '../MyProfile/CameraChooseBS';
import ImagePicker from 'react-native-image-crop-picker';
import Constants from '../../Constants/Constants';
import {getDeviceHeight} from '../../Utils/extension';

function NewGroupScreen() {
  const [groupName, setGroupName] = useState('');
  const [groupDes, setGroupDes] = useState('');
  const [groupImage, setGroupImage] = useState();

  let groupDesRef = useRef(null);
  let cameraBsRef = useRef(null);

  const {colors} = useTheme();

  const handleContinue = () => {
    if (groupName === '') {
      DialogUtil.showWarning('Group name field is required');
      return;
    }
    if (groupDesRef === '') {
      DialogUtil.showWarning('Group description field is required');
      return;
    }
    if (groupImage == null) {
      DialogUtil.showWarning('Picture is required');
      return;
    }
    NavigationService.navigate('AddPeoples', {
      info: {
        // image: {
        //   name: groupImage.filename ?? 'image.jpeg',
        //   uri: groupImage.path,
        //   type: groupImage.mime,
        // },
        name: groupName,
        description: groupDes,
      },
    });
  };

  const handleAddPhoto = () => {
    cameraBsRef.current.snapTo(1);
  };

  const onPressCamera = () => {
    cameraBsRef.current.snapTo(0);
    ImagePicker.openCamera({
      width: Constants.avatarSize,
      height: Constants.avatarSize,
      cropping: true,
    }).then(image => {
      setGroupImage(image);
    });
  };

  const onPressPL = () => {
    cameraBsRef.current.snapTo(0);
    ImagePicker.openPicker({
      width: Constants.avatarSize,
      height: Constants.avatarSize,
      cropping: true,
    }).then(image => {
      setGroupImage(image);
    });
  };

  let fall = new Animated.Value(1);

  console.log(groupImage);

  return (
    <View style={ApplicationStyles(colors).animationFullView}>
      <CameraChooseBS
        ref={cameraBsRef}
        callbackNode={fall}
        onPressCamera={onPressCamera}
        onPressPL={onPressPL}
      />
      <ScrollView bounces={false}>
        <Animated.View
          style={{
            ...ApplicationStyles(colors).fullView,
            opacity: Animated.add(0.6, Animated.multiply(fall, 0.9)),
            minHeight: getDeviceHeight(),
          }}>
          <CBAppBar title={'Add New Group'} />
          <View style={styles(colors).subContainer}>
            <Text style={styles(colors).title}>Group name</Text>
            <CBInput
              colors={colors}
              placeholder={'Business Conversation'}
              returnKeyType="next"
              value={groupName}
              onChangeText={text => setGroupName(text)}
              onSubmitEditing={() => groupDesRef.onFocus()}
            />
            <Text style={styles(colors).title}>Group Description</Text>
            <CBInput
              colors={colors}
              multiline
              ref={inputRef => (groupDesRef = inputRef)}
              placeholder={'Description'}
              value={groupDes}
              onChangeText={text => setGroupDes(text)}
            />
            <Text style={styles(colors).title}>Add a Profile Picture</Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-start'}}
              onPress={() => handleAddPhoto()}>
              <View style={styles(colors).pictureBtn}>
                {groupImage && (
                  <Image
                    source={{uri: groupImage.sourceURL ?? groupImage.path}}
                    resizeMode={'cover'}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: scale(8),
                    }}
                  />
                )}
                <View style={styles(colors).cameraIcon}>
                  <CBSvg icon={PicSVG} width={scale(20)} height={scale(20)} />
                </View>
              </View>
            </TouchableOpacity>

            <ProfileItemBtn
              style={{marginTop: scale(30), paddingHorizontal: 0}}
              icon={CreateChatSVG}
              label={'Add people'}
              onPress={() => handleContinue()}
            />
          </View>
        </Animated.View>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewGroupScreen);
