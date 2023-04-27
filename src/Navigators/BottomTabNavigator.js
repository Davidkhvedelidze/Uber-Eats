import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as ROUTES from "../constants/routes";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ShopScreen from "../screens/ShopScreen";
import SettingsNavigator from "./SettingsNavigator";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ color, size, focused }) => {
          let icon;
          if (route.name === ROUTES.HOME_SCREEN) {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.ORDERS_SCREEN) {
            icon = focused ? "card" : "card-outline";
          } else if (route.name === ROUTES.SHOP_SCREEN) {
            icon = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            icon = focused ? "settings" : "settings-outline";
          }
          return <Icon name={icon} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_SCREEN}
        component={HomeScreen}
        options={{ title: "HOME" }}
      />
      <Tab.Screen
        name={ROUTES.ORDERS_SCREEN}
        component={OrdersScreen}
        options={{ title: "ORDERS" }}
      />
      <Tab.Screen
        name={ROUTES.SHOP_SCREEN}
        component={ShopScreen}
        options={{ title: "SHOP" }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{ title: "SETTINGS" }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
