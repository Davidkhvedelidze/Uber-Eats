import { Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.View`
  width: 143px;
  height: 189px;
  margin: 10px;
  padding: 10px;
`;
const ImageView = styled.View``;

const Title = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

const PriceTitle = styled.Text``;

const Subtitle = styled.Text`
  font-size: 14px;
  line-height: 20px;

  color: #6b6b6b;
`;

const AddButton = styled.Pressable`
  position: absolute;
  left: 80%;
  right: 0%;
  top: -10%;
  bottom: 0%;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PlusTitle = styled.Text`
  font-weight: 600;
  font-size: 25px;
`;

const FeaturedCard = ({ title, onPress, imgUrl, price, subtitle }) => {
  return (
    <Container>
      <ImageView>
        <Image source={imgUrl} resizeMode="cover" />
        <AddButton onPress={onPress}>
          <PlusTitle>+</PlusTitle>
        </AddButton>
      </ImageView>
      <Title>{title}</Title>
      <PriceTitle>{price}</PriceTitle>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default FeaturedCard;
