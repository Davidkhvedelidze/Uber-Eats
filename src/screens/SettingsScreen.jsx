import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as ROUTES from "../constants/routes";

import Button from "../components/atoms/Button";
import { Screen } from "../components/Screen";
import SettingsCard from "../components/organisms/SettingsCard";
import { ScrollView } from "react-native-gesture-handler";
import { DetailsInfo } from "../data/appData";
import { User } from "../UserProvider";
import { removeItemValue } from "../helpers/manageStorage";
import AppSnackBar from "../components/molecules/AppSnackBar";
import { log } from "react-native-reanimated";
import { getData } from "../helpers/manageStorage";

const Btn = styled(Button)``;
const Container = styled(Screen)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

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
  height: 22px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

const SettingsScreen = ({ navigation }) => {
  const [details, setDetails] = useState(DetailsInfo);
  // const user = User();

  const handlePress = (str) => {
    navigation.navigate(str, { num: 2 });
  };

  const [user, setUser] = useState();

  const [Logout, setLogout] = useState(false);

  const handleLogOut = async () => {
    // const res = removeItemValue("user");
    if (res) {
      // setLogout(true);
      navigation.navigate(ROUTES.LOGIN_SCREEN);
    }
  };

  const getUserData = async () => {
    const res = await getData("user");
    if (res) {
      setUser(res);
      return;
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 90 }}>
        <AppSnackBar
          text="Succesfully Log out"
          visible={Logout}
          callback={setLogout}
        />
        <UserCard>
          <UserImage source={require("../components/pictures/UserImage.png")} />
          <UserName>{user ? user.name : "John doe"}</UserName>
        </UserCard>
        {details.map((card, idx) => {
          return (
            <SettingsCard
              key={idx}
              title={card.title}
              icon={card.iconUrl}
              onPress={() => handlePress(card.value)}
            />
          );
        })}
        <Button title="Log Out" onPress={handleLogOut} />
      </ScrollView>
    </Container>
  );
};

export default SettingsScreen;
