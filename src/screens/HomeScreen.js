import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={{flex:1, justifyContent: "center"}}>
      <Text style={styles.heading}>HomeScreen</Text>
      <TouchableOpacity style={{padding:10}} onPress={() => {props.navigation.navigate('Components')}}>
        <Text style={styles.text}>Go to Components</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:10}} onPress={() => {props.navigation.navigate('List')}}>
        <Text style={styles.text}>Go to List</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:10}} onPress={() => {props.navigation.navigate('Image')}}>
        <Text style={styles.text}>Go to Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:10}} onPress={() => {props.navigation.navigate('Counter')}}>
        <Text style={styles.text}>Go to Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:10}} onPress={() => {props.navigation.navigate('Color')}}>
        <Text style={styles.text}>Go to Color</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:10}} onPress={() => {props.navigation.navigate('ColorSquare')}}>
        <Text style={styles.text}>Go to Color Square</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:10}} onPress={() => {props.navigation.navigate('Text')}}>
        <Text style={styles.text}>Go to Text</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:10}} onPress={() => {props.navigation.navigate('Box')}}>
        <Text style={styles.text}>Go to BoxScreen</Text>
      </TouchableOpacity>
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
  heading: {
    paddingLeft:15,
    color: "black",
  },
});

export default HomeScreen;
