import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import * as ROUTES from "../constants/routes";

import Button from "../components/atoms/Button";

const Btn = styled(Button)``;

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SETTINGS SCREEN</Text>
      <Btn
        title="Go to Details"
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAILS)}
      />
    </View>
  );
};

export default SettingsScreen;
