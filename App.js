import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React, {useEffect} from 'react';
import { View } from 'react-native';
import RootNavigator from './Navigation/RootNavigator';
import {
  notificationListner,
  requestUserPermission,
} from './services/NotificationService';

export default function App() {
  useEffect(() => {
    requestUserPermission();
    notificationListner();
  }, []);
  return (

      <RootNavigator />

  );
}
