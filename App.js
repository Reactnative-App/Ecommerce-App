import React, {useEffect} from 'react';
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
  return <RootNavigator />;
}
