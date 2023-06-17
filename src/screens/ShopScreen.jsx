import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";
import { Screen } from "../components/Screen";
import CategoryButton from "../components/atoms/CategoryButton";
import ShopCard from "../components/organisms/ShopCard";
import { fakeData } from "../data/appData";
import { ScrollView } from "react-native-gesture-handler";
import { ScreenModern } from "../components/molecules/ScreenModern";

const Container = styled(ScreenModern)``;

const MainTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
`;

const TopWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 20px 0px 20px;
`;
const InnerContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
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
  width: 107px;
  height: 40px;
  border-radius: 99px;
  font-weight: 500;
  font-size: 14px;
`;
const ShopImg = require("../components/pictures/RectangleShop.png");

const ShopScreen = () => {
  const [data, setData] = useState(fakeData);

  return (
    <Container>
      <TopWrapper>
        <MainTitle>Carts</MainTitle>
        <OrdersBtn title="Orders" light={false} iconLeft={ImgUrl} />
      </TopWrapper>
      {!data ? (
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
        <ScrollView>
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
        </ScrollView>
      )}
    </Container>
  );
};

export default ShopScreen;
