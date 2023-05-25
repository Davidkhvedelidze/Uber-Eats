import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";
import { Screen } from "../components/Screen";
import CategoryButton from "../components/atoms/CategoryButton";
import ShopCard from "../components/organisms/ShopCard";

const Container = styled(Screen)`
  background-color: white;
`;

const MainTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
  position: absolute;
  width: 95px;
  height: 44px;
  left: 15px;
  top: 40px;
`;
const InnerContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;
`;
const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  width: 252px;
  height: 28px;
`;

const Subtitle = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 297px;
  height: 48px;
  text-align: center;
  color: #545454;
`;
const StyledButton = styled(CategoryButton)`
  width: 148px;
  height: 40px;
  border-radius: 99px;
  margin: 20px;
`;
const ImgUrl = require("../components/pictures/OrdersIcon.png");
const OrdersBtn = styled(CategoryButton)`
  position: absolute;
  width: 107px;
  height: 40px;
  left: 275px;
  top: 13px;
  border-radius: 99px;
  font-weight: 500;
  font-size: 14px;
`;
const ShopImg = require("../components/pictures/RectangleShop.png");

const fakeData = [
  {
    ImgUrl: { ShopImg },
    title: "Begs & Megs",
    subtitle: "1 item US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    onPress: () => console.log("hello"),
  },
  {
    ImgUrl: { ShopImg },
    title: "Begs & Megs",
    subtitle: "1 item US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    onPress: () => console.log("hello"),
  },
  {
    ImgUrl: { ShopImg },
    title: "Begs & Megs",
    subtitle: "1 item US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    onPress: () => console.log("hello"),
  },
];
const ShopScreen = () => {
  const [data, setData] = useState(fakeData);

  return (
    <Container>
      <OrdersBtn title="Orders" light={false} iconLeft={ImgUrl} />
      <MainTitle>Carts</MainTitle>
      {data ? (
        <InnerContainer>
          <Image
            source={require("../components/pictures/ShopScreenImage.png")}
          />
          <Title>Add items to start a basket</Title>
          <Subtitle>
            Once you add items from a restuarant or store, your basket will
            appear here.
          </Subtitle>
          <StyledButton light title="Start Shopping" />
        </InnerContainer>
      ) : (
        <InnerContainer>
          {data.map((item, index) => {
            return (
              <ShopCard
                key={index}
                ImgUrl={ShopImg}
                title="Begs & Megs"
                subtitle="1 item US$43.00"
                desc="Deliver to San Franciscao Bay Area"
                onPress={() => console.log("hello")}
                light={true}
              />
            );
          })}
        </InnerContainer>
      )}
    </Container>
  );
};

export default ShopScreen;
