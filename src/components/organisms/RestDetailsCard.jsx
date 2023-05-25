import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
  height: 120px;
`;
const RightContainer = styled.View`
  /* width: 50%; */
`;
const LeftContainer = styled.View`
  ${({ imgUrl }) => (imgUrl ? "width:60%" : "width:90%")}
`;
const Title = styled.Text`
  width: 148px;
  height: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  width: 60px;
  height: 20px;
  text-align: center;
`;
const Desc = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* width: 197px; */
  height: 100px;
  color: #545454;
`;

const img = require("../pictures/PizzaImage.png");

const RestDetailsCard = ({
  title = "Title",
  subtitle = "Subtitle",
  desc = "Desc",
  imgUrl,
}) => {
  return (
    <Container>
      <LeftContainer imgUrl={imgUrl}>
        {title && <Title>{title}</Title>}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        {desc && <Desc>{desc}</Desc>}
      </LeftContainer>
      <RightContainer>
        <Image source={imgUrl} />
      </RightContainer>
    </Container>
  );
};

export default RestDetailsCard;
