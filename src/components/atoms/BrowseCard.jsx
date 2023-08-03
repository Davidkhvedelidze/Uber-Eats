import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  width: 166px;
  height: 139px;
  border-radius: 15px;
  margin: 5px;
`;
const CardImage = styled.Image``;
const Wrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 166px;
  height: 41px;
  border: 1px solid #e8e8e8;
  background: #ffffff;
`;

const Title = styled.Text`
  font-weight: 400;
  font-size: 16px;
`;

const BrowseCard = ({ imgUrl, title, onPress, ...otherProps }) => {
  return (
    <Container onPress={onPress} {...otherProps}>
      <CardImage source={imgUrl} />
      <Wrapper>
        <Title>{title}</Title>
      </Wrapper>
    </Container>
  );
};

export default BrowseCard;
