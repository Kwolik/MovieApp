import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./MenuMyList.styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function MenuMyList(props) {
  return (
    <View style={styles.mainBannner}>
      <TouchableOpacity
        style={styles.desc}
        onPress={() =>
          props.navigation.navigate("CategoryList", {
            list: "Watchlist",
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
          props.navigation.navigate("CategoryList", {
            list: "Favorites",
            value: 2,
          })
        }
      >
        <MaterialCommunityIcons name="heart" style={styles.icon} />
        <Text style={styles.text}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.desc}
        onPress={() =>
          props.navigation.navigate("CategoryList", {
            list: "Waitinglist",
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
