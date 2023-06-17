import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React from "react";

const Input = ({
  handleSearch,
  onChangeText,
  title,
  icon,
  color,
  value,
  secureText,
  ...otherProps
}) => {
  return (
    <View style={styles.Container} {...otherProps}>
      {icon && <View style={styles.IconContainer}>{icon}</View>}
      <TextInput
        style={styles.Input}
        placeholder={title}
        value={value}
        placeholderTextColor={color ? color : "black"}
        autoCorrect={false}
        editable={true}
        onChangeText={(text) =>
          handleSearch ? handleSearch(text) : onChangeText(text)
        }
        secureTextEntry={secureText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Container: {
    width: "90%",
    backgroundColor: "#d9d3d3ec",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  Input: {
    display: "flex",
    width: 270,
    height: 34,
    fontSize: 18,
    color: "black",
  },
  IconContainer: {
    display: "flex",
    justifyContent: "center",
    marginRight: 8,
  },
});
