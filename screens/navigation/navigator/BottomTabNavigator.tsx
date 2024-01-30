import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, AboutStackNavigator } from "./StackNavigator";
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="About" component={AboutStackNavigator} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator