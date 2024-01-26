import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../Home";
import Notifications from "../../notification/Notifications";
import React from "react";
import { NavigationDrawer } from "./NavigationDrawer";

const Drawer = createDrawerNavigator();

export const DrawerNavigatgor = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#fff',
          // width: '75%'
        },
        headerTintColor:"#f74010"
      })}
      drawerContent={(props) => <NavigationDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* can havae navigator here */}

    </Drawer.Navigator>
  );
}