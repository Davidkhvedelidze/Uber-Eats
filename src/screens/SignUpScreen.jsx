import React, { useState } from "react";
import * as ROUTES from "../constants/routes";
import Button from "../components/atoms/Button";
import { View, Text, Platform, Dimensions } from "react-native";
import { UpdateUser, User } from "../UserProvider";
import { login } from "../helpers/login";

function SignUpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go Login Screen"
        light
        onPress={() => navigation.navigate(ROUTES.LOGIN_SCREEN)}
      />
      <Button title="Go Back" light onPress={() => navigation.goBack()} />
    </View>
  );
}

export default SignUpScreen;
