import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {Alert, PermissionsAndroid, Platform} from 'react-native';

export async function requestUserPermission() {
  if (Platform.OS == 'ios') {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      getFCMTokens();
    } else {
      console.log('Authorization not status:');
    }
  } else {
    if (Platform.Version >= 33) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          {
            title: 'Notification Permission',
            message: Strings.NOTIFICATION_PERMISSION_MESSAGE,
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getFCMTokens();
        } else {
          Alert.alert(
            'Permission denied',
            'Please allow permission from app info, to get notifications.',
          );
        }
      } catch (err) {}
    } else {
      getFCMTokens();
    }
  }
}
const getFCMTokens = async () => {
  const authToken = await messaging().getToken();
  // await AsyncStorage.setItem('FCM_ID', authToken);
  console.log('authToken=>', authToken);
};

export const notificationListner = async () => {
  messaging().onNotificationOpenedApp(async remoteMessage => {
    // navigation.navigate(remoteMessage.data.type);
    console.log('backgroud state=>', remoteMessage);
    // let mNotification = JSON.parse(remoteMessage.data.body);
  });

  // Check whether an initial notification is available
  messaging().getInitialNotification(async remoteMessage => {
    console.log('remote messgae=>', remoteMessage);
    if (remoteMessage) {
      // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      console.log('remote messgae=>', remoteMessage);
      // let mNotification = JSON.parse(remoteMessage.data.body);
    }
  });
  // for background and quit state
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    // let mNotification = JSON.parse(remoteMessage.data.body);
  });
  // for foreground state
  messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!', remoteMessage);
    // let mNotification = JSON.parse(remoteMessage.data.body);
  });
};
