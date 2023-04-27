import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";

import * as ROUTES from "../constants/routes";
import HomeScreen from "../screens/HomeScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ShopScreen from "../screens/ShopScreen";
import SettingsNavigator from "./SettingsNavigator";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={ROUTES.BOTTOM_TAB_NAV}
        component={BottomTabNavigator}
        options={{ title: "SING UP", headerShown: true }}
      />
      <Drawer.Screen
        name={ROUTES.HOME_SCREEN}
        component={HomeScreen}
        options={{ title: "HOME", headerShown: false }}
      />
      <Drawer.Screen
        name={ROUTES.ORDERS_SCREEN}
        component={OrdersScreen}
        options={{ title: "ORDERS" }}
      />
      <Drawer.Screen
        name={ROUTES.SHOP_SCREEN}
        component={ShopScreen}
        options={{ title: "SHOP" }}
      />
      <Drawer.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{ title: "SETTINGS" }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
