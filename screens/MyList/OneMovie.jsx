import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import noposter from "../../assets/noposter.png";

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
      marginLeft: 10,
      justifyContent: "center",
      marginRight: 60,
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
                  screen: 3,
                })
              : props.navigation.navigate("MyListSeriesDetails", {
                  id: props.id,
                  screen: 3,
                });
          }
        }}
      >
        {props.poster ? (
          <Image
            style={styles.poster}
            source={{ uri: props.poster }}
            alt="poster"
          />
        ) : (
          <Image style={styles.poster} source={noposter} alt="poster" />
        )}
        <View style={styles.bottom}>
          <Text style={styles.title}>
            {/* {props.title && props.title.length > 36
              ? props.title.substring(0, 34) + "..."
              : props.title} */}
            {props.title}
          </Text>
          <Text style={styles.year}>{props.year.substring(0, 4)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
