import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./OneBase.styles";
import noposter from "../../../assets/noposter.png";

export default function OneBase(props) {
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        onPress={() =>
          props.type == "Movie"
            ? props.navigation.navigate("MyListMovieDetails", {
                id: props.id,
                screen: 3,
              })
            : props.navigation.navigate("MyListSeriesDetails", {
                id: props.id,
                screen: 3,
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
          <Image style={styles.poster} source={noposter} alt="poster" />
        )}
        <View style={styles.bottom}>
          <Text style={styles.title}>
            {props.title && props.title.length > 20
              ? props.title.substring(0, 16) + "..."
              : props.title}
          </Text>
          <View style={styles.bot}>
            <Text style={styles.year}>
              {props.year && props.year.length > 4
                ? props.year.substring(0, 4)
                : props.year}
            </Text>
            <Text style={styles.type}> {props.type} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
