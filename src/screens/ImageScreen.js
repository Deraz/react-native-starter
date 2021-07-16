import React from "react";
import { Text, StyleSheet, View } from "react-native";
import  ImageDetail  from '../Components/ImageDetail';

const ImageScreen = () => {
  return (
    <View style={styles.view}>
      <ImageDetail title="Forest" imageSource = {require('../../assets/forest.jpg')}/>
      <ImageDetail title="Beach" imageSource = {require('../../assets/beach.jpg')}/>
      <ImageDetail title="Mountain" imageSource = {require('../../assets/mountain.jpg')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default ImageScreen;
