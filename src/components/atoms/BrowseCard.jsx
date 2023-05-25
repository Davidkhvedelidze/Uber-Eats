import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  width: 166px;
  height: 139px;
  border-radius: 15px;
`;
const CardImage = styled.Image``;

const Title = styled.Text`
  text-align: center;
  border: 1px solid #e8e8e8;
  background: #ffffff;
  width: 166px;
  height: 41px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const BrowseCard = ({ imgUrl, title, onPress, ...otherProps }) => {
  return (
    <Container onPress={onPress} {...otherProps}>
      <CardImage source={imgUrl} />
      <Title>{title}</Title>
    </Container>
  );
};

export default BrowseCard;
