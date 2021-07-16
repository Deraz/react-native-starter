import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
const BoxScreen = (props) => {
  return (
    <View style={{ padding: 15 }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      >
        <Text style={{ color: "blue", fontWeight: "bold" }}>
          THERE'S ABSOLUTELY NOTHING HERE. PLEASE, GET BACK HOME
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
export default BoxScreen;
