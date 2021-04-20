import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import MovieList from "../components/MovieList";
import Potter from "./collections/Potter";
import Jones from "./collections/Jones";
import Rings from "./collections/Rings";
import Avengers from "./collections/Avengers";
import Pirates from "./collections/Pirates";
import Wick from "./collections/Wick";
import Runner from "./collections/Runner";
import Troops from "./collections/Troops";

export default function CollectionsScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "black",
    },
    body: {
      marginTop: 40,
    },
    name: {
      fontSize: 20,
      color: "white",
      fontWeight: "bold",
      marginTop: 10,
      marginLeft: 20,
    },
  });

  const [starWars, SetStarWars] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      SetStarWars(responseJson.Search);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const moviesList = starWars.map((movie, index) => (
    <MovieList
      key={index}
      title={movie.Title}
      year={movie.Year}
      imdbid={movie.imdbID}
      type={movie.Type}
      poster={movie.Poster}
    />
  ));

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.name}>Star Wars</Text>
          <ScrollView horizontal={true}>{moviesList}</ScrollView>
          <Text style={styles.name}>Harry Potter</Text>
          <Potter />
          <Text style={styles.name}>The Lord of the Rings and Hobbit</Text>
          <Rings />
          <Text style={styles.name}>Indiana Jones</Text>
          <Jones />
          <Text style={styles.name}>Avengers</Text>
          <Avengers />
          <Text style={styles.name}>Pirates of the Caribbean</Text>
          <Pirates />
          <Text style={styles.name}>John Wick</Text>
          <Wick />
          <Text style={styles.name}>The Maze Runner</Text>
          <Runner />
          <Text style={styles.name}>The Troops</Text>
          <Troops />
        </View>
      </View>
    </ScrollView>
  );
}
