import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as ROUTES from "../constants/routes";
import HomeScreen from "../screens/HomeScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ShopScreen from "../screens/ShopScreen";
import SettingsNavigator from "./SettingsNavigator";
import Icon from "react-native-vector-icons/Ionicons";
import Browse from "../screens/Browse";
import GroceryScreen from "../screens/GroceryScreen";

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
          } else if (route.name === ROUTES.BROWSE_SCREEN) {
            icon = focused ? "search" : "search-outline";
          } else if (route.name === ROUTES.GROCERY_SCREEN) {
            icon = focused ? "cube" : "cube-outline";
          } else if (route.name === ROUTES.SHOP_SCREEN) {
            icon = focused ? "card" : "card-outline";
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
        options={{ title: "Home", headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.BROWSE_SCREEN}
        component={Browse}
        options={{ title: "Browse", headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.GROCERY_SCREEN}
        component={GroceryScreen}
        options={{ title: "Grocery", headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.SHOP_SCREEN}
        component={ShopScreen}
        options={{ title: "Shop", headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{ title: "Settings", headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
