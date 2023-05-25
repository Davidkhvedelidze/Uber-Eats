import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import React from "react";

const Input = ({ handleSearch }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.IconContainer}>
        <Ionicons name="md-search-outline" size={24} color="black" />
      </View>
      <TextInput
        style={styles.Input}
        placeholder="Food, shopping, drinks, etc"
        placeholderTextColor="#000000"
        // value={searchText}

        autoCorrect={false}
        editable={true}
        onChangeText={(text) => handleSearch(text)}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Container: {
    width: "90%",
    backgroundColor: "#d9d3d3ec",
    borderRadius: 99,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    margin: 10,
  },
  Input: { display: "flex", width: 313, height: 34 },
  IconContainer: {
    display: "flex",
    justifyContent: "center",
    marginRight: 8,
  },
});
