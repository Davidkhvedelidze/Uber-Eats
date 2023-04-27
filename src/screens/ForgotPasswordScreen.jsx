import React from "react";
import * as ROUTES from "../constants/routes";
import Button from "../components/atoms/Button";
import { View, Text, Platform, Dimensions } from "react-native";

function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Forgot Password Screen</Text>
      <Button
        title="Go To Sing Up "
        light
        onPress={() => navigation.navigate(ROUTES.SIGN_UP_SCREEN)}
      />
      <Button title="Go Back " light onPress={() => navigation.goBack()} />
    </View>
  );
}

export default ForgotPasswordScreen;
