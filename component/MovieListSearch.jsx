import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import nophoto from "../assets/nophoto.png";

export default function MovieListSearch(props) {
  const styles = StyleSheet.create({
    menu: {
      margin: 10,
    },
    column: {
      flexDirection: "row",
    },
    poster: {
      width: 160,
      height: 256,
      borderRadius: 10,
    },
    bottom: {
      width: 160,
      marginLeft: 5,
    },
    title: {
      color: "white",
      margin: 2,
      width: 160,
      fontSize: 16,
      fontWeight: "bold",
    },
    bot: {
      marginTop: 2,
      flexDirection: "column",
    },
    type: {
      color: "white",
    },
    year: {
      color: "white",
    },
    plot: {
      marginLeft: 2,
      marginTop: 10,
      color: "white",
    },
  });
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.column}
        onPress={() =>
          props.type === "Movie"
            ? props.navigation.navigate("SearchMovieDetails", {
                id: props.id,
                screen: props.screen,
              })
            : props.type === "TV Series"
            ? props.navigation.navigate("SearchSeriesDetails", {
                id: props.id,
                screen: props.screen,
              })
            : props.navigation.navigate("SearchCollectionDetails", {
                id: props.id,
              })
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
          <Text style={styles.title}>
            {props.title && props.title.length > 42
              ? props.title.substring(0, 42) + "..."
              : props.title}
          </Text>
          <View style={styles.bot}>
            <Text style={styles.type}> {props.type} </Text>
            <Text style={styles.year}> {props.year} </Text>
            <Text style={styles.plot}>
              {props.plot &&
                props.plot.length > 168 &&
                props.plot.substring(0, 168) + "..."}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
