import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import nophoto from "../assets/nophoto.png";

export default function PeopleList(props) {
  const styles = StyleSheet.create({
    menu: {
      margin: 10,
      width: 160,
    },
    images: {
      height: 260,
    },
    profile: {
      width: 100,
      height: 140,
      borderRadius: 20,
      position: "absolute",
      bottom: 0,
      right: 0,
    },
    poster: {
      width: 128,
      height: 205,
      borderRadius: 10,
    },
    bottom: {
      marginTop: 5,
    },
    name: {
      color: "#E1E1E1",
      fontWeight: "bold",
    },
    title: {
      color: "#B2B2B2",
      fontSize: 12.5,
    },
  });

  return (
    <View style={styles.menu}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("HomePeopleDetails", { id: props.id })
        }
      >
        <View style={styles.images}>
          {props.poster ? (
            <Image
              style={styles.poster}
              source={{ uri: props.poster }}
              alt="poster"
            />
          ) : (
            <Image style={styles.poster} source={nophoto} alt="poster" />
          )}
          {props.profile ? (
            <Image
              style={styles.profile}
              source={{ uri: props.profile }}
              alt="poster"
            />
          ) : (
            <Image style={styles.poster} source={nophoto} alt="poster" />
          )}
        </View>
        <View style={styles.bottom}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.title}>
            {props.title && props.title.length > 24
              ? props.title.substring(0, 22) + "..."
              : props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
