import React, { useState, useContext } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TextInput,
} from "react-native";
import mainContext from "../context/mainContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import photo from "../assets/back.png";

export default function SignUpScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    menu: {
      flex: 1,
    },
    logo: {
      height: 200,
      width: 200,
      alignSelf: "center",
      margin: 40,
    },
    input: {
      height: 50,
      margin: 10,
      marginTop: 0,
      fontSize: 20,
      paddingLeft: 5,
      paddingBottom: 10,
      color: "#E1E1E1",
      borderColor: "rgba(0,0,0,0.00001)",
    },
    button: {
      backgroundColor: "#9B672E",
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      height: 48,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#16161A",
    },
    info: {
      marginLeft: 15,
      marginTop: 5,
      fontSize: 18,
      color: "#B2B2B2",
    },
    footerView: {
      justifyContent: "center",
      marginTop: 20,
      flexDirection: "row",
    },
    footerText: {
      fontSize: 16,
      color: "#E1E1E1",
    },
    footerLink: {
      color: "#F39B36",
      fontWeight: "bold",
      fontSize: 16,
    },
  });

  const { handleSignup } = useContext(mainContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground source={photo} style={styles.menu}>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: "100%" }}
          keyboardShouldPersistTaps="always"
        >
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text style={styles.info}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(name) => setName(name)}
            value={name}
            underlineColorAndroid="#F39B36"
          />
          <Text style={styles.info}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={(email) => setEmail(email)}
            value={email}
            underlineColorAndroid="#F39B36"
          />
          <Text style={styles.info}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(password) => setPassword(password)}
            value={password}
            underlineColorAndroid="#F39B36"
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSignup(email, password, name)}
          >
            <Text style={styles.buttonTitle}>Create account</Text>
          </TouchableOpacity>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>Already got an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.footerLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ImageBackground>
  );
}
