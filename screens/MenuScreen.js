import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import photo from "../assets/back.png";

export default function MenuScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    menu: {
      flex: 1,
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
      color: "#E1E1E1",
      fontSize: 24,
      textAlign: "center",
    },
    button: {
      backgroundColor: "#9A9A9B",
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#16161A",
    },
  });

  const onGoingLogin = () => {
    navigation.navigate("Login");
  };

  const onGoingRegistration = () => {
    navigation.navigate("Signup");
  };

  return (
    <ImageBackground source={photo} style={styles.menu}>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: "100%" }}
          keyboardShouldPersistTaps="always"
        >
          <Text style={styles.welcome}>Welcome!</Text>
          <Image style={styles.logo} source={require("../assets/logo.png")} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => onGoingLogin()}
          >
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
    </ImageBackground>
  );
}
