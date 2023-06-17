import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px 5px 0px;
`;
const TitleWrapper = styled.View`
  display: flex;
  justify-content: flex-start;
  width: 85%;
`;
const Wrapper = styled.View`
  width: 350px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const CategoriesCard = ({ onPress, imgUrl, title }) => {
  return (
    <Container onPress={onPress}>
      <Wrapper>
        <Image source={imgUrl} style={{ height: 20, width: 20 }} />
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <Image
          source={require("../../components/pictures/FeaturedCardPics/arrow1.png")}
        />
      </Wrapper>
    </Container>
  );
};

export default CategoriesCard;
