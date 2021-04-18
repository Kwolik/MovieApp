import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function MyListScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text>My List</Text>
    </View>
  );
}