import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Focus } from "./src/components/features/Focus";

export default App = () => {
  return (
    <View style={styles.container}>
      <Focus />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#8FC1B5",
  },
});
