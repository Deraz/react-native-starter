import React, {useState} from "react";
import { Text, View, TouchableOpacity, StyleSheet} from "react-native";

const CounterScreen = () => {
const [counter, updateCount] = useState(0);

  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          updateCount(counter+1);
        }}
      >
        <Text style={styles.text}>Increase Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          updateCount(counter-1);
        }}
      >
        <Text style={styles.text}>Decrease Counter</Text>
      </TouchableOpacity>
      <Text style={{alignSelf: 'center', fontSize: 40}}>Current Count: {counter}</Text>
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
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    }
  });

export default CounterScreen;
