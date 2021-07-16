import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { color } from "react-native-reanimated";

const ColorScreen = () => {
  const [colors, addColor] = useState([]);

  const randomNumber = () => {
    return Math.ceil(Math.random() * 255);
  };

  const returnView = (color) => {
    return (
      <View style={{ width: 400, height: 50, backgroundColor: color }}></View>
    );
  };

  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          addColor([
            ...colors,
            `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`,
          ]);
        }}
      >
        <Text style={styles.text}>Add Color</Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => returnView(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingVertical: 15,
    backgroundColor: "red",
    color: "white",
    paddingLeft: 15,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default ColorScreen;
