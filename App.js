import React, { useState, useMemo, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  HomeStackScreen,
  CollectionStackScreen,
  SearchStackScreen,
  MyListStackScreen,
  ProfileStackScreen,
} from "./component/Navigation";
import mainContext from "./context/mainContext";
import Firebase from "./Firebase";
import MenuScreen from "./screens/MenuScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [nameDatabase, SetNameDatabase] = useState("");

  useEffect(() => {
    const authListener = Firebase.auth().onAuthStateChanged((user) => {
      setUserLogged(user ? true : false);
      setIsLoading(false);
      setUserProfile(user);
      global.idUser = user && user.uid;
    });
    return authListener;
  }, []);

  const doLogin = async (email, password) => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  const doSignup = async (email, password, name) => {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error));

    SetNameDatabase(name);
  };

  const changeEmail = async (email) => {
    Firebase.auth()
      .currentUser.updateEmail(email)
      .then(
        Firebase.database().ref(`/${idUser}/User`).update({
          email: email,
        })
      )
      .catch((error) => alert(error));
    alert("Email changed");
  };

  const changePassword = async (password) => {
    Firebase.auth()
      .currentUser.updatePassword(password)
      .then(alert("Password changed"))
      .catch((error) => alert(error));
  };

  const mainC = useMemo(
    () => ({
      userProfile: { userProfile },
      inHome: () => setIsDarkTheme((isDark) => !isDark),
      signOutUser: () => Firebase.auth().signOut(),
      handleLogin: (email, password) => {
        doLogin(email, password);
      },
      handleSignup: (email, password, name) => {
        doSignup(email, password, name);
      },
      handleEmail: (email) => {
        changeEmail(email);
      },
      handlePassword: (password) => {
        changePassword(password);
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

  if (userProfile !== null && nameDatabase !== "") {
    Firebase.database().ref(`/${userProfile.uid}/User`).set({
      id: userProfile.uid,
      email: userProfile.email,
      name: nameDatabase,
    });
  }
  //Poprawic wielkość ikonek
  return (
    <mainContext.Provider value={mainC}>
      <NavigationContainer>
        {userLogged == false ? (
          <AppStack.Navigator headerMode={"none"}>
            <AppStack.Screen name="Menu" component={MenuScreen} />
            <AppStack.Screen name="Login" component={LoginScreen} />
            <AppStack.Screen name="Signup" component={SignUpScreen} />
          </AppStack.Navigator>
        ) : (
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: "#F39B36",
              activeBackgroundColor: "black",
              inactiveBackgroundColor: "black",
              inactiveTintColor: "#E1E1E1",
            }}
            backBehavior={"initialRoute"}
          >
            <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              color="white"
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                  <Foundation name="home" color={color} size={size} />
                ),
              }}
            />

            <Tab.Screen
              name="Search"
              component={SearchStackScreen}
              options={{
                tabBarLabel: "Search",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="search" color={color} size={size} />
                ),
              }}
            />

            <Tab.Screen
              name="Collections"
              component={CollectionStackScreen}
              options={{
                tabBarLabel: "Collections",
                tabBarIcon: ({ color }) => (
                  <Ionicons name="ios-grid" color={color} size={28} />
                ),
              }}
            />

            <Tab.Screen
              name="MyList"
              component={MyListStackScreen}
              options={{
                tabBarLabel: "My List",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="list-ul" color={color} size={size} />
                ),
              }}
            />

            <Tab.Screen
              name="Profile"
              component={ProfileStackScreen}
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color }) => (
                  <Ionicons name="md-people" color={color} size={32} />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </mainContext.Provider>
  );
}
