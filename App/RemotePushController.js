import React, {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from './Constants/Constants';

const RemotePushController = ({onRefresh}) => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('NOTIFICATION:', remoteMessage);
      const splits = remoteMessage.notification.body.split(': ');
      const currentRoom = await AsyncStorage.getItem(Constants.AS_CURRENT_ROOM);
      if (
        splits.length !== 0 &&
        currentRoom !== null &&
        currentRoom.includes(splits[0])
      ) {
        return;
      }
      PushNotification.localNotification({
        title: remoteMessage.notification.title,
        message: remoteMessage.notification.body,
      });
      onRefresh();
    });
    return unsubscribe;
  }, []);

  return null;
};

export default RemotePushController;
