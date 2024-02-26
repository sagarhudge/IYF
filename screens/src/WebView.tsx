
import * as React from 'react';
import { Alert, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, View } from 'react-native';
// import { Avatar, Headline, Subheading, Text, Title } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../navigation/Index';
import { Title } from 'react-native-paper';

type props = {
    navigation: any,
    route: any
}

const WebViewScreen: React.FC<props> = (props: props): JSX.Element => {

    console.log('sadas', props.route.params)
    const url = props?.route?.params?.data?.item?.PresenterPageURL || 'About Presenter'
    const title = props?.route?.params?.data?.title || ''

    return (<View style={{ flex: 1, backgroundColor: '#dcdcdc' }}>
        <View style={{ width: '100%', height: 60, position: 'absolute', backgroundColor: '#fff', top: 0, zIndex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Icon name="arrow-back" size={30} color={theme.colors.primary} />

            </TouchableOpacity>
            <Title style={{ marginLeft: 16, color: theme.colors.primary, fontWeight: '500' }}>{title}</Title>
        </View>
        <WebView
            originWhitelist={["*"]}
            source={{ uri: url }}
        />



    </View>)
}

export default WebViewScreen;