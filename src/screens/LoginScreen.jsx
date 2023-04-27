import React, { useState } from "react";
import styled from "styled-components";
import GetStarted from "../components/organisms/GetStarted";

import { LoginScreenImage } from "../components/pictures/LoginScreenImage";
import Button from "../components/atoms/Button";
import { Screen } from "../components/Screen";
import AuthForm from "../components/molecules/AuthForm";
import * as ROUTES from "../constants/routes";
import { Text, View } from "react-native";
import { Pressable } from "react-native";
import BottomTabNavigator from "../Navigators/BottomTabNavigator";

const Container = styled(Screen)``;

const Image = styled(LoginScreenImage)`
  margin-top: 40px;
  margin-bottom: 54px;
`;
const SignInBtn = styled(Button)``;
const GetStartedBtn = styled(Button)`
  margin-bottom: 23px;
  color: black;
`;

const SignUpButton = styled.Text`
  color: blue;
  margin-left: 5px;
`;

const SkipBtn = styled(Button)``;

const SignUpContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      {/* <SignInBtn title="Sign in with email" light /> */}
      <Image />
      <AuthForm title="Log in" userName={userName} setUserName={setUserName} />
      <GetStartedBtn
        title="Sign in"
        onPress={() => navigation.navigate(ROUTES.DRAWER_NAVIGATOR)}
      />
      {/* <GetStarted /> */}
      <SignUpContainer>
        <Text>Not registered yet? </Text>
        <Pressable>
          <SignUpButton>Sign Up</SignUpButton>
          {/* <Text title="Skip" onPress={() => console.log(userName)} /> */}
        </Pressable>
      </SignUpContainer>
      <SignUpContainer>
        <Text>Forgot Password?</Text>
        <Pressable
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD_SCREEN)}
        >
          <SignUpButton>Reset</SignUpButton>
        </Pressable>
      </SignUpContainer>
    </Container>
  );
};

export default LoginScreen;
