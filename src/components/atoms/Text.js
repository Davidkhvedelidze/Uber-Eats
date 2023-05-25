import React from "react";
import styled from "styled-components";

const Txt = styled.Text`
  font-family: ${({ type }) => {
    switch (type) {
      case "Bold":
        return "Uber=Bold";
      case "Medium":
        return "Uber-Medium";
      default:
        return "Uber-Medium";
    }
  }};
`;
const Text = ({ children, type = "Medium", ...otherProps }) => {
  return (
    <Txt type={type} {...otherProps}>
      {children}
    </Txt>
  );
};

export default Text;
