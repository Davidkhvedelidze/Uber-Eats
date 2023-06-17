import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  width: 327px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const TitleWrapper = styled.View`
  margin-right: 80px;
`;
const Title = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
const Subtitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b6b6b;
`;

const img = require("../pictures/DeliveryCardImages/arrow.png");

const DelivedyCard = ({ onPress, title, subtitle, iconUrl }) => {
  return (
    <Container onPress={onPress}>
      <Image source={iconUrl} />
      <TitleWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TitleWrapper>
      <Image source={img} />
    </Container>
  );
};

export default DelivedyCard;
