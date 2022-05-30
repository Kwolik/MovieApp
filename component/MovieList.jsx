import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import noposter from "../assets/noposter.png";

export default function MovieList(props) {
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

  function Route() {
    console.log(props.type);
    console.log(props.screen);
    console.log(props.id);

    if (props.type === "Movie" && props.screen === 0) {
      if (props.back === 1) props.navigation.goBack();
      props.navigation.navigate("HomeMovieDetails", {
        id: props.id,
        screen: props.screen,
      });
    }
    if (props.type === "Movie" && props.screen === 1) {
      if (props.back === 1) props.navigation.goBack();
      props.navigation.navigate("CollectionMovieDetails", {
        id: props.id,
        screen: props.screen,
      });
    }
    if (props.type === "Movie" && props.screen === 2) {
      if (props.back === 1) props.navigation.goBack();
      props.navigation.navigate("SearchMovieDetails", {
        id: props.id,
        screen: props.screen,
      });
    }
    if (props.type === "Movie" && props.screen === 3) {
      if (props.back === 1) props.navigation.goBack();
      props.navigation.navigate("MyListMovieDetails", {
        id: props.id,
        screen: props.screen,
      });
    }
    if (props.type === "Movie" && props.screen === 4) {
      if (props.back === 1) props.navigation.goBack();
      props.navigation.navigate("ProfileMovieDetails", {
        id: props.id,
        screen: props.screen,
      });
    }
    if (props.type === "TV Series" && props.screen === 0) {
      if (props.back === 1) props.navigation.goBack();
      props.navigation.navigate("HomeSeriesDetails", {
        id: props.id,
        screen: props.screen,
      });
    }
    if (props.type === "TV Series" && props.screen === 2) {
      if (props.back === 1) props.navigation.goBack();
      props.navigation.navigate("SearchSeriesDetails", {
        id: props.id,
        screen: props.screen,
      });
    }
    if (props.type === "TV Series" && props.screen === 3) {
      if (props.back === 1) props.navigation.goBack();
      props.navigation.navigate("MyListSeriesDetails", {
        id: props.id,
        screen: props.screen,
      });
    }
  }

  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => Route()}>
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
