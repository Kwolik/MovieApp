import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function SearchScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
}
