
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { theme } from '../navigation/Index';
import Icon from 'react-native-vector-icons/Ionicons';
import { ApiService } from '../utils/ApiServices';

type props = {
    navigation: any
}


const SendNotification: React.FC<props> = (props: props): JSX.Element => {


    const [name, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(true)
    // const [validUser, setValid] = React.useState(false)

    
    async function verifyUser() {
        const body = { "username": name, "password": password }
        const resp: any = await ApiService.postData('admin/password', body);
        console.log('notification', resp);

        if (resp) {
            props.navigation.replace('Schedules', { isAdmin: true });
        }

    }
   

    return (<SafeAreaView style={{ backgroundColor: '#fff' }}>

        <View style={{ padding: 16 }}>


            <View  >
                <TextInput
                    label="Username"
                    value={name}
                    onChangeText={text => setUsername(text)}
                />
                <View style={{ marginVertical: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TextInput
                        style={{ flex: 1 }}
                        label="Password"
                        value={password}
                        secureTextEntry={showPassword}
                        onChangeText={text => setPassword(text)}
                    />

                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Icon name={showPassword ? "eye" : 'eye-off'} size={30} color={theme.colors.primary} />
                    </TouchableOpacity>
                </View>

                <Button textColor='#fff' buttonColor={theme.colors.primary} style={{ marginHorizontal: 16, marginBottom: 16 }} mode="contained" onPress={() => {
                    verifyUser()
                }}>
                    Verify Account
                </Button>
            </View>



        </View>

    </SafeAreaView>)
}

export default SendNotification;