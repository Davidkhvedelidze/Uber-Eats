import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import MainCard from "../components/organisms/MainCard.jsx";
import styled from "styled-components";
import { Screen } from "../components/Screen.jsx";
import CategoryButton from "../components/atoms/CategoryButton.js";
import Loader from "../components/atoms/Loader.js";
import * as ROUTES from "../../src/constants/routes.js";

import { Portal } from "react-native-portalize";
import BottomSheet from "../components/atoms/BottomSheet.jsx";
import Button from "../components/atoms/Button.js";
import CategoryCard from "../components/atoms/CategoryCard.jsx";

const listToRender = [
  {
    id: 0,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "Delivery",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.7,
    promotion: true,
    orders: "5",
    reward: "8",
    distance: 5.4,
  },
  {
    id: 1,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "Delivery",
    price: "5.249",
    deliveryTime: "5-25",
    rating: 4.1,
    distance: 6.4,
  },
  {
    id: 2,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "Delivery",
    price: "6.50",
    deliveryTime: "10-25",
    rating: 4.9,
    distance: 1.4,
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

const PikckupListToRender = [
  {
    id: 0,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "pickup",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.7,
    promotion: true,
    orders: "5",
    reward: "8",
    distance: 1.4,
  },
  {
    id: 1,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "pickup ",
    price: "5.249",
    deliveryTime: "5-25",
    rating: 4.1,
    distance: 4.4,
  },
  {
    id: 2,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "page",
    price: "6.50",
    deliveryTime: "10-25",
    rating: 4.9,
  },
];
const DineinListToRender = [
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
];

const CategoryListItems = [
  {
    id: 0,
    title: "Convenience",
    imgUrl: require("../components/pictures/CategoryImages/Convenience.png"),
  },
  {
    id: 1,

    title: "Alcohol",
    imgUrl: require("../components/pictures/CategoryImages/Alcohol.png"),
  },
  {
    id: 2,

    title: "Pet Supplies",
    imgUrl: require("../components/pictures/CategoryImages/PetSupplies.png"),
  },
  {
    id: 3,

    title: "Flowers",
    imgUrl: require("../components/pictures/CategoryImages/Flowers.png"),
  },
  {
    id: 4,

    title: "Grocery",
    imgUrl: require("../components/pictures/CategoryImages/Grocery.png"),
  },
  {
    id: 5,

    title: "American",
    imgUrl: require("../components/pictures/CategoryImages/American.png"),
  },
  {
    id: 6,

    title: "Speciality",
    imgUrl: require("../components/pictures/CategoryImages/Speciality.png"),
  },
  {
    id: 7,

    title: "Takeout",
    imgUrl: require("../components/pictures/CategoryImages/Takeout.png"),
  },
  {
    id: 8,

    title: "Asian",
    imgUrl: require("../components/pictures/CategoryImages/Asian.png"),
  },
  {
    id: 9,

    title: "Ice Cream",
    imgUrl: require("../components/pictures/CategoryImages/IceCream.png"),
  },
  {
    id: 10,

    title: "Halal",
    imgUrl: require("../components/pictures/CategoryImages/Halal.png"),
  },
  {
    id: 11,

    title: "Retails",
    imgUrl: require("../components/pictures/CategoryImages/Retails.png"),
  },
  {
    id: 12,

    title: "Carribean",
    imgUrl: require("../components/pictures/CategoryImages/Carribean.png"),
  },
  {
    id: 13,

    title: "Indian",
    imgUrl: require("../components/pictures/CategoryImages/Indian.png"),
  },
  {
    id: 14,

    title: "French",
    imgUrl: require("../components/pictures/CategoryImages/French.png"),
  },
  {
    id: 15,

    title: "Fast Foods",
    imgUrl: require("../components/pictures/CategoryImages/FastFoods.png"),
  },
  {
    id: 16,

    title: "Burger",
    imgUrl: require("../components/pictures/CategoryImages/Burger.png"),
  },
  {
    id: 17,

    title: "Ride",
    imgUrl: require("../components/pictures/CategoryImages/Ride.png"),
  },
  {
    id: 18,

    title: "Chinese",
    imgUrl: require("../components/pictures/CategoryImages/Chinese.png"),
  },
  {
    id: 19,

    title: "Dessert",
    imgUrl: require("../components/pictures/CategoryImages/Dessert.png"),
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
  background-color: white;
`;

const SortContainer = styled.View`
  margin: 8px;
  display: flex;
  align-items: center;
`;
const SortTopContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;

const CagetoryBtn = styled(CategoryButton)``;
const SortButtonContainer = styled.View`
  height: 25px;
  margin: 10px 0 10px 0;
  display: flex;
  align-items: center;
`;
const Location = styled.Text`
  width: 126px;
  height: 24px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  color: #000000;
`;

const CtgrBtnWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 120px;
  width: 100%;
`;
const AllCtgrText = styled.Text`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  height: 28px;
  text-align: center;
  margin: 15px;
`;
const BottomFlattlistWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10px;
  gap: 8px;
`;

const HomeScreen = ({ navigation }) => {
  const [ctgr, setCtgr] = useState(0);
  const [data, setData] = useState([]);
  const categorySheetRef = useRef();

  const fetchData = () => {
    if (ctgr === 0) {
      setData(listToRender);
    } else if (ctgr === 1) {
      setData(PikckupListToRender);
    } else if (ctgr === 2) {
      setData(DineinListToRender);
    }
  };

  const handlePress = (value) => {
    setCtgr(value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      fetchData();
    }, 1000);
  };

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
    { title: "Dine-in", value: 2 },
  ];

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      fetchData();
    }, 1000);
  }, []);

  return (
    <Container>
      <SortContainer>
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
        <SortButtonContainer>
          <Location>New London</Location>
        </SortButtonContainer>
        <CtgrBtnWrapper>
          <CategoryCard
            title={CategoryListItems[0].title}
            imgUrl={CategoryListItems[0].imgUrl}
            onPress={() => alert(CategoryListItems[0].title)}
          />
          <CategoryCard
            title={CategoryListItems[1].title}
            imgUrl={CategoryListItems[1].imgUrl}
            onPress={() => alert(CategoryListItems[1].title)}
          />
          <CategoryCard
            title={CategoryListItems[2].title}
            imgUrl={CategoryListItems[2].imgUrl}
            onPress={() => alert(CategoryListItems[2].title)}
          />
          <CategoryCard
            title="More"
            imgUrl={require("../components/pictures/Menu.png")}
            onPress={() => categorySheetRef.current.open()}
          />
        </CtgrBtnWrapper>
      </SortContainer>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return loading ? (
            <Loader />
          ) : (
            <MainCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              price={ctgr === 0 ? item.price : ""}
              deliveryTime={item.deliveryTime}
              rating={item.rating}
              promotion={ctgr === 0 ? item.promotion : ""}
              orders={item.orders}
              reward={item.reward}
              distance={ctgr === 1 ? item.distance : ""}
              onPress={() => navigation.navigate(ROUTES.REST_DETAILS, item)}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <Portal>
        <BottomSheet bottomSheetRef={categorySheetRef} modalHeight={600}>
          <AllCtgrText>All Categories</AllCtgrText>
          <BottomFlattlistWrapper>
            {/* <FlatList
              horizontal={false}
              numColumns={4}
              data={CategoryListItems}
              renderItem={({ item }) => (
                <CategoryCard
                  title={item.title}
                  imgUrl={item.imgUrl}
                  key={item.id}
                  onPress={() => alert(item.title)}
                />
              )}
            /> */}
            {CategoryListItems.map((item) => {
              return (
                <CategoryCard
                  title={item.title}
                  imgUrl={item.imgUrl}
                  key={item.id}
                  onPress={() => alert(item.title)}
                />
              );
            })}
          </BottomFlattlistWrapper>
        </BottomSheet>
      </Portal>
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

//flatlist დავალება
