import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./OneList.styles";
import noposter from "../../../assets/noposter.png";

export default function OneList(props) {
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
