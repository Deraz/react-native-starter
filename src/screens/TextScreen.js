import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View style = {{padding:15}}>
        <Text style = {{fontSize:20}}>Enter password:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length > 5? null: <Text>Password must be longer than 5 characters</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 3,
    padding: 15,
    fontSize: 20,
  },
});
export default TextScreen;
