import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import MainCard from "../components/organisms/MainCard.js";
import styled from "styled-components";
import { Screen } from "../components/Screen.jsx";
import CategoryButton from "../components/atoms/CategoryButton.js";

const listToRender = [
  {
    id: 0,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.7,
    promotion: true,
    orders: "5",
    reward: "8",
  },
  {
    id: 1,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "5.249",
    deliveryTime: "5-25",
    rating: 4.1,
  },
  {
    id: 2,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "6.50",
    deliveryTime: "10-25",
    rating: 4.9,
  },
  {
    id: 3,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "2.29",
    deliveryTime: "10-25",
    rating: 3.4,
  },
  {
    id: 4,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "0.39",
    deliveryTime: "15-25",
    rating: 4.1,
  },
  {
    id: 5,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "0.29",
    deliveryTime: "10-15",
    rating: 4.8,
  },
];

const RenderComponent = ({ firstName, lastName }) => {
  return (
    <View style={styles.container}>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
    </View>
  );
};

const Container = styled(Screen)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const SortContainer = styled.View`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CagetoryBtn = styled(CategoryButton)``;

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <SortContainer>
        <CagetoryBtn title="Delivery" />
        <CagetoryBtn title="Pickup" />
        <CagetoryBtn title="Dine-in" />
      </SortContainer>
      <FlatList
        data={listToRender}
        renderItem={(item) => {
          <MainCard
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            price={item.price}
            deliveryTime={item.deliveryTime}
            rating={item.rating}
            promotion={item.promotion}
            orders={item.orders}
            reward={item.reward}
          />;
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c02b2b",
    width: "100%",
    display: "flex",
    fontSize: 45,
    textAlign: "center",
    height: 120,
    margin: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HomeScreen;

//  <MainCard
//    key={item.id}
//    imgUrl={item.imgUrl}
//    title={item.title}
//    price={item.price}
//    deliveryTime={item.deliveryTime}
//    rating={item.rating}
//    promotion={item.promotion}
//    orders={item.orders}
//    reward={item.reward}
//  />;

//flatlist დავალება
