import React, { Text } from "react";
import styled, { StyleSheetManager } from "styled-components";
import { Image } from "react-native";

const Container = styled.Pressable`
  background-color: ${({ light }) => (light ? "#000000" : "#EEEEEE")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 0 20px;
  gap: 10px;
  width: 97px;
  height: 37px;
  border-radius: 25px;
`;

const Title = styled.Text`
  color: ${({ light }) => (light ? "#EEEEEE" : "#000000")};
  font-size: 16px;
`;

const Icon = styled.Image`
  ${({ iconLeft }) => (iconLeft ? `margin-right: 10px` : `margin-left:10px`)}
`;

const CategoryButton = ({
  title,
  onPress,
  light = false,
  iconLeft,
  iconRight,
  ...otherProps
}) => {
  return (
    <Container onPress={onPress} light={light} {...otherProps}>
      {iconLeft && <Icon source={iconLeft} />}
      <Title light={light}>{title}</Title>
      {iconRight && <Icon source={iconRight} />}
    </Container>
  );
};

export default CategoryButton;
