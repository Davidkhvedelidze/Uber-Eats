import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 10px;
`;

const CardImage = styled.Image``;

const InfoContainer = styled.View`
  margin-right: 30px;
`;

const Icon = styled.Image``;

const Title = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const Subtitle = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b6b6b;
`;

const ShopCard = ({ onPress, ImgUrl, title, subtitle, desc }) => {
  return (
    <Container onPress={onPress}>
      <CardImage source={ImgUrl} />
      <InfoContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Subtitle>{desc}</Subtitle>
      </InfoContainer>
      <Icon source={require("../pictures/ArrowIcon.png")} />
    </Container>
  );
};

export default ShopCard;

//ექსპორტდება შოფსქრინზე
