import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../Home";
import Notifications from "../../notification/Notifications";

const Drawer = createDrawerNavigator();

export default function DrawerNavigatgor() {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props:NavDrawerProps)}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={Notifications} />
        </Drawer.Navigator>
    );
}