import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
`;
const Title = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const Subtitle = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  text-align: center;

  color: #6b6b6b;

  width: 219px;
  height: 40px;
`;

const OrdersCard = () => {
  return (
    <Container>
      <Title>No recent orders</Title>
      <Subtitle>Your recent orders will appear here.</Subtitle>
    </Container>
  );
};

export default OrdersCard;
