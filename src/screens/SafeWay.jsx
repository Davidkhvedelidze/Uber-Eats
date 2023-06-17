import {
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import * as ROUTES from "../constants/routes";
import { ScreenModern } from "../components/molecules/ScreenModern";
import GroceryHeader from "../components/organisms/GroceryHeader";
import InputCard from "../components/organisms/InputCard";
import { ScrollView } from "react-native-gesture-handler";
import CategoryButton from "../components/atoms/CategoryButton";
import FeaturedCard from "../components/organisms/FeaturedCard";
import CategoriesCard from "../components/organisms/CategoriesCard";
import OrdersCard from "../components/organisms/OrdersCard";
import Loader from "../components/atoms/Loader";
import { fruitsVegetables, beverages, categories } from "../data/appData";

const Container = styled(ScreenModern)``;

const InputContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const StoreInfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const InfoDetails = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
const InfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;
const BackgroundWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 10px 0px;
`;

const SortTopContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 5px;
  justify-content: center;
`;
const CagetoryBtn = styled(CategoryButton)`
  width: 108px;
  padding: 0px;
`;
const CategoryTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.Text`
  width: 260px;
  height: 22px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding: 0 10px;
`;
const SeeAll = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 6px;
  gap: 10px;
  margin-right: 15px;
`;
const SeeAllText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
const Wrapper = styled.View``;
const image = require("../components/pictures/FeaturedCardPics/header.png");

const SafeWay = ({ navigation, route }) => {
  const [fruits, setFruits] = useState(fruitsVegetables);
  const [beverage, setBeverage] = useState(beverages);
  const [category, setCategory] = useState(categories);

  const [ctgr, setCtgr] = useState(0);
  const [loading, setLoading] = useState(false);

  const btns = [
    { title: "Featured", value: 0 },
    { title: "Categories", value: 1 },
    { title: "Orders", value: 2 },
  ];

  const handlePress = (value) => {
    setCtgr(value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [ctgr]);

  const routes = route.params;
  return (
    <Container>
      <GroceryHeader
        title={routes.restName}
        onPress={() => navigation.goBack()}
        personPress={() => alert("nice job")}
      />
      <ScrollView>
        <InputContainer>
          <InputCard placeholder={"Search stores and products"} />
        </InputContainer>
        <StoreInfoWrapper>
          <InfoWrapper>
            <Image
              source={require("../components/pictures/StoreInfo/When.png")}
            />
            <InfoDetails>in {routes.time} minutes</InfoDetails>
          </InfoWrapper>
          <InfoWrapper>
            <Image
              source={require("../components/pictures/StoreInfo/DollarCoin.png")}
            />
            <InfoDetails>Pricing and Fees</InfoDetails>
          </InfoWrapper>
        </StoreInfoWrapper>
        <SortTopContainer>
          {btns.map((item, idx) => {
            return (
              <CagetoryBtn
                key={idx}
                title={item.title}
                light={item.value === ctgr ? true : false}
                onPress={() => handlePress(item.value)}
              />
            );
          })}
        </SortTopContainer>

        {ctgr === 0 &&
          (loading ? (
            <Loader />
          ) : (
            <Wrapper>
              <BackgroundWrapper>
                <ImageBackground source={image} style={styles.background}>
                  {
                    <Text style={styles.TextStyle}>
                      {" "}
                      $0 Delivery Fee with selected yogurt products{" "}
                    </Text>
                  }
                </ImageBackground>
              </BackgroundWrapper>

              <CategoryTitleWrapper>
                <Title>Fruits & Vegetables</Title>
                <SeeAll>
                  <SeeAllText>See All</SeeAllText>
                  <Image
                    source={require("../components/pictures/FeaturedCardPics/arrow1.png")}
                  />
                </SeeAll>
              </CategoryTitleWrapper>

              <FlatList
                data={fruits}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <FeaturedCard
                    imgUrl={item.imgUrl}
                    logo={item.logo}
                    price={item.price}
                    title={item.title}
                    subtitle={item.subtitle}
                    onPress={() => alert("nice job")}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              />
              <CategoryTitleWrapper>
                <Title>Beverages</Title>
                <SeeAll>
                  <SeeAllText>See All</SeeAllText>
                  <Image
                    source={require("../components/pictures/FeaturedCardPics/arrow1.png")}
                  />
                </SeeAll>
              </CategoryTitleWrapper>
              <FlatList
                data={beverage}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <FeaturedCard
                    imgUrl={item.imgUrl}
                    logo={item.logo}
                    price={item.price}
                    title={item.title}
                    subtitle={item.subtitle}
                    onPress={() => alert("nice job")}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              />
            </Wrapper>
          ))}
        {ctgr === 1 &&
          category.map((item) => {
            return loading ? (
              <Loader />
            ) : (
              <CategoriesCard
                imgUrl={item.imgUrl}
                title={item.title}
                key={item.id}
                onPress={() => alert("nice job")}
              />
            );
          })}
        {ctgr === 2 && (loading ? <Loader /> : <OrdersCard />)}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensure the image background takes up the entire screen
    resizeMode: "cover", // Adjust the image to cover the entire background
    height: 180,
    // marginVertical: 10,
    // marginHorizontal: 20,
    justifyContent: "flex-end",
    display: "flex",
    alignItems: "center",
    padding: 15,
    width: 327,
    height: 121,
  },
  TextStyle: {
    color: "white",
    textAlign: "center",
    width: 238,
    fontSize: 14,
    fontWeight: 500,
  },
});

export default SafeWay;
