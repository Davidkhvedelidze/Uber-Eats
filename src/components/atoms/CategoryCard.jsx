import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  height: 90px;
  width: 90px;
`;
const ImageContainer = styled.View`
  height: 75px;
  width: 75px;
  background-color: #e6e6e640;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
const CategoryImage = styled.Image``;
const Ctgr = styled.Text`
  width: 80px;
  text-align: center;
`;

const CategoryCard = ({ onPress, imgUrl, title }) => {
  return (
    <Container onPress={onPress}>
      <ImageContainer>
        <CategoryImage source={imgUrl} />
      </ImageContainer>
      <Ctgr>{title}</Ctgr>
    </Container>
  );
};

export default CategoryCard;
