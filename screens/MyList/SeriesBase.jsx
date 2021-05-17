import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

export default function SeriesBase(props) {
  const styles = StyleSheet.create({
    menu: {
      margin: 10,
    },
    poster: {
      width: 160,
      height: 256,
      borderRadius: 10,
    },
    bottom: {
      width: 160,
      justifyContent: "space-between",
      marginTop: 2,
    },
    title: {
      color: "#E1E1E1",
      marginRight: 2,
      width: 160,
      fontWeight: "bold",
    },
    bot: {
      flexDirection: "row",
    },
    type: {
      color: "#B2B2B2",
      width: 60,
      fontSize: 12,
    },
    year: {
      color: "#B2B2B2",
      width: 50,
      fontSize: 12,
    },
  });

  return (
    <View style={styles.menu}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("MyListSeriesDetails", {
            id: props.id,
            screen: 3,
          })
        }
      >
        <Image
          style={styles.poster}
          source={{ uri: props.poster }}
          alt="poster"
        />
        <View style={styles.bottom}>
          <Text style={styles.title}>
            {props.title && props.title.length > 21
              ? props.title.substring(0, 18) + "..."
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
