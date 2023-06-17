import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 100px;
  gap: 10px;
  width: 343px;
  height: 54px;
  background: #000000;
  border: 1px solid #000000;
  margin-top: 10px;
  border-radius: 5px;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  width: 312px;
  height: 22px;
  text-align: center;
`;

const BlackBottom = ({ price, onPress, value }) => {
  return (
    <Container onPress={onPress}>
      <Title>{value}</Title>
    </Container>
  );
};

export default BlackBottom;
