import React from "react";
import { Image } from "react-native";
import styled, { StyleSheetManager } from "styled-components";

const Container = styled.Pressable`
  height: 52px;
  width: 266px;
  border-radius: 16px;
  background-color: ${({ light }) => (light ? "#C7DAC5" : "#54924f")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 23px;
`;
const Title = styled.Text`
  color: ${({ light }) => (light ? "#55837D" : "#FFFFFF")};
  font-size: 16px;
`;

const Button = ({ title, onPress, light = false, ...otherProps }) => {
  return (
    <Container onPress={onPress} light={light} {...otherProps}>
      <Title light={light}>{title}</Title>
    </Container>
  );
};

export default Button;

// გასტილული ღილაკი, რომელიც ექსპორტდება სხვადასხვა ფაილში, ასევე შეიძლება სტილის ინდივიდუალურად შეცვლაც.
