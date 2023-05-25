import React, { useState } from "react";
import styled from "styled-components";
import { Screen } from "../components/Screen";
import BrowseCard from "../components/atoms/BrowseCard";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Input from "../components/atoms/Input";
import * as ROUTES from "../constants/routes";
import { useNavigation } from "@react-navigation/native";

const TopContainer = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

const Container = styled(Screen)``;
const Title = styled.Text`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  margin-left: 18px;
`;

const BrowseList = [
  {
    id: 1,
    title: "Breakfast & Branch",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-10.png"),
  },
  {
    id: 2,
    title: "Coffe & Tea",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-9.png"),
  },
  {
    id: 3,
    title: "Deals",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-8.png"),
    handlePress: () => {
      navigation.navigate(ROUTES.DEALS_SCREEN, { num: 0 });
    },
  },
  {
    id: 4,
    title: "Restaurant Rewards",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-1.png"),
    handlePress: () => {
      navigation.navigate(ROUTES.DEALS_SCREEN, { num: 1 });
    },
  },
  {
    id: 5,
    title: "Best Overall",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-2.png"),
  },
  {
    id: 6,
    title: "Shipped Tea",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-3.png"),
  },
];
const AllCategoriesList = [
  {
    id: 7,
    title: "Sandwich",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-4.png"),
  },
  {
    id: 8,
    title: "Sandwich",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-5.png"),
  },
  {
    id: 9,
    title: "Sandwich",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-6.png"),
  },
  {
    id: 10,
    title: "Sandwich",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-7.png"),
  },
  {
    id: 11,
    title: "Best Overall",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-2.png"),
  },
  {
    id: 12,
    title: "Shipped Tea",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-3.png"),
  },
  {
    id: 13,
    title: "Best Overall",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-2.png"),
  },
  {
    id: 14,
    title: "Shipped Tea",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-3.png"),
  },
];
const Browse = () => {
  const navigation = useNavigation();

  const AllSearchList = [...BrowseList, ...AllCategoriesList];
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (text) => {
    setSearch(text);
    if (text.trim() === "") {
      setSearchResult([]);
      return;
    }
    const searchSize = text.toLowerCase();

    const filteredSearch = AllSearchList.filter((category) =>
      category.title.toLocaleLowerCase().includes(searchSize)
    );
    const result = [...filteredSearch];
    setSearchResult(result);
  };

  return (
    <Container>
      <Input handleSearch={handleSearch} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 18,
          paddingBottom: 70,
          marginBottom: 80,
        }}
        showsVerticalScrollIndicator={false}
      >
        {search.trim() && (
          <>
            <Title>Search Result</Title>
            <TopContainer>
              {searchResult.map((item) => (
                <BrowseCard
                  title={item.title}
                  imgUrl={item.imgUrl}
                  key={item.id}
                  navigation={navigation}
                />
              ))}
            </TopContainer>
          </>
        )}
        <Title>Top Categories</Title>
        <TopContainer>
          {BrowseList.map((item) => {
            return (
              <BrowseCard
                title={item.title}
                imgUrl={item.imgUrl}
                key={item.id}
                onPress={item.handlePress}
              />
            );
          })}
        </TopContainer>
        <Title>All Categories </Title>

        <TopContainer>
          {AllCategoriesList.map((item) => {
            return (
              <BrowseCard
                title={item.title}
                imgUrl={item.imgUrl}
                key={item.id}
              />
            );
          })}
        </TopContainer>
      </ScrollView>
    </Container>
  );
};

export default Browse;
