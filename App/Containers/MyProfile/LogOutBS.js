import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getDeviceHeight} from '../../Utils/extension';
import {scale} from '../../Utils/scale';
import BottomSheet from 'reanimated-bottom-sheet';
import CBDivider from '../../Components/CBDivider';
import ApplicationStyles from '../../Utils/ApplicationStyles';
import {useTheme} from '../../Providers/ThemeProvider';
import APIManager from '../../Network/APIManager';
import ChatService from '../../Utils/ChatService';
import CBLoader from '../../Components/CBLoader';
import {usePubNub} from 'pubnub-react';
import DialogUtil from '../../Utils/DialogUtil';

/**
 * LogOutBS
 * a bottom sheet for confirming logout
 *
 * @param {object} ref RefObject
 * @param {() => {}} onPressConfirm
 */

const LogOutBS = React.forwardRef((props, ref) => {
  const {colors} = useTheme();
  const pubnub = usePubNub();

  const {onPressConfirm, user} = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    APIManager.fetchGroups()
      .then(groupList => {
        setIsLoading(false);
        const mygroup = groupList.filter(g =>
          g.users.some(u => u.id === user.id),
        );

        ChatService.removeDeviceIds(pubnub, mygroup);

        APIManager.updateProfile({registration_id: ''});
        onPressConfirm();
      })
      .catch(error => {
        setIsLoading(false);
        DialogUtil.showError(error);
      });
  };

  const renderContent = () => {
    return (
      <View style={{height: getDeviceHeight()}}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => ref.current.snapTo(0)}
          activeOpacity={1.0}
        />
        <View style={styles(colors).container}>
          <View style={styles(colors).subContainer}>
            <View style={styles(colors).itemContainer}>
              <Text style={styles(colors).title}>
                Are you sure you want to log out?
              </Text>
            </View>
            <CBDivider />
            <TouchableOpacity
              style={styles(colors).itemContainer}
              onPress={() => handleLogout()}>
              <Text style={styles(colors).logout}>Log Out</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[styles(colors).subContainer, styles(colors).extraBottom]}>
            <TouchableOpacity
              style={styles(colors).itemContainer}
              onPress={() => ref.current.snapTo(0)}>
              <Text style={styles(colors).cancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        <CBLoader isLoading={isLoading} />
      </View>
    );
  };

  return (
    <BottomSheet
      ref={ref}
      snapPoints={[0, getDeviceHeight()]}
      borderRadius={scale(10)}
      renderContent={renderContent}
      enabledGestureInteraction={false}
      {...props}
    />
  );
});

export default LogOutBS;

const styles = Colors =>
  StyleSheet.create({
    container: {
      height: scale(154),
    },

    subContainer: {
      backgroundColor: Colors.white,
      borderRadius: scale(10),
      width: '100%',
    },
    extraBottom: {
      flex: 1,
      marginTop: scale(8),
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    itemContainer: {
      padding: scale(14),
      alignItems: 'center',
    },

    title: {
      ...ApplicationStyles(Colors).MediumFont,
      color: Colors.input1,
    },
    logout: {
      ...ApplicationStyles(Colors).MediumFont,
      color: '#B00020',
    },
    cancel: {
      ...ApplicationStyles(Colors).MediumFont,
      color: '#5D5FEF',
    },
  });
