// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Home";
import AboutUs from "../../src/about/AboutUs";
import DrawerNavigator from "./DrawerNavigator";

import Icon from 'react-native-vector-icons/Octicons';
 
import WebViewScreen from "../../src/WebView";
import SendNotification from "../../src/SendNotification";
import PresenterDetails from "../../src/Presenter/PresenterDetails";
import PresentersList from "../../src/Presenter/PresentersList";
import Schedules from "../../src/schedule/Schedules";

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
      <Stack.Screen options={{ headerShown: false }} name="Home" component={DrawerNavigator} />
      {/* screens added here will be part od drawer */}
      <Stack.Screen options={{ title: 'Presenters' }} name="PresentersList" component={PresentersList} />
      <Stack.Screen options={{ title: 'WebViewScreen', headerShown: false }} name="WebViewScreen" component={WebViewScreen} />
      <Stack.Screen options={{ title: 'About Presenter' }} name="PresenterDetails" component={PresenterDetails} />
      <Stack.Screen options={{ title: 'About Us' }} name="AboutUs" component={AboutUs} />
      <Stack.Screen options={{ title: 'Notify Updates' }} name="SendNotification" component={SendNotification} />
      <Stack.Screen options={{ title: 'Schedules' }} name="Schedules" component={Schedules} />

    </Stack.Navigator>
  );
};

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="AboutUs" component={AboutUs} />
      {/* <Stack.Screen name="PresentersList" component={PresentersList} /> */}

    </Stack.Navigator>
  );
};

export { MainStackNavigator, AboutStackNavigator };
