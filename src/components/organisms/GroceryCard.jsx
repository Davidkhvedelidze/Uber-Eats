import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  width: 186px;
  height: 178px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 6px;
  ${({ color }) => (color ? `background-color: ${color}` : "")};
`;

const TitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;

  background: rgba(0, 0, 0, 0.45);
  border-radius: 50px;
  margin-top: 20px;
`;
const Title = styled.Text`
  text-align: center;
  color: white;
`;
const GroceryCard = ({
  onPress,
  color,
  imgUrl,
  deliveryTime,
  restName,
  ...otherProps
}) => {
  return (
    <Container onPress={onPress} color={color} {...otherProps}>
      <Image source={imgUrl} />
      <TitleContainer>
        <Title>{deliveryTime}</Title>
      </TitleContainer>
    </Container>
  );
};

export default GroceryCard;
