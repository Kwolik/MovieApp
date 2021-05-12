import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

export default function OneMovie(props) {
  const styles = StyleSheet.create({
    menu: {
      margin: 5,
    },
    column: {
      flexDirection: "row",
    },
    poster: {
      width: 60, //40   160
      height: 96, //64   256
      borderRadius: 10,
    },
    bottom: {
      marginLeft: 5,
      justifyContent: "center",
    },
    title: {
      color: "#E1E1E1",
      margin: 2,
      fontSize: 16,
      fontWeight: "bold",
    },
    year: {
      color: "#B2B2B2",
      margin: 2,
    },
  });
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.column}
        onPress={() => {
          {
            props.value === 0
              ? props.navigation.navigate("MyListMovieDetails", {
                  id: props.id,
                })
              : props.navigation.navigate("MyListSeriesDetails", {
                  id: props.id,
                });
          }
        }}
      >
        <Image
          style={styles.poster}
          source={{ uri: props.poster }}
          alt="poster"
        />
        <View style={styles.bottom}>
          <Text style={styles.title}>
            {props.title && props.title.length > 38
              ? props.title.substring(0, 40) + "..."
              : props.title}
          </Text>
          <Text style={styles.year}>{props.year.substring(0, 4)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
