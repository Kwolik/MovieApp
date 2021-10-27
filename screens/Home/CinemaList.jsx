import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import noposter from "../../assets/noposter.png";

export default function CinemaList(props) {
  const styles = StyleSheet.create({
    poster: {
      width: props.wtd,
      height: 242,
    },
    bot: {
      position: "absolute",
      bottom: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#F39B36",
      marginLeft: 10,
    },
    info: {
      flexDirection: "row",
      marginLeft: 10,
    },
    cinema: {
      color: "#F39B36",
      fontWeight: "bold",
      marginRight: 20,
    },
    year: {
      color: "#F39B36",
      fontWeight: "bold",
      marginRight: 20,
    },
    rate: {
      color: "#F39B36",
      fontWeight: "bold",
    },
  });

  return (
    <View>
      {props.poster ? (
        <Image
          style={styles.poster}
          source={{ uri: props.poster }}
          alt="poster"
        />
      ) : (
        <Image style={styles.poster} source={noposter} alt="poster" />
      )}
      <View style={styles.bot}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.info}>
          <Text style={styles.cinema}>In Theaters</Text>
          <Text style={styles.year}>{props.year}</Text>
          <Text style={styles.rate}>{props.rate !== 0 && props.rate}</Text>
        </View>
      </View>
    </View>
  );
}
