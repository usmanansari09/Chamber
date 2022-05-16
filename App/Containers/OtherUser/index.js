import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import CBAppBar from '../../Components/CBAppBar';
import * as userActions from '../../Sagas/UserSaga/actions';
import connect from 'react-redux/lib/connect/connect';
import {scale} from '../../Utils/scale';
import CBAvatar from '../../Components/CBAvatar';
import ProfileItemBtn from '../MyProfile/ProfileItemBtn';
import CreateChatSVG from '../../assets/svgs/CreateChatSVG';
import {useTheme} from '../../Providers/ThemeProvider';
import UserService from '../../Utils/UserService';
import CBSvg from '../../assets/svgs/CBSvg';
import TalkingSVG from '../../assets/svgs/TalkingSVG';
import APIManager from '../../Network/APIManager';
import DialogUtil from '../../Utils/DialogUtil';
import CBLoader from '../../Components/CBLoader';
import * as NavigationService from '../../Navigators/NavigationService';
import ChatService from '../../Utils/ChatService';
import {usePubNub} from 'pubnub-react';

function OtherUserScreen(props) {
  const pubnub = usePubNub();
  const {user} = props;
  const oUser = props.navigation.getParam('user');
  const {colors} = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const onClickMessage = () => {
    setIsLoading(true);

    APIManager.fetchChatList()
      .then(res => {
        const existingGroups = res.filter(
          r =>
            !r.group_chat &&
            r.users.some(u => u.id === user.id) &&
            r.users.some(u => u.id === oUser.id),
        );
        if (existingGroups.length !== 0) {
          goChatRoom(existingGroups[0]);
        } else {
          creatChat();
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        DialogUtil.showWarning('Please try again later');
      });
  };

  const creatChat = () => {
    APIManager.createChat({
      name: 'Single',
      description: 'Single',
      group_chat: false,
      users: [user, oUser].map(item => ({id: item.id})),
    })
      .then(res => {
        console.log('created chat: ', res);
        goChatRoom(res);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        DialogUtil.showError(error);
      });
  };

  const goChatRoom = g => {
    ChatService.addDeviceIds(pubnub, [{id: g.id}], [user, oUser]);
    setTimeout(() => {
      setIsLoading(false);
      props.actions.fetchGroups();
      NavigationService.push('Chat', {item: g});
    }, 500);
  };

  return (
    <View style={ApplicationStyles(colors).fullView}>
      <CBAppBar title={'Other User’s Profile'} />

      <View
        style={{
          backgroundColor: colors.secondBack,
          paddingBottom: scale(10),
          borderBottomLeftRadius: scale(8),
          borderBottomRightRadius: scale(8),
        }}>
        <View style={styles(colors).avatarContainer}>
          <CBAvatar size={scale(96)} uri={oUser.image} />
        </View>
        <Text style={styles(colors).userName}>
          {UserService.getUserName(oUser)}
        </Text>
        <Text style={styles(colors).phone}>{oUser.phone}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: scale(10),
            marginHorizontal: scale(20),
          }}>
          <CBSvg
            icon={TalkingSVG}
            width={scale(22.51)}
            height={scale(22.5)}
            color={colors.gradient1}
            extraColor={colors.gradient2}
          />
          <Text style={styles(colors).talking}>Talking about investments</Text>
        </View>
      </View>
      <ProfileItemBtn
        style={{marginTop: scale(10)}}
        icon={CreateChatSVG}
        label={'Message'}
        onPress={() => onClickMessage()}
      />
      <CBLoader isLoading={isLoading} />
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

export default connect(mapStateToProps, mapDispatchToProps)(OtherUserScreen);
