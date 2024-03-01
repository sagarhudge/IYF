/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import RootNavigator from './screens/navigation/Index';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { Notification, getToken, onDisplayNotification, requestPermission } from './screens/utils/Notification';

function App(): React.JSX.Element {

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      onDisplayNotification(remoteMessage.notification)
    });

    return unsubscribe;
  }, []);


  useEffect(() => {
    getToken();
    requestPermission();
    Notification()

  }, [])

  return (<>
    <RootNavigator />
  </>
  );
}

export default App;
