import React, { useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

const Container = styled.View``;

const UserName = styled.TextInput`
  border: 1px #c7dac5;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 5px;
  text-align: center;
  height: 52px;
  width: 266px;
  font-size: 18px;
`;

const Password = styled.TextInput`
  height: 40px;
  border: 1px #c7dac5;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
  height: 52px;
  width: 266px;
  font-size: 18px;
`;
const ActionBtn = styled(Button)``;

const AuthForm = ({ title, userName, password, setUserName, setPassword }) => {
  return (
    <Container>
      <UserName
        placeholder="Username"
        onChange={(e) => setUserName(e.nativeEvent.text)}
        value={userName}
      />
      <Password
        placeholder="Password"
        onChange={(e) => setPassword(e.nativeEvent.text)}
        value={password}
      />
      {/* <ActionBtn title={title} /> */}
    </Container>
  );
};

export default AuthForm;

// ავტორიზაციის ფორმა, სადაც მოთავსებულია იუზერნეიმი, პაროლი, და ექშენ ღილაკი, რომელიც ექსპორტდება LoginScreen.jsx ზე
