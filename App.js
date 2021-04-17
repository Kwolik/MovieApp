import React, { useState, useMemo, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator } from "react-native-paper";

import mainContext from "./context/mainContext";
import Firebase from "./Firebase";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import MenuScreen from "./screens/MenuScreen";

const AppStack = createStackNavigator();

export default function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authListener = Firebase.auth().onAuthStateChanged((user) => {
      setUserLogged(user ? true : false);
      setIsLoading(false);
      setUserProfile(user);
    });
    return authListener;
  }, []);

  const doLogin = async (email, password) => {
    setIsLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  };

  const doSignup = async (email, password) => {
    setIsLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  };

  const mainC = useMemo(
    () => ({
      userProfile: { userProfile },
      inHome: () => setIsDarkTheme((isDark) => !isDark),
      signOutUser: () => Firebase.auth().signOut(),
      handleLogin: (email, password) => {
        doLogin(email, password);
      },
      handleSignup: (email, password) => {
        doSignup(email, password);
      },
    }),
    []
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <mainContext.Provider value={mainC}>
      <NavigationContainer>
        <AppStack.Navigator>
          {userLogged == false ? (
            <>
              <AppStack.Screen name="Menu" component={MenuScreen} />
              <AppStack.Screen name="Login" component={LoginScreen} />
              <AppStack.Screen name="Signup" component={SignUpScreen} />
            </>
          ) : (
            <>
              <AppStack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
            </>
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </mainContext.Provider>
  );
}
