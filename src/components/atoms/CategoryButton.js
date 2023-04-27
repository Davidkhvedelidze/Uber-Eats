import React, { Text } from "react";
import styled, { StyleSheetManager } from "styled-components";

const Container = styled.Pressable`
  ${({ light }) => (light ? "background - color : #000000" : "")};
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 0px 20px 0 20px;
  gap: 10px;
  /* position: absolute; */
  width: 97px;
  height: 37px;
  border-radius: 25px;
`;

const Title = styled.Text`
  color: ${({ light }) => (light ? "#FFFFFF" : "#000000")};
  font-size: 16px;
`;

const CategoryButton = ({ title, onPress, light = false, ...otherProps }) => {
  return (
    <Container onPress={onPress} light={light} {...otherProps}>
      <Title light={light}>{title}</Title>
    </Container>
  );
};

export default CategoryButton;
