import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./MyList.styles";
import Firebase from "../../../Firebase.js";
import OneBase from "../OneBase";

export default function MyList(props) {
  const [popularFilms, SetPopularFilms] = React.useState([]);
  const [dataMovie, SetDataMovie] = React.useState([]);

  React.useEffect(() => {
    Firebase.database()
      .ref(`/${idUser}/${props.list}/${props.type}`)
      .on("value", (snapshot) => {
        SetDataMovie(snapshot.val());
      });
  }, []);

  React.useEffect(() => {
    const tab = [];
    Firebase.database()
      .ref(`/${idUser}/${props.list}/${props.type}`)
      .on("child_added", (snapshot) => {
        tab.push(snapshot.val());
      });

    SetPopularFilms(tab);
    return function cleanup() {
      tab.length = 0;
    };
  }, [dataMovie]);

  const popularFilmsList = popularFilms.reverse().map((movie, index) => (
    <OneBase
      key={index}
      id={movie.movie}
      title={movie.title}
      year={movie.year ? movie.year : "20??"}
      // imdbid={movie.imdbID}
      type={props.type == "Series" ? "TV Series" : "Movie"}
      poster={
        movie.poster ? `https://image.tmdb.org/t/p/w342/${movie.poster}` : null
      }
      navigation={props.navigation}
    />
  ));

  return (
    <View style={styles.container}>
      {popularFilmsList[0] ? (
        <View style={styles.info}>
          <Text style={styles.text}>{props.text}</Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("CategoryList", {
                value: props.value,
                list: props.list,
              })
            }
          >
            <Text style={styles.more}>See more</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text></Text>
      )}
      <ScrollView horizontal={true}>{popularFilmsList}</ScrollView>
    </View>
  );
}
