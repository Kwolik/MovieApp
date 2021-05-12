import React, { useState, useContext } from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import { TextInput } from "react-native-paper";
import mainContext from "../context/mainContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignUpScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      justifyContent: 'center',
    },
    logo: {
      height: 200,
      width: 200,
      alignSelf: "center",
      margin: 50,
    },
    input: {
      height: 48,
      borderRadius: 5,
      overflow: "hidden",
      backgroundColor: "white",
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 30,
      marginRight: 30,
      paddingLeft: 16,
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
    footerView: {
      flex: 1,
      alignItems: "center",
      marginTop: 20,
    },
    footerText: {
      fontSize: 16,
      color: "#2e2e2d",
    },
    footerLink: {
      color: "#788eec",
      fontWeight: "bold",
      fontSize: 16,
    },
  });

  const { handleSignup } = useContext(mainContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <TextInput
          style={styles.input}
          onChangeText={(name) => setName(name)}
          value={name}
          label="Name"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          onChangeText={(email) => setEmail(email)}
          value={email}
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={(password) => setPassword(password)}
          value={password}
          label="Password"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSignup(email, password)}
        >
          <Text style={styles.buttonTitle}>Create account</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already got an account?{" "}
            <Text
              onPress={() => navigation.navigate("Login")}
              style={styles.footerLink}
            >
              Log in
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
