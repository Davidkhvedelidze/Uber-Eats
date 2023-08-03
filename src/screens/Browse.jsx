import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Screen } from "../components/Screen";
import BrowseCard from "../components/atoms/BrowseCard";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../components/atoms/Input";
import { useNavigation } from "@react-navigation/native";
import { BrowseList, AllCategoriesList } from "../data/appData";
import { FlatList } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import IconTitle from "../components/atoms/IconTitle";

const TopContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Container = styled(Screen)``;
const Title = styled.Text`
  font-weight: 500;
  font-size: 24px;
  color: #000000;
  margin-left: 18px;
`;
const SearchContainer = styled.View`
  margin: 5px 0px 5px 0px;
  width: 100%;
  gap: 10px;
`;
const Results = styled.Pressable`
  margin: 5px;
  margin-right: 10px;
`;

const Wrapper = styled.View``;

const Browse = ({ navigation }) => {
  const [browse, setBrowse] = useState(BrowseList);
  const [offers, setOffers] = useState(AllCategoriesList);

  const [searchDetailed, setSearchDetailed] = useState(false);

  const newNavigation = useNavigation();

  const AllSearchList = [...browse, ...offers];
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

  // const fetchData = async () => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <Container>
      <Input
        handleSearch={handleSearch}
        title={"Food, shopping, drinks, etc"}
        icon={<Ionicons name="md-search-outline" size={24} color="black" />}
        color={"rgba(0, 0, 0, 0.4)"}
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 18,
          paddingBottom: 70,
          marginBottom: 80,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Wrapper>
          {search.trim() && (
            <>
              <Title>Search Result</Title>
              <SearchContainer>
                {/* {searchResult.map((item) => (
                <BrowseCard
                  title={item.title}
                  imgUrl={item.imgUrl}
                  key={item.id}
                  navigation={newNavigation}
                />
              ))} */}
                <Results>
                  <FlatList
                    data={searchResult}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                      <IconTitle
                        // imgUrl={item.imgUrl}
                        title={item.title}
                        icon={
                          <Ionicons
                            name="md-search-outline"
                            size={24}
                            color="black"
                          />
                        }
                        navigation={newNavigation}
                      />
                    )}
                    showsHorizontalScrollIndicator={false}
                    // horizontal={true}
                  />
                </Results>
              </SearchContainer>
            </>
          )}
          <Title>Top Categories</Title>
          <TopContainer>
            {browse.map((item) => {
              return (
                <BrowseCard
                  title={item.title}
                  imgUrl={item.imgUrl}
                  key={item.id}
                  onPress={() =>
                    navigation.navigate(item.routeName, {
                      num: item.type,
                    })
                  }
                />
              );
            })}
          </TopContainer>
          <Title>All Categories </Title>

          <TopContainer>
            {offers.map((item) => {
              return (
                <BrowseCard
                  title={item.title}
                  imgUrl={item.imgUrl}
                  key={item.id}
                />
              );
            })}
          </TopContainer>
        </Wrapper>
      </ScrollView>
    </Container>
  );
};

export default Browse;
