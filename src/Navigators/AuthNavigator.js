import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import * as ROUTES from "../constants/routes";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import SettingsDetails from "../screens/SettingsDetails";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.LOGIN_SCREEN}>
        <Stack.Screen
          name={ROUTES.LOGIN_SCREEN}
          component={LoginScreen}
          options={{ title: "Sign in", headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.FORGOT_PASSWORD_SCREEN}
          component={ForgotPasswordScreen}
          options={{ title: "Forgot Password", headerShown: true }}
        />
        <Stack.Screen
          name={ROUTES.SIGN_UP_SCREEN}
          component={SignUpScreen}
          options={{ title: "Sign up", headerShown: true }}
        />

        <Stack.Screen
          name={ROUTES.DRAWER_NAVIGATOR}
          component={DrawerNavigator}
          options={{ title: "HOME", headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.SETTINGS_DETAILS}
          component={SettingsDetails}
          options={{ title: "Settings Details", headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;

//მთავარი ნავიგაცია რომელიც ექსპორტდება აპპ.ჯს ზე
