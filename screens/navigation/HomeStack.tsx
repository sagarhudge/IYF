
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import Home from '../Home';
import DetailsScreen from '../Details';
// stack type
import { HomeStackParams } from './types';
import DrawerNavigatgor from './navigator/DrawerNavigator';
import PresentersList from '../src/Presenter/PresentersList';

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={DrawerNavigatgor} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="PresentersList" component={PresentersList} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;