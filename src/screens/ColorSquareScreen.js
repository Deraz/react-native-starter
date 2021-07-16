import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorAdjust from "../Components/ColorAdjust";
const COLOR_INCREMENT = 15;

const ColorSquareScreen = () => {
  const [red, updateRed] = useState(0);
  const [green, updateGreen] = useState(0);
  const [blue, updateBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "r":
        red + change < 0 || red + change > 255 ? null : updateRed(red + change);
        return;
      case "g":
        green + change < 0 || green + change > 255
          ? null
          : updateGreen(green + change);
        return;
      case "b":
        blue + change < 0 || blue + change > 255
          ? null
          : updateBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View style={styles.view}>
      <ColorAdjust
        onIncrease={() => setColor("r", COLOR_INCREMENT)}
        onDecrease={() => setColor("r", -1 * COLOR_INCREMENT)}
        title="Red"
      />
      <ColorAdjust
        onIncrease={() => setColor("g", COLOR_INCREMENT)}
        onDecrease={() => setColor("g", -1 * COLOR_INCREMENT)}
        title="Green"
      />
      <ColorAdjust
        onIncrease={() => setColor("b", COLOR_INCREMENT)}
        onDecrease={() => setColor("b", -1 * COLOR_INCREMENT)}
        title="Blue"
      />
      <Text style={{ alignSelf: "center", fontSize: 30 }}>
        Color: rgb({red},{green},{blue})
      </Text>
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
          alignSelf: "center",
        }}
      ></View>
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
    padding: 20,
  },
});

export default ColorSquareScreen;
