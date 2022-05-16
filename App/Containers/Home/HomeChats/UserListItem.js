import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from '../../../Utils/scale';
import CBAvatar from '../../../Components/CBAvatar';
import Constants from '../../../Constants/Constants';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import * as NavigationService from '../../../Navigators/NavigationService';
import {useTheme} from '../../../Providers/ThemeProvider';
import UserService from '../../../Utils/UserService';
import APIManager from '../../../Network/APIManager';
import DialogUtil from '../../../Utils/DialogUtil';
import connect from 'react-redux/lib/connect/connect';
import CBLoader from '../../../Components/CBLoader';
import ChatService from '../../../Utils/ChatService';
import {usePubNub} from 'pubnub-react';

function UserListItem({item, user}) {
  const pubnub = usePubNub();
  const {colors} = useTheme();
  const oUser = item;
  const [isLoading, setIsLoading] = useState(false);

  const onClickItem = () => {
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
      users: [user, oUser].map(it => ({id: it.id})),
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
      NavigationService.push('Chat', {item: g});
    }, 500);

    // props.actions.fetchGroups();
  };

  return (
    <TouchableOpacity
      style={styles(colors).mainContainer}
      onPress={() => onClickItem()}>
      <View style={styles(colors).container}>
        <CBAvatar size={scale(48)} uri={item.image} />
        <View style={styles(colors).subContainer}>
          <View style={styles(colors).topContainer}>
            <Text style={styles(colors).name} numberOfLines={1}>
              {UserService.getUserName(item)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles(colors).divider} />
      <CBLoader isLoading={isLoading} />
    </TouchableOpacity>
  );
}

const mapStateToProps = state => ({
  user: state.User.user,
});

export default connect(mapStateToProps, null)(UserListItem);

const styles = Colors =>
  StyleSheet.create({
    mainContainer: {
      marginLeft: Constants.appDefaultPadding,
    },
    container: {
      flexDirection: 'row',
      marginTop: scale(12),
    },
    subContainer: {
      flex: 1,
      marginLeft: scale(16),
    },
    topContainer: {
      marginTop: scale(2),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    name: {
      ...ApplicationStyles(Colors).SemiBoldFont,
      fontSize: scale(18),
      letterSpacing: -0.01,
      color: Colors.black,
      maxWidth: scale(240),
    },
    time: {
      ...ApplicationStyles(Colors).MediumFont,
      fontSize: scale(10),
      letterSpacing: -0.01,
      color: Colors.hintColor,
      marginRight: scale(12),
    },
    description: {
      marginTop: scale(2),
      ...ApplicationStyles(Colors).MediumFont,
      fontSize: scale(12),
      letterSpacing: -0.01,
      color: Colors.anotherOptionColor,
      marginRight: scale(16),
    },
    divider: {
      width: '100%',
      height: 1,
      backgroundColor: Colors.dividerColor,
      marginTop: scale(8),
    },
  });
