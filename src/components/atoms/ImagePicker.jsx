import { View, Text } from "react-native";
import React from "react";
import * as ImgPicker from "expo-image-picker";
import styled from "styled-components";

const Container = styled.Pressable``;
const Title = styled.Text`
  color: #1d5c2e;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
`;

const ImagePicker = ({ title, callback }) => {
  const onPressHandler = async () => {
    const res = await ImgPicker.getMediaLibraryPermissionsAsync();
    if (res.granted) {
      const LaunchRes = await ImgPicker.launchImageLibraryAsync();
      callback(LaunchRes.uri);
    } else {
      const requestRes = await ImgPicker.requestMediaLibraryPermissionsAsync();
      if (requestRes) {
        const response = await ImgPicker.launchImageLibraryAsync();
        callback(response.uri);
      }
    }
  };
  return (
    <Container onPress={onPressHandler}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ImagePicker;
