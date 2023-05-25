import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 56px;
  align-items: center;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
const ImgContainer = styled.View`
  margin-right: 20px;
  display: flex;
  width: 25px;
  align-items: center;
  justify-content: center;
`;
const Image = styled.Image``;

const SettingsCard = ({ onPress, icon, title }) => {
  return (
    <Container onPress={onPress}>
      <ImgContainer>
        <Image source={icon} />
      </ImgContainer>
      <Title>{title}</Title>
    </Container>
  );
};

export default SettingsCard;
