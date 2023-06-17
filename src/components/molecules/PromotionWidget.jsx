import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import TextM from "../atoms/TextM";

const imgUrl = require("../pictures/PromotionIcon.png");
const Container = styled.View`
  padding: 14px 23px 14px 18px;
  background: #e9ffef;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  width: 342px;
  height: 79px;
  align-items: center;
  margin-left: 20px;
  margin-top: 36px;
`;
const Title = styled(TextM)`
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
`;
const SubTitle = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const Img = styled.Image`
  margin-left: 60px;
`;

const PromotionWidget = ({ ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <View>
        <Title>Promotion applied</Title>
        <SubTitle>View basket for final discount</SubTitle>
      </View>
      <Img source={imgUrl} />
    </Container>
  );
};

export default PromotionWidget;
