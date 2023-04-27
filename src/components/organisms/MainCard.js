import React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Icon } from "react-native-vector-icons/Ionicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

const LikeBtn = styled.View`
  position: absolute;
  left: 80%;
  right: 7%;
  top: 13%;
  bottom: 70%;
`;

const Container = styled.Pressable`
  margin-bottom: 25px;
`;

const CardImage = styled.Image``;

const TitleWrapper = styled.View``;

const Title = styled.Text`
  width: 128px;
  height: 21px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
`;

const Subtitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #6b6b6b;
`;
const Rating = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RatingText = styled.Text`
  font-size: 15px;
  text-align: center;
`;
const CardBottom = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

const Promotion = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 25px;
  gap: 10px;
  position: absolute;
  left: 0%;
  right: 33%;
  top: 13%;
  bottom: 70%;
  background: #34a853;
  border-bottom-right-radius: 51px;
  border-top-right-radius: 51px;
`;

const PromotionText = styled.Text`
  width: 161px;
  height: 21px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  color: #ffffff;
`;
const HeartIcon = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handlePress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Ionicons
        name={isLiked ? "heart" : "heart-outline"}
        size={30}
        color={isLiked ? "white" : "white"}
      />
    </TouchableOpacity>
  );
};

const MainCard = ({
  imgUrl,
  title,
  price,
  deliveryTime,
  rating,
  promotion = false,
  orders,
  reward,
}) => {
  return (
    <Container>
      <CardImage source={imgUrl} />
      <LikeBtn>
        <HeartIcon />
      </LikeBtn>
      <CardBottom>
        <TitleWrapper>
          <Title>{title}</Title>
          {price && (
            <Subtitle>
              ${price} Delivery Fee | {deliveryTime}
              min
            </Subtitle>
          )}
        </TitleWrapper>
        <Rating>
          <RatingText>{rating}</RatingText>
        </Rating>
      </CardBottom>
      {promotion && (
        <Promotion>
          <PromotionText>
            {orders} orders until ${reward} reward
          </PromotionText>
        </Promotion>
      )}
    </Container>
  );
};

export default MainCard;
