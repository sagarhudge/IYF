

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStackNavigator, MainStackNavigator } from "./StackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import { NavigationDrawer } from "./NavigationDrawer";
import Home from "../../Home";
import { theme } from "../Index";
const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerBackTitle: "Back",
  headerStyle: {
    backgroundColor: '#fff',
    // width: '75%'
  },
  headerTintColor: theme.colors.primary,headerShown:true
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle}
      drawerContent={(props) => <NavigationDrawer {...props} />}>
      <Drawer.Screen  name="International Yoga Festival" component={Home} />
      {/* if you do not want bottom tab assign main stack navigator to drawer */}
      {/* <Drawer.Screen name="About" component={AboutStackNavigator} /> */}
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;