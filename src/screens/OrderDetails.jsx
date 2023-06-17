import { View, Text } from "react-native";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import TextM from "../components/atoms/TextM";
import { ScreenModern } from "../components/molecules/ScreenModern";
import PromotionWidget from "../components/molecules/PromotionWidget";
import { ScrollView } from "react-native-gesture-handler";
import RadioLabel from "../components/molecules/RadioLabel";
import { Screen } from "../components/Screen";
import CheckboxLabel from "../components/molecules/CheckboxLabel";
import BlackBottom from "../components/molecules/BlackBottom";
import { Portal } from "react-native-portalize";
import BottomSheet from "../components/atoms/BottomSheet.jsx";
import * as ROUTES from "../constants/routes";
import {
  souces,
  size,
  getSauce,
  Crust,
  addOns,
  frequently,
} from "../data/appData";

const Container = styled(ScreenModern)`
  width: 375px;
`;

const RestaurantTitle = styled(TextM)`
  padding: 15px 0px 0px 10px;
`;

const ItemPrice = styled(TextM)`
  margin: 10px 0;
  padding: 0 10px;
`;

const ItemDesc = styled.Text`
  padding: 0 10px;
  font-weight: 200;
  font-weight: 400;
  font-size: 14px;
  height: 60px;
  color: #545454;
  width: 333px;
`;

const SouceContainer = styled.View`
  margin-top: 24px;
`;
const SouceTitle = styled.Text`
  width: 260px;
  height: 22px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding: 0 10px;
`;
const SouceTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Separator = styled.View`
  width: 100%;
  height: 15px;
  background: #f6f6f6;
  margin-bottom: 10px;
`;

const RequiredModern = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 6px;
  gap: 10px;
  width: 72px;
  height: 20px;
  background: #eeeeee;
  border-radius: 99px;
  margin-right: 10px;
`;
const RequiredText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #6b6b6b;
`;
const GetYourSauceCont = styled.View``;
const GetYourSauceTitle = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 0 10px;
  color: #545454;
`;
const CheckBox = styled(CheckboxLabel)`
  margin: 10px;
`;
const BlackContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

const TotalContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const PlusMinus = styled.Pressable`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;
const PlusMinusTitle = styled.Text`
  font-size: 28px;
  font-weight: 400;
`;
const TotalAmount = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

const OrderDetails = ({ route, navigation }) => {
  const [souce, setSouces] = useState(souces);
  const [sizes, setSize] = useState(size);
  const [getSauces, setGetsauce] = useState(getSauce);
  const [Crusts, setCrust] = useState(Crust);
  const [addOn, setAddOns] = useState(addOns);
  const [frequentlies, setFrequently] = useState(frequently);

  const { restaurantName, price, desc } = route.params;

  const [count, setCount] = useState(0);
  const [crustcount, setCrustCount] = useState(0);
  const [addonsCount, setAddonsCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const categorySheetRef = useRef();
  const [itemPrice, setItemPrice] = useState(0);

  const handlePress = (id, price) => {
    size.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
        setCount(() => (price ? 0 + price : 0));
      }
    });
  };
  const handleSouce = (id) => {
    // isChecked ? (isChecked = false) : (isChecked = true)

    souce.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
      }
    });
  };

  const handleCrust = (id, price) => {
    // isChecked ? (isChecked = false) : (isChecked = true)

    Crusts.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
        setCrustCount(() => (price ? 0 + price : 0));
      }
    });
  };
  const handleAdd = (id, price, isChecked) => {
    // addOn.forEach((item) => {
    //   item.id !== id ? !isChecked : (isChecked = false);
    // });

    addOn.forEach((item) => {
      item.id !== id ? (item.isChecked = true) : isChecked;

      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
        setAddonsCount(() => (price ? 0 + price : 0));
      }
    });
  };
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantTitle size={24}>{restaurantName}</RestaurantTitle>
        <ItemPrice size={22}>{price}</ItemPrice>
        <ItemDesc>{desc}</ItemDesc>
        <PromotionWidget />
        <SouceContainer>
          <Separator />
          <SouceTitleWrapper>
            <SouceTitle>Choose your sauce</SouceTitle>
            <RequiredModern>
              <RequiredText>Required</RequiredText>
            </RequiredModern>
          </SouceTitleWrapper>
          {souce.map((item) => {
            return (
              <RadioLabel
                label={item.label}
                key={item.id}
                onPress={() => {
                  handleSouce(item.id);
                }}
                checked={item.isChecked}
              />
            );
          })}
        </SouceContainer>
        <SouceContainer>
          <Separator />

          <GetYourSauceCont>
            <SouceTitle>Get your sauce on the side</SouceTitle>
            <GetYourSauceTitle>Choose up to 1</GetYourSauceTitle>
          </GetYourSauceCont>
          {getSauces.map((item) => {
            return (
              <CheckBox
                label={item.label}
                key={item.id}
                onPress={() => {
                  item.isChecked
                    ? (item.isChecked = true)
                    : (item.isChecked = false);
                }}
                checked={item.isChecked}
              />
            );
          })}
        </SouceContainer>
        <SouceContainer>
          <Separator />

          <SouceTitleWrapper>
            <SouceTitle>Choose your size</SouceTitle>
            <RequiredModern>
              <RequiredText>Required</RequiredText>
            </RequiredModern>
          </SouceTitleWrapper>
          {sizes.map((item) => {
            return (
              <RadioLabel
                label={item.label}
                key={item.id}
                price={item.price}
                onPress={() => {
                  handlePress(item.id, item.price);
                }}
                checked={item.isChecked}
              />
            );
          })}
          <Text>{count}</Text>
        </SouceContainer>

        <SouceContainer>
          <Separator />

          <SouceTitleWrapper>
            <SouceTitle>Choose your Crust</SouceTitle>
            <RequiredModern>
              <RequiredText>Required</RequiredText>
            </RequiredModern>
          </SouceTitleWrapper>
          {Crusts.map((item) => {
            return (
              <RadioLabel
                label={item.label}
                key={item.id}
                price={item.price}
                onPress={() => {
                  handleCrust(item.id, item.price);
                }}
                checked={item.isChecked}
              />
            );
          })}
          <Text>{crustcount}</Text>
        </SouceContainer>
        <SouceContainer>
          <Separator />

          <GetYourSauceCont>
            <SouceTitle>Choose your add-ons</SouceTitle>
            <GetYourSauceTitle>Choose up to 1</GetYourSauceTitle>
          </GetYourSauceCont>
          {addOn.map((item) => {
            return (
              <CheckBox
                label={item.label}
                key={item.id}
                price={item.price}
                checked={item.isChecked}
                onPress={() => {
                  handleAdd(item.id, item.price, item.isChecked);
                }}
              />
            );
          })}
          <Text>{addonsCount}</Text>
        </SouceContainer>
        <SouceContainer>
          <Separator />

          <GetYourSauceCont>
            <SouceTitle>Frequently brought together</SouceTitle>
          </GetYourSauceCont>
          {frequentlies.map((item) => {
            return (
              <CheckBox
                label={item.label}
                key={item.id}
                price={item.price}
                onPress={() => {
                  handlePress(item.id, item.price);
                }}
                checked={item.isChecked}
              />
            );
          })}
        </SouceContainer>
      </ScrollView>
      <TotalContainer>
        <PlusMinus>
          <PlusMinusTitle>-</PlusMinusTitle>
        </PlusMinus>
        <TotalAmount>{count}</TotalAmount>
        <PlusMinus>
          <PlusMinusTitle>+</PlusMinusTitle>
        </PlusMinus>
      </TotalContainer>
      <BlackContainer>
        <BlackBottom
          value={count}
          onPress={() => categorySheetRef.current.open()}
        />
      </BlackContainer>
      <Portal>
        <BottomSheet bottomSheetRef={categorySheetRef} modalHeight={800}>
          <TotalContainer>
            <BlackBottom
              value={"go to details"}
              onPress={() => (
                navigation.navigate(ROUTES.DELIVERY_DETAILS),
                categorySheetRef.current?.close()
              )}
            />
          </TotalContainer>
        </BottomSheet>
      </Portal>
    </Container>
  );
};

export default OrderDetails;
