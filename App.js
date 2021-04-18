import React, { useState, useMemo, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

import mainContext from "./context/mainContext";
import Firebase from "./Firebase";
import MenuScreen from "./screens/MenuScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import CollectionsScreen from "./screens/CollectionsScreen";
import MyListScreen from "./screens/MyListScreen";
import ProfileScreen from "./screens/ProfileScreen";

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      .catch((error) => alert(error));
  };

  const doSignup = async (email, password) => {
    setIsLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
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
        {userLogged == false ? (
          <AppStack.Navigator>
            <AppStack.Screen name="Menu" component={MenuScreen} />
            <AppStack.Screen name="Login" component={LoginScreen} />
            <AppStack.Screen name="Signup" component={SignUpScreen} />
          </AppStack.Navigator>
        ) : (
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: "#ff0033",
              activeBackgroundColor: "black",
              inactiveBackgroundColor: "black",
              inactiveTintColor: "white",
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
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
              component={SearchScreen}
              options={{
                tabBarLabel: "Search",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="search" color={color} size={size} />
                ),
              }}
            />

            <Tab.Screen
              name="Collections"
              component={CollectionsScreen}
              options={{
                tabBarLabel: "Collections",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="ios-grid" color={color} size={size} />
                ),
              }}
            />

            <Tab.Screen
              name="MyList"
              component={MyListScreen}
              options={{
                tabBarLabel: "My List",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="list-ul" color={color} size={size} />
                ),
              }}
            />

            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="md-people" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </mainContext.Provider>
  );
}
