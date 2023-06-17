import { View, Text } from "react-native";
import React from "react";
import { Screen } from "../components/Screen";
import styled from "styled-components";
import BlackBottom from "../components/molecules/BlackBottom";

const Container = styled(Screen)``;
const DeliveryDetails = ({ navigation }) => {
  return (
    <Container>
      <Text>Delivery Details</Text>
      <BlackBottom value={"Hello EE"} />
    </Container>
  );
};

export default DeliveryDetails;
