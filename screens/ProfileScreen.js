import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Title } from "react-native-paper";
import mainContext from "../context/mainContext";
import Firebase from "../Firebase";

export default function ProfileScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 80,
      backgroundColor: "black",
      justifyContent: "center",
    },
    box: {
      marginBottom: 20,
    },
    name: {
      marginLeft: 30,
      color: "white",
    },
    options: {
      marginLeft: 50,
      color: "white",
    },
    button: {
      backgroundColor: "#788eec",
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonTitle: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  const { currentUser } = Firebase.auth();
  const { signOutUser } = useContext(mainContext);
  console.log(currentUser);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.name}>Name:</Text>
        <Title style={styles.options}>Robert Kwoll</Title>
      </View>
      <View style={styles.box}>
        <Text style={styles.name}>Email:</Text>
        <Title style={styles.options}>{currentUser.email}</Title>
      </View>
      <View style={styles.box}>
        <Text style={styles.name}>Lista produkcji:</Text>
        <Title style={styles.options}>45</Title>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={() => signOutUser()}>
          <Text style={styles.buttonTitle}>Wyloguj</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
