import React, { useEffect, useState } from "react";
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
import { UpdateUser, User } from "../UserProvider";
import { login } from "../helpers/login";
import { getData } from "../helpers/manageStorage";
import AppSnackBar from "../components/molecules/AppSnackBar";

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

const PressSignUp = styled.Pressable``;

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

  const [error, setError] = useState(false);

  const user = User();
  const updateUser = UpdateUser();

  const userLogin = async () => {
    const res = await getData("user");
    if (res && res.name === userName && res.password === password) {
      navigation.navigate(ROUTES.DRAWER_NAVIGATOR);
      // navigation.reset({
      //   index:0,
      //   routes: [{name : ROUTES.DRAWER_NAVIGATOR}]
      // })  <<<<< ამ შემთხვევაში დალოგინების შემდეგ მომხმარებელს არ ექნება საშუალება დაბრუნდეს საწყის გვერდზე goback ღილაკით
    } else {
      setError((prev) => !prev);
    }
  };

  const getUserData = async () => {
    const res = await getData("user");
    if (res && res.name === userName && res.password === password) {
      navigation.navigate(ROUTES.DRAWER_NAVIGATOR);
      // navigation.reset({
      //   index:0,
      //   routes: [{name : ROUTES.DRAWER_NAVIGATOR}]
      // }) <<< იგივე
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      {/* <SignInBtn title="Sign in with email" light /> */}
      <AppSnackBar
        text="Wrond Credentials"
        visible={error}
        callback={setError}
        isError
      />
      <Image />
      <AuthForm
        title="Log in"
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
      />
      <GetStartedBtn title="Sign in" onPress={userLogin} />
      {/* <GetStarted /> */}
      <SignUpContainer>
        <Text>Not registered yet? </Text>
        <Pressable onPress={() => navigation.navigate(ROUTES.REGISTER_SCREEN)}>
          <SignUpButton>Sign Up </SignUpButton>
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
