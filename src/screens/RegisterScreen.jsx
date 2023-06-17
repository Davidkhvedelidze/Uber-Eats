import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../components/atoms/Input";
import { ScreenModern } from "../components/molecules/ScreenModern";
import Button from "../components/atoms/Button";
import { storeData } from "../helpers/manageStorage";
import * as ROUTES from "../constants/routes";
import AppSnackBar from "../components/molecules/AppSnackBar";
import GroceryHeader from "../components/organisms/GroceryHeader";

const Container = styled(ScreenModern)``;

const InnerContainer = styled.View`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const NewInput = styled(Input)`
  font-size: 12px;
`;

const TitleContainer = styled.View`
  width: 319px;
  height: 100px;
`;
const Title = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;

  color: #1f5460;
  margin-bottom: 10px;
`;
const Subtitle = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: #879ea4;
`;

const TextInput = styled.View`
  box-sizing: border-box;
  width: 319px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(31, 84, 96, 0.4);
  border-radius: 4px;
  padding: 0px 10px 0px 10px;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 12px;
`;
const IconCont = styled.View`
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // const SnackBar = VisibleStateUpdate();

  const saveData = async () => {
    if (
      (form &&
        form.name &&
        form.email &&
        form.password &&
        form.confirmPassword) === ""
    ) {
      setError((prev) => !prev);
      return;
    }
    setSuccess((prev) => !prev);
    navigation.navigate(ROUTES.LOGIN_SCREEN);
    storeData("user", form);
  };
  return (
    <Container>
      <GroceryHeader onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <AppSnackBar
          visible={success}
          text="you have been registered"
          top={0}
          position="top"
          callback={setSuccess}
        />
        <AppSnackBar
          visible={error}
          text="Error while Registering"
          top={0}
          callback={setError}
          isError
        />
        <InnerContainer>
          <TitleContainer>
            <Title>Create account </Title>
            <Subtitle>Sign up to get started!</Subtitle>
          </TitleContainer>
          <TextInput>
            <IconCont>
              <Image
                source={require("../components/pictures/registerIcons/name.png")}
              />
            </IconCont>
            <NewInput
              title={"Name"}
              color={"rgba(0, 0, 0, 0.4)"}
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
          </TextInput>
          <TextInput>
            <IconCont>
              <Image
                source={require("../components/pictures/registerIcons/email.png")}
              />
            </IconCont>
            <NewInput
              title={"E-Mail"}
              color={"rgba(0, 0, 0, 0.4)"}
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </TextInput>
          <TextInput>
            <IconCont>
              <Image
                source={require("../components/pictures/registerIcons/pas.png")}
              />
            </IconCont>
            <NewInput
              title={"Password"}
              color={"rgba(0, 0, 0, 0.4)"}
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
              secureText={true}
            />
          </TextInput>
          <TextInput>
            <IconCont>
              <Image
                source={require("../components/pictures/registerIcons/pas.png")}
              />
            </IconCont>
            <NewInput
              title={"Re-Password"}
              color={"rgba(0, 0, 0, 0.4)"}
              value={form.confirmPassword}
              onChangeText={(text) =>
                setForm({ ...form, confirmPassword: text })
              }
              secureText={true}
            />
          </TextInput>
          <Button
            title="Sign Up"
            onPress={() => {
              saveData(form);
              console.log(form);
            }}
          />
        </InnerContainer>
      </ScrollView>
    </Container>
  );
};

export default RegisterScreen;
