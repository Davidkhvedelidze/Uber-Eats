import { View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { Screen } from "../components/Screen";
import ImagePicker from "../components/atoms/ImagePicker";
import { set } from "react-native-reanimated";
import TextM from "../components/atoms/TextM";

const Container = styled(Screen)``;

const ProfileInfo = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 650px;
`;

const UserImage = styled.Image`
  width: 90px;
  height: 90px;
`;

const UserName = styled(TextM)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ImageUrl = require("../components/pictures/DefaultUser.png");

const SettingsDetails = ({ navigation }) => {
  const [imgUrl, setImgUrl] = useState(false);

  return (
    <Container>
      <ProfileInfo>
        <UserImage source={imgUrl ? { uri: imgUrl } : ImageUrl} />
        <UserName>John Doe</UserName>
        <ImagePicker title=" Edit Account" callback={setImgUrl} />
      </ProfileInfo>
    </Container>
  );
};

export default SettingsDetails;
