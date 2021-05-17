import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import nophoto from "../assets/nophoto.png";

export default function PeopleList(props) {
  const styles = StyleSheet.create({
    menu: {
      margin: 10,
    },
    poster: {
      width: 120,
      height: 120,
      borderRadius: 60,
    },
    bottom: {
      width: 120,
      justifyContent: "space-between",
      marginTop: 2,
      textAlign: "center",
    },
    name: {
      color: "#E1E1E1",
      width: 120,
      textAlign: "center",
      marginTop: 5,
    },
    title: {
      color: "#B2B2B2",
      width: 120,
      textAlign: "center",
      fontSize: 12,
      marginTop: 5,
    },
  });
  // console.log(props.poster);

  return (
    <View style={styles.menu}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("HomePeopleDetails", { id: props.id })
        }
      >
        {props.poster ? (
          <Image
            style={styles.poster}
            source={{ uri: props.poster }}
            alt="poster"
          />
        ) : (
          <Image style={styles.poster} source={nophoto} alt="poster" />
        )}
        <View style={styles.bottom}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.title}>
            {props.title && props.title.length > 16
              ? props.title.substring(0, 16) + "..."
              : props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
