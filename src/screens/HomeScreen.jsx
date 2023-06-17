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
import CategoryCard from "../components/atoms/CategoryCard.jsx";
import {
  homeScreenlistToRender,
  PikckupListToRender,
  DineinListToRender,
  CategoryListItems,
} from "../data/appData.js";

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
  const [list, setList] = useState(homeScreenlistToRender);
  const [pickupList, setPickupList] = useState(PikckupListToRender);
  const [dinein, setDinein] = useState(DineinListToRender);
  const [category, setCategory] = useState(CategoryListItems);

  const [ctgr, setCtgr] = useState(0);
  const [data, setData] = useState([]);
  const categorySheetRef = useRef();

  const fetchData = () => {
    if (ctgr === 0) {
      setData(list);
    } else if (ctgr === 1) {
      setData(pickupList);
    } else if (ctgr === 2) {
      setData(dinein);
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
  }, [ctgr]);

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
            title={category[0].title}
            imgUrl={category[0].imgUrl}
            onPress={() => alert(category[0].title)}
          />
          <CategoryCard
            title={category[1].title}
            imgUrl={category[1].imgUrl}
            onPress={() => alert(category[1].title)}
          />
          <CategoryCard
            title={category[2].title}
            imgUrl={category[2].imgUrl}
            onPress={() => alert(category[2].title)}
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
            {category.map((item) => {
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
