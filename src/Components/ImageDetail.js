import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View style = {styles.view}>
      <Image style= {styles.imageStyle} source = {props.imageSource}/>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  view: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems:'center'
  },
  imageStyle: {
      marginHorizontal: 5
  }
});

export default ImageDetail;
