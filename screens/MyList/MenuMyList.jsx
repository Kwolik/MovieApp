import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function MenuMyList(props) {
  const styles = StyleSheet.create({
    mainBannner: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: 10,
    },
    desc: {
      flexDirection: "row",
      alignItems: "center",
      padding: 4,
    },
    text: {
      color: "#E1E1E1",
      margin: 2,
    },
    icon: {
      margin: 2,
      fontSize: 26,
      color: "#E1E1E1",
    },
    watchlist: {
      margin: 2,
      fontSize: 32,
      color: "#E1E1E1",
    },
    all: {
      margin: 2,
      fontSize: 28,
      color: "#E1E1E1",
    },
  });

  return (
    <View style={styles.mainBannner}>
      <TouchableOpacity
        style={styles.desc}
        onPress={() =>
          props.navigation.navigate("Watchlist", {
            value: 2,
          })
        }
      >
        <MaterialCommunityIcons
          name="playlist-check"
          style={styles.watchlist}
        />
        <Text style={styles.text}>Watchlist</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.desc}
        onPress={() =>
          props.navigation.navigate("Favorites", {
            value: 2,
          })
        }
      >
        <MaterialCommunityIcons name="heart-multiple" style={styles.icon} />
        <Text style={styles.text}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.desc}
        onPress={() =>
          props.navigation.navigate("WaitingList", {
            value: 2,
          })
        }
      >
        <MaterialCommunityIcons name="clock" style={styles.all} />
        <Text style={styles.text}>Waiting list</Text>
      </TouchableOpacity>
    </View>
  );
}
