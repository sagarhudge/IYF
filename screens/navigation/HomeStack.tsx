
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import HomeScreen from '../Home';
import DetailsScreen from '../Details';
// stack type
import { HomeStackParams } from './types';
import { DrawerNavigatgor } from './navigator/DrawerNavigator';
 const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={DrawerNavigatgor} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;