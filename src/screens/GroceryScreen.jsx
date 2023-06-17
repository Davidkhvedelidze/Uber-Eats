import { View, Text } from "react-native";
import React, { useState } from "react";
import { Screen } from "../components/Screen";
import styled from "styled-components";
import GroceryCard from "../components/organisms/GroceryCard";
import { ScrollView } from "react-native-gesture-handler";
import InputCard from "../components/organisms/InputCard";
import DelivedyCard from "../components/organisms/DelivedyCard";
import GroceryHeader from "../components/organisms/GroceryHeader";
import * as ROUTES from "../constants/routes";
import { groceryList, locationDetails } from "../data/appData";

const Container = styled(Screen)``;

const GroceryContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const LocationDetailsContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
const Wrapper = styled.View``;
const GroceryScreen = ({ navigation }) => {
  const [list, setList] = useState(groceryList);
  const [location, setLocation] = useState(locationDetails);

  return (
    <Container>
      <Wrapper>
        <GroceryHeader
          title={"Stores"}
          onPress={() => navigation.goBack()}
          personPress={() => alert("nice job")}
        />
        <ScrollView>
          <InputContainer>
            <InputCard placeholder={"Search stores and products"} />
          </InputContainer>
          <LocationDetailsContainer>
            {location.map((item) => {
              return (
                <DelivedyCard
                  key={item.id}
                  iconUrl={item.iconUrl}
                  title={item.title}
                  subtitle={item.subtitle}
                  onPress={() => alert("hey")}
                />
              );
            })}
          </LocationDetailsContainer>
          <GroceryContainer>
            {list.map((item) => {
              return (
                <GroceryCard
                  key={item.id}
                  imgUrl={item.logo}
                  color={item.color}
                  deliveryTime={
                    item.deliveryTime
                      ? `In ${item.deliveryTime} Minutes`
                      : "Currently Unaviable"
                  }
                  onPress={() =>
                    navigation.navigate(ROUTES.SAFEWAY_SCREEN, {
                      restName: item.title,
                      time: item.deliveryTime,
                    })
                  }
                />
              );
            })}
          </GroceryContainer>
        </ScrollView>
      </Wrapper>
    </Container>
  );
};

export default GroceryScreen;
