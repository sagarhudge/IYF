import { DrawerContent } from '@react-navigation/drawer';
import * as React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Image } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { drawerItem } from './items';
import { theme } from '../Index';
import { Caption, Title } from 'react-native-paper';
export interface iProps {
    navigation: any
}

export const NavigationDrawer = (props: any) => {
    const width = useWindowDimensions().width * 0.3;

    function drawerHeader() {

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* <Image source={require('../../../assets/')}/> */}
                <View style={{ backgroundColor: theme.colors.tertiary, padding: 16 }}>
                    <Title>International Yoga Festival</Title>
                    <Caption>15 March 2024, 6:00 AM </Caption>
                </View>
            </View>
        )

    }

    return (

        <>  
            {drawerHeader()}
            <DrawerContentScrollView {...props}>
                {drawerItem.map(item => <DrawerItem
                key={item.id}
                    label={item.title}
                    onPress={() => {
                        props.navigation.navigate(item.path);
                    }}
                />)}

            </DrawerContentScrollView>
        </>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    menuItemsCard: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    circleContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        padding: 10,
    },
});