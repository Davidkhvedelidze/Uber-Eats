import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import * as ROUTES from "../constants/routes";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import SettingsDetails from "../screens/SettingsDetails";
import DrawerNavigator from "./DrawerNavigator";
import RestaurantDetails from "../screens/RestaurantDetails";
import { Host, Portal } from "react-native-portalize";
import Deals from "../screens/Deals";
import OrdersScreen from "../screens/OrdersScreen";
import OrderDetails from "../screens/OrderDetails";
import DeliveryDetails from "../screens/DeliveryDetails";
import GroceryScreen from "../screens/GroceryScreen";
import SafeWay from "../screens/SafeWay";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator initialRouteName={ROUTES.LOGIN_SCREEN}>
          <Stack.Screen
            name={ROUTES.LOGIN_SCREEN}
            component={LoginScreen}
            options={{ title: "Log in", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.REGISTER_SCREEN}
            component={RegisterScreen}
            options={{ title: "Register", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.FORGOT_PASSWORD_SCREEN}
            component={ForgotPasswordScreen}
            options={{ title: "Forgot Password", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.SIGN_UP_SCREEN}
            component={SignUpScreen}
            options={{ title: "Sign up", headerShown: false }}
          />

          <Stack.Screen
            name={ROUTES.DRAWER_NAVIGATOR}
            component={DrawerNavigator}
            options={{ title: "HOME", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.SETTINGS_DETAILS}
            component={SettingsDetails}
            options={{
              title: "Settings Details Screen",
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name={ROUTES.REST_DETAILS}
            component={RestaurantDetails}
            options={{ title: "Restaurant", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.ORDER_DETAILS}
            component={OrderDetails}
            options={{ title: "Order Details", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.DEALS_SCREEN}
            component={Deals}
            options={{ title: "Deals", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.DELIVERY_DETAILS}
            component={DeliveryDetails}
            options={{ title: "Delivery Details", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.GROCERY_SCREEN}
            component={GroceryScreen}
            options={{ title: "Grocery", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.SAFEWAY_SCREEN}
            component={SafeWay}
            options={{ title: "SafeWay", headerShown: false }}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default AuthNavigator;

//მთავარი ნავიგაცია რომელიც ექსპორტდება აპპ.ჯს ზე
