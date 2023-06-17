import { View, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { Screen } from "../components/Screen";
import { FlatList } from "react-native-gesture-handler";
import MainCard from "../components/organisms/MainCard";
import { Image } from "react-native";
import { listToRender, PickupListToRender } from "../data/appData";

const Container = styled(Screen)`
  background-color: white;
`;

const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 55px;
`;

const Separator = styled.View`
  height: 3px;
  background-color: black;
  width: 80%;
  position: absolute;
  bottom: 0px;
  border-radius: 5px;
`;

const Cont = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const LabelContainer = styled.Pressable`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 50%;
  border-color: black;
`;

const Label = styled.Text`
  margin-left: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  height: 100%;
`;

const Deals = ({ navigation, route }) => {
  const [list, setList] = useState(listToRender);
  const [pickupList, setPickupList] = useState(PickupListToRender);

  const [type, setType] = useState(route.params.num === 0 ? 0 : 1);
  const [ctgr, setCtgr] = useState(0);

  const HeaderComponent = ({ onPress, borderBot }) => {
    return (
      <HeaderWrapper>
        <Cont>
          <LabelContainer onPress={() => setType(0)}>
            <Image source={require("../Images/Offers.png")} />

            <Label>Offers</Label>
          </LabelContainer>
          {type === 0 && <Separator />}
        </Cont>
        <Cont>
          <LabelContainer onPress={() => setType(1)}>
            <Image source={require("../Images/Restaurant-Rewards.png")} />
            <Label>Rewards</Label>
          </LabelContainer>
          {type === 1 && <Separator />}
        </Cont>
      </HeaderWrapper>
    );
  };

  return (
    <Container>
      <View
        style={{
          flex: 1,
          display: "flex",
          width: "100%",
        }}
      >
        <HeaderComponent />
        <FlatList
          //   ListHeaderComponent={HeaderComponent}
          ListHeaderComponentStyle={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            backgroundColor: "#FFFFFF",
          }}
          style={{ paddingHorizontal: 30, paddingTop: 10, marginBottom: 70 }}
          showsVerticalScrollIndicator={false}
          data={type === 0 ? list : pickupList}
          renderItem={({ item }) => (
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
              //   distance={ctgr === 0 ? item.distance : ""}
              //   onPress={() => navigation.navigate(ROUTES.REST_DETAILS, item)}
            />
          )}
        />
      </View>
    </Container>
  );
};

export default Deals;
