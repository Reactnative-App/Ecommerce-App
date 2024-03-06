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
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <RootNavigator />
    </View>
  );
}
