import { View, Text, Image } from "react-native";
import React from "react";
import { Checkbox } from "expo-checkbox";
import styled from "styled-components";
import TextM from "../atoms/TextM";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const Title = styled(TextM)``;
const LeftContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RightContainer = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;
const PriceTitle = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
const Img = require("../pictures/PriceIcon.png");

const CheckboxLabel = ({
  onPress,
  checked,
  price,
  label,
  arr,
  setItemPrice,
  setSelectedItem,
  ...otherProps
}) => {
  // const [checked, setChecked] = useState(false);

  // function handlePrice() {
  //   if (checked) {
  //     setItemPrice((prev) => prev - parseFloat(price));
  //   } else if (!checked) {
  //     setItemPrice((prev) => prev + parseFloat(price));
  //   }
  // }

  // function handleItem() {
  //   if (checked) {
  //     setSelectedItem((prev) => prev.filter((item) => item.label !== label));
  //   } else if (!checked) {
  //     arr.forEach((item) => {
  //       if (item.label === label) {
  //         setSelectedItem((prev) => [...prev, item]);
  //       }
  //     });
  //   }
  // }

  return (
    <Container onPress={onPress}>
      <LeftContainer>
        <Checkbox
          value={checked}
          status={checked ? "checked" : "unchecked"}
          onPress={onPress}
          {...otherProps}
          onValueChange={() => {
            setChecked(!checked);
            handlePrice();
            handleItem();
          }}
        />
        <Title>{label}</Title>
      </LeftContainer>
      {price && (
        <RightContainer>
          <PriceTitle>US${price}.00 ea</PriceTitle>
          <Image source={Img} />
        </RightContainer>
      )}
    </Container>
  );
};

export default CheckboxLabel;
