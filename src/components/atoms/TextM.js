import React from "react";
import styled from "styled-components";

const Txt = styled.Text`
  font-family: ${({ type }) => {
    switch (type) {
      case "Bold":
        return "Uber-Bold";
      case "Medium":
        return "Uber-Medium";
      default:
        return "Uber-Medium";
    }
  }};
  font-size: ${({ size }) => (size ? size : 16)}px;
`;
const TextM = ({ children, type = "Bold", size, ...otherProps }) => {
  return (
    <Txt type={type} size={size} {...otherProps}>
      {children}
    </Txt>
  );
};

export default TextM;
