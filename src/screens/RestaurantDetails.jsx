import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";
import { Screen } from "../components/Screen";
import Button from "../components/atoms/Button";
import RestDetailsCard from "../components/organisms/RestDetailsCard";
import * as ROUTES from "../constants/routes";
import { detailsData } from "../data/appData";
import { useState } from "react";

const Container = styled.ScrollView`
  padding: 20px;
`;

const HeaderContainer = styled.View``;
const RestInfo = styled.Text``;
const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RestTitle = styled.Text`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  width: 250px;
  height: 72px;
  margin-top: 30px;
`;

const ratingImage = require("../../assets/RatingStar.png");

const SectionTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 15px;
`;

const SectionContainer = styled.View``;

const RestaurantDetails = ({ route, navigation }) => {
  const [data, setData] = useState(detailsData);
  const rest = data.restaurant;

  return (
    <Container>
      <HeaderContainer>
        <RestTitle>{data.restaurant.name}</RestTitle>
        <InfoContainer>
          <View style={{ marginRight: 3 }}>
            <Image source={ratingImage} />
          </View>
          <RestInfo>
            {rest.rating}
            {rest.ratingQuantity > 200
              ? " (200+ Ratings) "
              : ` (${rest.ratingQuantity}) `}
            / {rest.category} / $$
          </RestInfo>
        </InfoContainer>
        <Text>{rest.workingHours}</Text>
      </HeaderContainer>
      <View style={{ height: 10 }}></View>
      <SectionContainer>
        <SectionTitle>Most Popular</SectionTitle>
        {data.mostPopular.map((item, idx) => {
          return (
            <RestDetailsCard
              key={idx}
              title={item.title}
              subtitle={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}
              onPress={() =>
                navigation.navigate(ROUTES.ORDER_DETAILS, {
                  ...item,
                  restaurantName: rest.name,
                })
              }
            />
          );
        })}
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Picked For You</SectionTitle>
        {data.pickedForYou.map((item, idx) => {
          return (
            <RestDetailsCard
              key={idx}
              title={item.title}
              subtitle={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}
              onPress={() =>
                navigation.navigate(ROUTES.ORDER_DETAILS, { item })
              }
            />
          );
        })}
      </SectionContainer>
      <Button title={"go back"} onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default RestaurantDetails;
