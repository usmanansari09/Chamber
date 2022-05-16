import messaging from '@react-native-firebase/messaging';
import {isIOS} from './extension';

function getChannelId(group) {
  return `channel-${group.id}`;
}

const pushConfig = {
  pushGateway: 'gcm',
  // environment: 'production', // Required for APNs2
  // topic: 'com.mycompany.mybundleid', // Required for APNs2
};

function addDevice(pubnub, mygroup, fcmToken) {
  pubnub.push.addChannels(
    {
      channels: mygroup.map(g => getChannelId(g)),
      device: fcmToken,
      ...pushConfig,
    },
    function (status) {
      console.log(status);
    },
  );
}

function removeDevice(pubnub, mygroup, fcmToken) {
  pubnub.push.removeChannels(
    {
      channels: mygroup.map(g => getChannelId(g)),
      device: fcmToken,
      ...pushConfig,
    },
    function (status) {
      console.log(status);
    },
  );
}

function addDeviceIds(pubnub, mygroup, users) {
  console.log('addDeviceIds', users);
  if (users != null) {
    users.forEach(user => {
      const token = user.registration_id;
      if (token != null && token !== '') {
        addDevice(pubnub, mygroup, token);
      }
    });
  } else {
    console.log('addDeviceIds');
    messaging()
      .getToken()
      .then(fcmToken => {
        console.log('addDeviceIds', fcmToken);
        addDevice(pubnub, mygroup, fcmToken);
      });
  }
}

function removeDeviceIds(pubnub, mygroup, users) {
  console.log('removeDeviceIds', mygroup, users);
  if (users != null) {
    users.forEach(user => {
      const token = user.registration_id;
      if (token != null && token !== '') {
        removeDevice(pubnub, mygroup, token);
      }
    });
  } else {
    messaging()
      .getToken()
      .then(fcmToken => {
        removeDevice(pubnub, mygroup, fcmToken);
      });
  }
}

export default {
  getChannelId,
  addDeviceIds,
  removeDeviceIds,
};
