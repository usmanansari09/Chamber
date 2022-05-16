import React, {useEffect, useRef, useState} from 'react';
import {Keyboard, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import CBAppBar from '../../Components/CBAppBar';
import * as userActions from '../../Sagas/UserSaga/actions';
import connect from 'react-redux/lib/connect/connect';
import {scale} from '../../Utils/scale';
import CBAvatar from '../../Components/CBAvatar';
import ProfileItemBtn from '../MyProfile/ProfileItemBtn';
import CreateChatSVG from '../../assets/svgs/CreateChatSVG';
import CBDivider from '../../Components/CBDivider';
import AddPeopleSVG from '../../assets/svgs/AddPeopleSVG';
import CBSvg from '../../assets/svgs/CBSvg';
import LeaveSVG from '../../assets/svgs/LeaveSVG';
import EditSVG from '../../assets/svgs/EditSVG';
import PeopleItem from '../NewGroup/PeopleItem';
import RemoveSVG from '../../assets/svgs/RemoveSVG';
import {useTheme} from '../../Providers/ThemeProvider';
import DialogUtil from '../../Utils/DialogUtil';
import * as NavigationService from '../../Navigators/NavigationService';
import APIManager from '../../Network/APIManager';
import CBLoader from '../../Components/CBLoader';
import CameraChooseBS from '../MyProfile/CameraChooseBS';
import Animated from 'react-native-reanimated';
import {getDeviceHeight, isIOS} from '../../Utils/extension';
import ImagePicker from 'react-native-image-crop-picker';
import Constants from '../../Constants/Constants';
import EditGroupBS from './EditGroupBS';
import ChatService from '../../Utils/ChatService';
import {usePubNub} from 'pubnub-react';

function GroupDetailsScreen(props) {
  const {user} = props;
  const pubnub = usePubNub();
  const [group, setGroup] = useState(props.navigation.getParam('group'));
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const {colors} = useTheme();

  let profileBsRef = useRef(null);
  let cameraBsRef = useRef(null);

  const isOwner = user.id === group.created_by.id;

  useEffect(() => {
    APIManager.fetchGroup(group.id).then(res => {
      console.log(res);
      setGroup(res);
      const onChanged = props.navigation.getParam('onChanged');
      if (onChanged) {
        onChanged(res);
      }
      setReload(false);
    });
  }, [group.id, props.navigation, reload]);

  const onKeyboardDidShow = e => {
    setKeyboardHeight(isIOS() ? e.endCoordinates.height : 0);
  };

  const onKeyboardDidHide = () => {
    setKeyboardHeight(0);
  };

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const keyboardHidenListener = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );
    return () => {
      keyboardShowListener && keyboardShowListener.remove();
      keyboardHidenListener && keyboardHidenListener.remove();
    };
  }, []);

  const handleLeave = () => {
    if (isOwner) {
      DialogUtil.showWarning(
        'You cannot leave this team since you are the owner',
      );
      return;
    }

    // APIManager.updateMember(user.id, group.id)
    APIManager.updateMember({email: user.email, group_id: group.id})
      .then(res => {
        console.log(res);
        ChatService.removeDeviceIds(pubnub, [group]);
        props.actions.fetchGroups();
        NavigationService.navigate('Home');
      })
      .catch(error => {
        DialogUtil.showError(error);
      });
  };

  const handleRemoveMember = member => {
    setIsLoading(true);
    APIManager.updateMember({email: member.email, group_id: group.id})
      .then(res => {
        ChatService.removeDeviceIds(pubnub, [group], [member]);
        props.actions.fetchGroups();
        setReload(true);
        setTimeout(() => setIsLoading(false), 500);
      })
      .catch(error => {
        setIsLoading(false);
        DialogUtil.showError(error);
      });
  };

  const handleAddPeople = () => {
    if (!isOwner) {
      DialogUtil.showWarning('You have no permission to add people');
      return;
    }
    NavigationService.navigate('AddPeoples', {
      group,
      onResult: () => setReload(true),
    });
  };

  const renderHeader = () => (
    <View>
      <View style={styles(colors).avatarContainer}>
        <CBAvatar size={scale(96)} uri={group.image} />
      </View>
      <Text style={styles(colors).groupName}>{group.name}</Text>
      <Text style={styles(colors).description}>
        Created By {group?.created_by?.fullname ?? ''}
      </Text>
      <Text style={styles(colors).description}>{group.description}</Text>

      <View style={styles(colors).actions}>
        <View style={styles(colors).actionsItem}>
          <ProfileItemBtn
            style={styles(colors).addPeople}
            icon={AddPeopleSVG}
            onPress={() => handleAddPeople()}
          />
          <Text style={styles(colors).actionsItemTitle}>Add People</Text>
        </View>

        <View style={styles(colors).actionsItem}>
          <TouchableOpacity
            style={styles(colors).leaveGroup}
            onPress={() => handleLeave()}>
            <CBSvg icon={LeaveSVG} width={scale(22)} height={scale(22)} />
          </TouchableOpacity>
          <Text style={styles(colors).actionsItemTitle}>Leave Group</Text>
        </View>
      </View>

      <View style={{marginHorizontal: scale(20)}}>
        <CBDivider />
      </View>

      <Text style={styles(colors).moreActions}>MORE ACTIONS</Text>
      <ProfileItemBtn
        style={{marginTop: scale(10), marginBottom: scale(10)}}
        icon={CreateChatSVG}
        label={'View Documents'}
        onPress={() => NavigationService.navigate('DocumentPreview', {group})}
      />
      <Text style={styles(colors).moreActions}>MEMBERS</Text>
    </View>
  );

  const renderHeaderRight = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (!isOwner) {
            DialogUtil.showWarning('You have no permission to edit');
            return;
          }
          profileBsRef.current.snapTo(1);
        }}>
        <CBSvg
          icon={EditSVG}
          width={scale(26)}
          height={scale(26)}
          color={colors.gradient1}
          extraColor={colors.gradient2}
        />
      </TouchableOpacity>
    );
  };

  const fall = useRef(new Animated.Value(1)).current;

  const onConfirmEdit = (name, description) => {
    updateGroup({name, description});
  };

  const onPressAvatar = () => {
    cameraBsRef.current.snapTo(1);
  };

  const onPressCamera = () => {
    cameraBsRef.current.snapTo(0);
    ImagePicker.openCamera({
      width: Constants.avatarSize,
      height: Constants.avatarSize,
      cropping: true,
    }).then(image => {
      this.uploadPhoto(image);
    });
  };

  const onPressPL = () => {
    cameraBsRef.current.snapTo(0);
    ImagePicker.openPicker({
      width: Constants.avatarSize,
      height: Constants.avatarSize,
      cropping: true,
    }).then(image => {
      uploadPhoto(image);
    });
  };

  const uploadPhoto = image => {
    updateGroup({
      image: {
        name: image.filename ?? 'image.jpeg',
        uri: image.path,
        type: image.mime,
      },
    });
  };

  const updateGroup = request => {
    setIsLoading(true);
    APIManager.updateGroup(group.id, request)
      .then(res => {
        setIsLoading(false);
        console.log(res);
        setReload(true);
        props.actions.fetchGroups();
      })
      .catch(error => {
        setIsLoading(false);
        DialogUtil.showWarning(error);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#2c2c2f'}}>
      <CameraChooseBS
        ref={cameraBsRef}
        callbackNode={fall}
        onPressCamera={onPressCamera}
        onPressPL={onPressPL}
      />
      <EditGroupBS
        ref={profileBsRef}
        group={group}
        extraHeight={keyboardHeight}
        callbackNode={fall}
        onPressConfirm={onConfirmEdit}
        onPressAvatar={onPressAvatar}
      />

      <Animated.View
        style={{
          ...ApplicationStyles(colors).fullView,
          opacity: Animated.add(0.6, Animated.multiply(fall, 0.9)),
          minHeight: getDeviceHeight(),
        }}>
        <ScrollView bounces={false}>
          <CBAppBar title={'Details'} renderHeaderRight={renderHeaderRight} />
          {renderHeader()}
          {group.users.map((item, index) => (
            <TouchableOpacity
              key={`${index}`}
              onPress={() => {
                if (item.id === user.id) {
                  NavigationService.navigate('MyProfile', {
                    onResult: () => setReload(true),
                  });
                } else {
                  NavigationService.navigate('OtherUser', {user: item});
                }
              }}>
              <PeopleItem
                item={item}
                index={index}
                renderRight={() =>
                  isOwner && item.id !== user.id ? (
                    <TouchableOpacity
                      style={{marginTop: scale(4)}}
                      onPress={() => handleRemoveMember(item)}>
                      <CBSvg
                        icon={RemoveSVG}
                        width={scale(24)}
                        height={scale(24)}
                      />
                    </TouchableOpacity>
                  ) : null
                }
              />
            </TouchableOpacity>
          ))}
          <View style={{marginBottom: scale(40)}} />

          <CBLoader isLoading={isLoading} />
        </ScrollView>
      </Animated.View>
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
    fetchGroups: () => {
      dispatch(userActions.fetchGroups());
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetailsScreen);
