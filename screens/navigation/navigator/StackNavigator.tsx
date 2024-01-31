// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Home";
 import AboutUs from "../../src/about/AboutUs";
import DrawerNavigator from "./DrawerNavigator";

import Icon from 'react-native-vector-icons/Octicons';
import PresentersList from "../../src/Presentors/PresentersList";
import PresenterDetails from "../../src/Presentors/PresenterDetails";

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
      <Stack.Screen options={{headerShown:false}} name="Home" component={DrawerNavigator} />
      {/* screens added here will be part od drawer */}
      <Stack.Screen options={{title:'Presenters'}} name="PresentersList" component={PresentersList} />
      <Stack.Screen options={{title:'Presenter Details'}} name="PresenterDetails" component={PresenterDetails} />
      <Stack.Screen  options={{title:'About Us'}} name="AboutUs" component={AboutUs} />

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
