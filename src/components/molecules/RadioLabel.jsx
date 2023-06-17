import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import styled from "styled-components";
import TextM from "../atoms/TextM";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const Title = styled(TextM)``;
const LeftContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RightContainer = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;
const PriceTitle = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const Img = require("../pictures/PriceIcon.png");
const RadioLabel = ({ label, price, onPress, checked }) => {
  return (
    <Container onPress={onPress}>
      <LeftContainer>
        <RadioButton.Android
          value={checked}
          status={checked ? "checked" : "unchecked"}
          onPress={onPress}
        />
        <Title>{label}</Title>
      </LeftContainer>
      {price && (
        <RightContainer>
          <PriceTitle>US${price}.00 ea</PriceTitle>
          <Image source={Img} />
        </RightContainer>
      )}
    </Container>
  );
};

export default RadioLabel;
