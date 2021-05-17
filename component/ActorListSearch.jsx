import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import nophoto from "../assets/nophoto.png";

export default function ActorListSearch(props) {
  const styles = StyleSheet.create({
    menu: {
      margin: 10,
    },
    column: {
      flexDirection: "row",
    },
    poster: {
      width: 160,
      height: 160,
      borderRadius: 80,
    },
    bottom: {
      width: 160,
      marginLeft: 8,
      marginTop: 5,
    },
    title: {
      color: "#E1E1E1",
      width: 160,
      fontSize: 16,
      fontWeight: "bold",
    },
    bot: {
      marginTop: 2,
      flexDirection: "column",
    },
    type: {
      color: "#B2B2B2",
      marginBottom: 20,
    },
    know: {
      color: "#B2B2B2",
      marginBottom: 2,
    },
  });

  const actorList = props.know.map((movie, index) => (
    <Text key={index} style={styles.know}>
      {movie.title && movie.title.length > 24
        ? movie.title.substring(0, 22) + "..."
        : movie.title}
    </Text>
  ));

  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.column}
        onPress={() =>
          props.navigation.navigate("SearchPeopleDetails", {
            id: props.id,
            number: 2,
          })
        }
      >
        {props.poster ? (
          <Image
            style={styles.poster}
            source={{ uri: props.poster }}
            alt="people"
          />
        ) : (
          <Image style={styles.poster} source={nophoto} alt="people" />
        )}
        <View style={styles.bottom}>
          <Text style={styles.title}>
            {props.name && props.name.length > 42
              ? props.name.substring(0, 42) + "..."
              : props.name}
          </Text>
          <View style={styles.bot}>
            <Text style={styles.type}>{props.type}</Text>
            <Text style={styles.know}>Know for:</Text>
            {actorList}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
