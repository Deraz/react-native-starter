import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const arrayList = [
    { name: "Yehia", age: 25 },
    { name: "Sondos", age: 23 },
    { name: "Nader", age: 26 },
    { name: "Younan", age: 25 },
    { name: "Waleed", age: 25 },
    { name: "Magdy", age: 25 },
    { name: "Joe", age: 25 },
    { name: "Mai", age: 25 },
    { name: "Sarah", age: 22 },
    { name: "Nada", age: 13 },
    { name: "Nagham", age: 20 },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(person) => person.name}
      data={arrayList}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            My name is {item.name} and I am {item.age} years old.
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "blue",
    marginVertical: 40,
  },
});

export default ListScreen;
