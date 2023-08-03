import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { Constants } from "expo-constants";
import SnackBar from "react-native-snackbar-component";
import styled from "styled-components";

const NOTIFICATION_DISMISS_TIME = 3000;

const SnackContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

const InfoContainer = styled.View`
  margin-left: 15px;
`;

const Title = styled.Text`
  color: white;
`;
const InfoText = styled.Text`
  font-size: 12px;
  color: white;
`;

const AppSnackBar = ({
  text,
  isError,
  visible = false,
  callback,
  navigation,
}) => {
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        callback((prev) => !prev);
      }, NOTIFICATION_DISMISS_TIME);
    }
  }, [visible]);
  const Message = () => {
    return (
      <SnackContainer>
        {isError ? <Title>Error</Title> : <Title>Success</Title>}

        <InfoContainer>
          <Title>
            {/* {isError ? "Error" : "Success"} */}
            <InfoText numberOfLines={2}>{text}</InfoText>
          </Title>
        </InfoContainer>
      </SnackContainer>
    );
  };

  return (
    <SnackBar
      useNativeDriver={true}
      visible={visible}
      backgroundColor={isError ? "red" : "green"}
      messageColor="#219ebc70"
      position="top"
      // top={Constants.statusBarHeight + 4}
      textMessage={Message}
    />
  );
};

export default AppSnackBar;
