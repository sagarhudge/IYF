// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Home";
import PresentorsList from "../../src/Presentors/PresentorsList";
import AboutUs from "../../src/about/AboutUs";
import DrawerNavigator from "./DrawerNavigator";

import Icon from 'react-native-vector-icons/Octicons';

const MenuIcon = ({ navigate }: any) => <Icon
  name='three-bars'
  size={20}
  color='#000'
  onPress={() => navigate('DrawerOpen')}
/>;


const Stack = createStackNavigator();

const screenOptionStyle = {

  headerBackTitle: "Back",

  headerStyle: {
    backgroundColor: '#fff',
    // width: '75%'
  },
  headerTintColor: "#f74010",
  headerShown: true,
};


const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={DrawerNavigator} />
      {/* screens added here will be part od drawer */}
      <Stack.Screen name="PresentorsList" component={PresentorsList} />
      <Stack.Screen name="AboutUs" component={AboutUs} />

    </Stack.Navigator>
  );
};

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="AboutUs" component={AboutUs} />
      {/* <Stack.Screen name="PresentorsList" component={PresentorsList} /> */}

    </Stack.Navigator>
  );
};

export { MainStackNavigator, AboutStackNavigator };
