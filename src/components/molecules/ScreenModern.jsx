import React from "react";
import { View, Text, Platform, Dimensions, StatusBar } from "react-native";
import styled from "styled-components";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const MainWrapper = styled.KeyboardAvoidingView`
  display: flex;
  height: 100%;
`;
const statusBarHeight = StatusBar.currentHeight;

const ImageBackground = styled.ImageBackground`
  height: ${windowHeight}px;
  width: ${windowWidth}px;
`;
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  padding-top: ${Platform.OS === "ios" ? "0" : statusBarHeight}px;
`;

export const ScreenModern = ({ children, ...otherProps }) => {
  return (
    <MainWrapper
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      {...otherProps}
    >
      <ImageBackground>
        <Container>{children}</Container>
      </ImageBackground>
    </MainWrapper>
  );
};
