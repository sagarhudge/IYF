
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import notifee from '@notifee/react-native';
import { LocaleStorage } from './LocaleStorage';
import { ApiService } from './ApiServices';

export async function Notification() {

    // messaging()?.onMessage(async remoteMessage => {
    //     console.log('onMessage', remoteMessage)
    //     onDisplayNotification(remoteMessage.notification)
    //     // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });

    messaging()?.onNotificationOpenedApp(remoteMessage => {
        console.log('onNotificationOpenedApp', remoteMessage)
    });

    messaging()?.getInitialNotification().then((remoteNotify) => {

        if (remoteNotify) {
            console.log('getInitialNotification', remoteNotify)
        }
    })

}


export const onDisplayNotification = async (notification: any) => {
    // Request permissions (required for iOS)
    console.log('disp notification', "notification")

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
    });

    await notifee.requestPermission()


    await notifee.displayNotification({
        id: new Date().getTime().toString(),
        title: notification?.title,
        body: notification?.body,
        android: {
            channelId,
        },
    });
}

export async function requestPermission() {

    const auth = await messaging()?.requestPermission();
    const enabled = auth === messaging.AuthorizationStatus.AUTHORIZED || auth === messaging.AuthorizationStatus.PROVISIONAL;

    if (!enabled) {
        Alert.alert("Notification", "This application doest not have permission to diplay notiifcation")

    }

}


export async function getToken() {
    await messaging()?.registerDeviceForRemoteMessages();
    const token = await messaging()?.getToken();
    // const tokenNew = messaging()?.onTokenRefresh(newToken => newToken);
    console.log("device_token", token);

    const old = await LocaleStorage.getDeviceId();
    if (old !== token) {
        const body = {
            device_id: token,
            email: ''
        }
        const resp = await ApiService.postData('/device', body);
        console.log('token', resp)
        LocaleStorage.setDeviceId(token)
    }

    return token;
};
