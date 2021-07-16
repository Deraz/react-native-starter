import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Yehia";
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with React Native!</Text>
      <Text style={{ color: "red" }}>My Name is {name}, Hi!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
});

export default ComponentsScreen;
