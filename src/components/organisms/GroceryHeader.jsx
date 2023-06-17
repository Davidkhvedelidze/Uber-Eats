import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.View`
  width: 350px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
`;

const GoBack = styled.View``;
const Person = styled.View``;
const Shop = styled.View``;
const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;
const Wrapper = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding-left: 5px;
`;

const goBackURl = require("../pictures/GroceryHeader/goBack.png");
const personURl = require("../pictures/GroceryHeader/Person.png");
const cartURl = require("../pictures/GroceryHeader/Cart.png");

const GroceryHeader = ({ title, onPress, personPress }) => {
  return (
    <Container>
      <Wrapper onPress={onPress}>
        <GoBack>
          <Image source={goBackURl} />
        </GoBack>
        {title && <Title>{title}</Title>}
      </Wrapper>
      {personPress && (
        <Wrapper onPress={personPress}>
          <Person>
            <Image source={personURl} />
          </Person>
          <Shop>
            <Image source={cartURl} />
          </Shop>
        </Wrapper>
      )}
    </Container>
  );
};

export default GroceryHeader;
