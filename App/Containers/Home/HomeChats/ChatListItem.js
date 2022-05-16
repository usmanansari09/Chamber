import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from '../../../Utils/scale';
import CBAvatar from '../../../Components/CBAvatar';
import Constants from '../../../Constants/Constants';
import ApplicationStyles from '../../../Utils/ApplicationStyles';
import * as NavigationService from '../../../Navigators/NavigationService';
import {useTheme} from '../../../Providers/ThemeProvider';
import UserService from '../../../Utils/UserService';
import connect from 'react-redux/lib/connect/connect';
import DateTimeUtil from '../../../Utils/DateTimeUtil';
import moment from 'moment';

function ChatListItem({item, user}) {
  const {colors} = useTheme();
  // const [message, setMessage] = useState({mDes: '', time: null});

  // useEffect(() => {
  //   APIManager.fetchMessages(item.id)
  //     .then(res => {
  //       if (res.length !== 0) {
  //         const msg = res[0];
  //         console.log(msg);
  //         let mDes = '';
  //         if (user.id === msg.sender.id) {
  //           mDes = 'You';
  //         } else {
  //           mDes = msg.sender.fullname;
  //         }
  //
  //         mDes += ': ';
  //         if (msg.attachment != null) {
  //           mDes += 'attachment: ' + msg.attachment_name;
  //         } else {
  //           mDes += msg.message;
  //         }
  //         setMessage({mDes, time: msg.sent_at});
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [item.id, user.id]);

  let mDes = '';
  let time = null;
  const msg = item.last_message;

  if (msg != null && msg.sender != null) {
    if (user.id === msg.sender.id) {
      mDes = 'You';
    } else {
      mDes = msg.sender.fullname;
    }

    mDes += ': ';
    if (msg.attachment != null) {
      mDes += 'attachment: ' + msg.attachment_name;
    } else {
      mDes += msg.message;
    }

    time = msg.sent_at;
  }

  return (
    <TouchableOpacity
      style={styles(colors).mainContainer}
      onPress={() => {
        NavigationService.navigate('Chat', {item});
      }}>
      <View style={styles(colors).container}>
        <CBAvatar size={scale(48)} uri={UserService.getGroupImage(item, user)} />
        <View style={styles(colors).subContainer}>
          <View style={styles(colors).topContainer}>
            <Text style={styles(colors).name} numberOfLines={1}>
              {UserService.getGroupName(item, user)}
            </Text>
            {time != null && (
              <Text style={styles(colors).time}>
                {DateTimeUtil.getLocalTime(moment.utc(time).toDate())}
              </Text>
            )}
          </View>
          <Text style={styles(colors).description} numberOfLines={1}>
            {mDes}
          </Text>
        </View>
      </View>
      <View style={styles(colors).divider} />
    </TouchableOpacity>
  );
}

const mapStateToProps = state => ({
  user: state.User.user,
});

export default connect(mapStateToProps, null)(ChatListItem);

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
