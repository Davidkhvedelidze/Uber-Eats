import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";
import { Screen } from "../components/Screen";
import Button from "../components/atoms/Button";
import RestDetailsCard from "../components/organisms/RestDetailsCard";

const Container = styled.ScrollView`
  padding: 20px;
`;

const data = {
  restaurant: {
    name: "Lanespan Pizza & Pub (Emeryville)",
    category: "pizza",
    rating: "4.3",
    ratingQuantity: 150,
    workingHours: "Open until 3:00 AM",
  },
  mostPopular: [
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic,ive oil base, mozarella, cremini mushrooms, ricotta, thyme, hite truffle oil. Add arugula for an extra charge",
      imgUrl: require("../components/pictures/PizzaImage.png"),
    },
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic, live oil base, mozarella, cremini mushrooms, ricotta, thyme, ite truffle oil. Add arugula for an extra charge",
      imgUrl: require("../components/pictures/PizzaImage.png"),
    },
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic, live oil base, mozarella, cremini mushrooms, ricotta, thyme, wite truffle oil. Add arugula for an extra charge",
      imgUrl: require("../components/pictures/PizzaImage.png"),
    },
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic, live oil base, mozarella, cremini mushrooms, ricotta, thyme, wite truffle oil. Add arugula for an extra charge",
    },
  ],
  pickedForYou: [
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic,ive oil base, mozarella, cremini mushrooms, ricotta, thyme, hite truffle oil. Add arugula for an extra charge",
    },
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic, live oil base, mozarella, cremini mushrooms, ricotta, thyme, ite truffle oil. Add arugula for an extra charge",
    },
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic, live oil base, mozarella, cremini mushrooms, ricotta, thyme, wite truffle oil. Add arugula for an extra charge",
    },
  ],
};

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
        {data.mostPopular.map((item) => {
          return (
            <RestDetailsCard
              title={item.title}
              subtitle={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </SectionContainer>
      <Button title={"go back"} onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default RestaurantDetails;
