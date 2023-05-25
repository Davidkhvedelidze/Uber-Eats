import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import * as ROUTES from "../constants/routes";

import Button from "../components/atoms/Button";
import { Screen } from "../components/Screen";
import SettingsCard from "../components/organisms/SettingsCard";
import { ScrollView } from "react-native-gesture-handler";

const Btn = styled(Button)``;
const Container = styled(Screen)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const DetailsInfo = [
  {
    iconUrl: require("../components/pictures/SettingsIcons/Order.png"),
    title: "Orders",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/YourFav.png"),
    title: "Your Favorites",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Restaurant-Rewards.png"),
    title: "Restaurant Rewards",
    value: ROUTES.DEALS_SCREEN,
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Wallet.png"),
    title: "Wallet",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/GiftIcon.png"),
    title: "Send a gift",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Help.png"),
    title: "Help",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Promotions.png"),
    title: "Promotions",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Uber-Pass.png"),
    title: "Uber Pass ",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Deliver.png"),
    title: "Deliver with Uber",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Settings.png"),
    title: "Settings",
    value: ROUTES.SETTINGS_DETAILS,
  },
];

const UserCard = styled.View`
  width: 360px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const UserImage = styled.Image`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;
const UserName = styled.Text`
  width: 79px;
  height: 22px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

const SettingsScreen = ({ navigation }) => {
  const handlePress = (str) => {
    navigation.navigate(str, { num: 2 });
  };
  return (
    <Container
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {/* <Btn
        title="Go to Details"
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAILS)}
      /> */}
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 90 }}>
        <UserCard>
          <UserImage source={require("../components/pictures/UserImage.png")} />
          <UserName>John Doe</UserName>
        </UserCard>
        {/* <Text>SETTINGS SCREEN</Text> */}
        {DetailsInfo.map((card, idx) => {
          return (
            <SettingsCard
              key={idx}
              title={card.title}
              icon={card.iconUrl}
              onPress={() => handlePress(card.value)}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default SettingsScreen;
