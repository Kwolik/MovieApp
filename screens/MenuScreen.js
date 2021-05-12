import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function MenuScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "black",
    },
    logo: {
      height: 200,
      width: 200,
      alignSelf: "center",
      margin: 30,
      marginBottom: 50,
    },
    welcome: {
      marginTop: 60,
      margin: 30,
      color: "white",
      fontSize: 24,
      textAlign: "center",
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

  const onGoingLogin = () => {
    navigation.navigate("Login");
  };

  const onGoingRegistration = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Text style={styles.welcome}>Welcome!</Text>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

        <TouchableOpacity style={styles.button} onPress={() => onGoingLogin()}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onGoingRegistration()}
        >
          <Text style={styles.buttonTitle}> Sign up</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
