import React, {useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {styles} from './styles';

import * as NavigationService from '../../Navigators/NavigationService';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import CBAppBar from '../../Components/CBAppBar';
import * as userActions from '../../Sagas/UserSaga/actions';
import connect from 'react-redux/lib/connect/connect';
import {scale} from '../../Utils/scale';
import ProfileItemBtn from '../MyProfile/ProfileItemBtn';
import CreateSVG from '../../assets/svgs/CreateSVG';
import CBSvg from '../../assets/svgs/CBSvg';
import EditSVG from '../../assets/svgs/EditSVG';
import DeleteSVG from '../../assets/svgs/DeleteSVG';
import PeopleItem from '../NewGroup/PeopleItem';
import RemoveSVG from '../../assets/svgs/RemoveSVG';
import {useTheme} from '../../Providers/ThemeProvider';
import DialogUtil from '../../Utils/DialogUtil';
import CBLoader from '../../Components/CBLoader';
import Animated from 'react-native-reanimated';
import {getDeviceHeight, isIOS} from '../../Utils/extension';
import APIManager from '../../Network/APIManager';
import ChatService from '../../Utils/ChatService';
import {usePubNub} from 'pubnub-react';
import {useDispatch} from 'react-redux';

const ChamberDetailsScreen = props => {
  const {user} = props;
  const pubnub = usePubNub();
  const dispatch = useDispatch();
  const [chamber, setChamber] = useState(props.navigation.getParam('chamber'));
  const [title, setTitle] = useState(props.navigation.getParam('chamber').name);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [reload, setReload] = useState(false);
  const {colors} = useTheme();

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

  useEffect(() => {
    APIManager.fetchGroup(chamber.id).then(res => {
      setChamber(res);
      setReload(false);
    });
  }, [chamber.id, props.navigation, reload]);

  const handleLeave = () => {
    if (true) {
      DialogUtil.showWarning(
        'You cannot leave this team since you are the owner',
      );
    }
  };

  const updateGroup = request => {
    setIsLoading(true);
    APIManager.updateGroup(chamber.id, request)
      .then(res => {
        setIsLoading(false);
        setReload(true);
        setIsEdit(false);
        dispatch(userActions.fetchGroups());
      })
      .catch(error => {
        setIsLoading(false);
        DialogUtil.showWarning(error);
      });
  };

  const handleRemoveMember = member => {
    setIsLoading(true);
    APIManager.updateMember({email: member.email, group_id: chamber.id})
      .then(res => {
        ChatService.removeDeviceIds(pubnub, [chamber], [member]);
        dispatch(userActions.fetchGroups());
        setReload(true);
        DialogUtil.showWarning(
          `${member.first_name} ${member.last_name} removed from this group`,
        );
        setTimeout(() => setIsLoading(false), 500);
      })
      .catch(error => {
        setIsLoading(false);
        DialogUtil.showError(error);
      });
  };

  const renderHeader = () => (
    <View style={styles(colors).headerContainer}>
      <Text style={styles(colors).title}>Chamber Name</Text>
      <View style={styles(colors).EditTitleContainer}>
        <TextInput
          editable={isEdit}
          style={styles(colors).chamberName}
          placeholder={'Chamber Name'}
          value={title}
          onChangeText={text => setTitle(text)}
          onSubmitEditing={evt => updateGroup({name: evt.nativeEvent.text})}
        />
        {isEdit && (
          <CBSvg
            icon={EditSVG}
            width={scale(26)}
            height={scale(26)}
            color={colors.gradient1}
            extraColor={colors.gradient2}
          />
        )}
      </View>
      <Text style={styles(colors).title}>Created By</Text>
      <Text style={styles(colors).chamberName}>
        {chamber.created_by.fullname}
      </Text>

      <ProfileItemBtn
        style={styles(colors).inviteBtn}
        icon={CreateSVG}
        label={'Invite Users'}
        onPress={() =>
          NavigationService.navigate('InviteUser', {
            chamber: chamber,
          })
        }
      />
      <Text style={styles(colors).moreActions}>MEMBERS</Text>
    </View>
  );

  const renderHeaderRight = () => {
    if (!isEdit) {
      return (
        <TouchableOpacity
          onPress={() => {
            setIsEdit(true);
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
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            setIsEdit(false);
          }}>
          <CBSvg
            icon={DeleteSVG}
            width={scale(26)}
            height={scale(26)}
            color={colors.gradient1}
            extraColor={colors.gradient2}
          />
        </TouchableOpacity>
      );
    }
  };

  const fall = useRef(new Animated.Value(1)).current;

  return (
    <View style={{flex: 1, backgroundColor: '#2c2c2f'}}>
      <Animated.View
        style={{
          ...ApplicationStyles(colors).fullView,
          opacity: Animated.add(0.6, Animated.multiply(fall, 0.9)),
          minHeight: getDeviceHeight(),
        }}>
        <ScrollView bounces={false}>
          <CBAppBar
            title={'Chamber Details'}
            renderHeaderRight={renderHeaderRight}
          />
          {renderHeader()}
          {chamber.users.map((item, index) => (
            <TouchableOpacity key={`${index}`} onPress={() => {}}>
              <PeopleItem
                item={item}
                index={index}
                renderRight={() =>
                  chamber.created_by.id !== item.id ? (
                    <TouchableOpacity
                      style={{marginTop: scale(4)}}
                      onPress={() => {
                        Alert.alert(
                          'Remove Member',
                          `Do you really want to remove ${item.first_name} ${item.last_name} from this group`,
                          [
                            {
                              text: 'Cancel',
                              onPress: () => console.log('Cancel Pressed'),
                              style: 'cancel',
                            },
                            {
                              text: 'Remove',
                              onPress: () => handleRemoveMember(item),
                            },
                          ],
                        );
                      }}>
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
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChamberDetailsScreen);
