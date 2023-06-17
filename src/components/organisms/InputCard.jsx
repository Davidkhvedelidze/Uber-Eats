import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: #eeeeee;
  padding: 0px 15px 0px 15px;
  margin-bottom: 15px;
  width: 328px;
  height: 44px;
  display: flex;
  gap: 10px;
`;
const InputText = styled.TextInput`
  font-weight: 500;
  font-size: 16px;
`;
const searchIcon = require("../pictures/searchIcon.png");

const InputCard = ({ placeholder }) => {
  return (
    <Container>
      <Image source={searchIcon} />
      <InputText placeholder={placeholder}></InputText>
    </Container>
  );
};

export default InputCard;
