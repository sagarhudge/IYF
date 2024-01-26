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
          backgroundColor: '#fda172',
          // width: '75%'
        },
      })}
      drawerContent={(props) => <NavigationDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* can havae navigator here */}

    </Drawer.Navigator>
  );
}