/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import RootNavigator from './screens/navigation/Index';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { Notification, getToken, onDisplayNotification, requestPermission } from './screens/utils/Notification';
import { LocaleStorage } from './screens/utils/LocaleStorage';
import { ApiService } from './screens/utils/ApiServices';

function App(): React.JSX.Element {

  const [token, setToken] = useState<string>('')


  async function updatetoken() {
    const old = await LocaleStorage.getDeviceId();
    if (token && old !== token) {
      const body = {
        device_id: token,
        email: ''
      }
      const resp = await ApiService.postData('device', body);
      console.log('token-updated', resp);
      LocaleStorage.setDeviceId(token);
    }
  }

  useEffect(() => {
    console.log('--token---2', token)

    // updatetoken();

  }, [token]);


  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      onDisplayNotification(remoteMessage.notification)
    });

    return unsubscribe;
  }, []);


  async function getTokens() {
    const token = await getToken();
    console.log('--token---', token)
    setToken(token);
  }

  useEffect(() => {
    getTokens();
    requestPermission();
    Notification()

  }, [])

  return (<>
    <RootNavigator />
  </>
  );
}

export default App;
