import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const IconWrapper = styled.View`
  margin: 5px 10px 5px 10px;
`;
const Title = styled.Text``;

const IconTitle = ({ icon, title }) => {
  return (
    <Container>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
    </Container>
  );
};

export default IconTitle;
