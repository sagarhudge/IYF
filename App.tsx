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

function App({navigation}:any): React.JSX.Element {

  const [token, setToken] = useState<string>('')

  async function updatetoken() {
    const old = await LocaleStorage.getDeviceId();
    if (token && old !== token) {
      
      const body = {
        device_id: token,
        email: ''
      }

      const resp = await ApiService.postData('device', body);
      console.log('token-resp', resp)
      if (resp)
        LocaleStorage.setDeviceId(token);
    }
  }

  useEffect(() => {

    token !== '' && updatetoken();

  }, [token]);


  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      onDisplayNotification(remoteMessage.notification)
    });

    return unsubscribe;
  }, []);


  async function getTokens() {
    const token = await getToken();
    setToken(token);
  }

  useEffect(() => {
    getTokens();
    requestPermission();
    Notification(navigation)

  }, [])

  return (<>
    <RootNavigator />
  </>
  );
}

export default App;
