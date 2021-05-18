import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Firebase from "../../Firebase";
import MovieBase from "./MovieBase";

export default function MovieBaseList(props) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      marginTop: 10,
    },
    info: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 10,
    },
    text: {
      fontSize: 20,
      color: "#F39B36",
      fontWeight: "bold",
    },
    more: {
      color: "#F39B36",
    },
  });

  const [popularFilms, SetPopularFilms] = React.useState([]);
  const [dataMovie, SetDataMovie] = React.useState([]);

  React.useEffect(() => {
    Firebase.database()
      .ref(`/${idUser}/Watchlist/Movie`)
      .on("value", (snapshot) => {
        SetDataMovie(snapshot.val());
      });
  }, []);

  React.useEffect(() => {
    const tab = [];
    Firebase.database()
      .ref(`/${idUser}/Watchlist/Movie`)
      .on("child_added", (snapshot) => {
        tab.push(snapshot.val());
      });

    SetPopularFilms(tab);
    return function cleanup() {
      tab.length = 0;
    };
  }, [dataMovie]);

  const popularFilmsList = popularFilms.reverse().map((movie, index) => (
    <MovieBase
      key={index}
      id={movie.movie}
      title={movie.title}
      year={movie.year ? movie.year : "20??"}
      // imdbid={movie.imdbID}
      type={"Movie"}
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
          <Text style={styles.text}>Watched Movies</Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("Watchlist", {
                value: 0,
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
