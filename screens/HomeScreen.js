import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Title, Paragraph } from "react-native-paper";
import mainContext from "../context/mainContext";
import Firebase from "../Firebase";

export default function HomeScreen() {
  const styles = StyleSheet.create({
    inputContainer: {
      width: "80%",
      marginBottom: 20,
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      marginBottom: 20,
    },
  });

  const { currentUser } = Firebase.auth();
  const { signOutUser } = useContext(mainContext);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Title>Home Screen</Title>
      </View>
      <View style={styles.box}>
        <Paragraph>{currentUser.email}</Paragraph>
      </View>
      <View style={styles.box}>
      <Button onPress={() => signOutUser()} mode="contained" icon="logout">
          Wyloguj
        </Button>
      </View>
    </View>
  );
}
