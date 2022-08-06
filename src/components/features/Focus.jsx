import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../common/RoundedButton";

export const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          What would you like to focus on now ?
        </Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} activeUnderlineColor="#fff" />
          <RoundedButton title="+" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginTop: 50,
    padding: 5,
  },
  titleText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  inputContainer: {
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
});
