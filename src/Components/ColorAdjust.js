import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const ColorAdjust = ({ title, onIncrease, onDecrease }) => {
  return (
    <View style={styles.view}>
      <Text style={{ paddingLeft: 15 }}>{title}</Text>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          onIncrease();
        }}
      >
        <Text style={styles.text}>Increase {title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          onDecrease();
        }}
      >
        <Text style={styles.text}>Decrease {title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "flex-start",
  },
  text: {
    paddingVertical: 15,
    backgroundColor: "red",
    color: "white",
    paddingLeft: 15,
  },
});

export default ColorAdjust;
