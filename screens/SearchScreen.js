import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RadioButton, Searchbar } from "react-native-paper";
import MovieListSearch from "../components/MovieListSearch";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function SearchScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "center",
    },
    search: {
      width: "90%",
      borderWidth: 2,
      borderColor: "white",
      backgroundColor: "white",
      borderRadius: 10,
      height: 50,
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 50,
    },
    icon: {
      margin: 4,
      fontSize: 26,
    },
    icon2: {
      margin: 4,
      fontSize: 28,
    },
    radioButton: {
      margin: 5,
      flexDirection: "row",
    },
    option: {
      flexDirection: "row",
      padding: 2,
      margin: 6,
      height: 38,
    },
  });

  const [value, SetValue] = React.useState("Movie");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [movies, SetMovies] = React.useState([]);

  const url = {
    linkMovie: `https://api.themoviedb.org/3/search/movie?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
    linkSeries: `https://api.themoviedb.org/3/search/tv?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1&query=${searchQuery}&include_adult=false`,
    linkCollection: `https://api.themoviedb.org/3/search/collection?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&query=${searchQuery}&page=1`,
  };

  const getMovieRequest = async () => {
    if (value === "Movie") {
      const response = await fetch(url.linkMovie);
      const responseJson = await response.json();

      if (responseJson.results) {
        SetMovies(responseJson.results);
      }
    }

    if (value === "TV Series") {
      const response = await fetch(url.linkSeries);
      const responseJson = await response.json();

      if (responseJson.results) {
        SetMovies(responseJson.results);
      }
    }

    if (value === "Collection") {
      const response = await fetch(url.linkCollection);
      const responseJson = await response.json();

      if (responseJson.results) {
        SetMovies(responseJson.results);
      }
    }
  };

  //Dodac potem aktorow i zmienic przezroczystosc bialego tekstu jesli bedzie trzeba
  // Jak starczy czasu dodac zeby ladowalo sie wiecej wynikow
  const movieList = movies.map((movie, index) => (
    <MovieListSearch
      key={index}
      title={value === "Movie" ? movie.title : movie.name}
      year={
        value === "Movie"
          ? movie.release_date
            ? movie.release_date.substring(0, 4)
            : "20??"
          : movie.first_air_date
          ? movie.first_air_date.substring(0, 4)
          : value === "Collection"
          ? ""
          : "20??"
      }
      // imdbid={movie.imdbID}
      type={value}
      plot={movie.overview}
      poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
    />
  ));

  const onChangeSearch = (query) => {
    getMovieRequest();
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.search}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <RadioButton.Group
        onValueChange={(newValue) => SetValue(newValue)}
        value={value}
      >
        <View style={styles.radioButton}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              SetValue("Movie");
              setSearchQuery("");
            }}
          >
            <MaterialCommunityIcons
              name="movie-open"
              style={styles.icon}
              color={value === "Movie" ? "red" : "white"}
            />
            <Text
              style={{
                color: value === "Movie" ? "red" : "white",
                textAlignVertical: "center",
              }}
            >
              Movie
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              SetValue("TV Series");
              setSearchQuery("");
            }}
          >
            <Ionicons
              name="ios-tv"
              style={styles.icon2}
              color={value === "TV Series" ? "red" : "white"}
            />
            <Text
              style={{
                color: value === "TV Series" ? "red" : "white",
                textAlignVertical: "center",
              }}
            >
              TV Series
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              SetValue("Collection");
              setSearchQuery("");
            }}
          >
            <MaterialIcons
              name="collections"
              style={styles.icon}
              color={value === "Collection" ? "red" : "white"}
            />
            <Text
              style={{
                color: value === "Collection" ? "red" : "white",
                textAlignVertical: "center",
              }}
            >
              Collecion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              SetValue("actor");
              setSearchQuery("");
            }}
          >
            <Ionicons
              name="ios-people"
              style={styles.icon2}
              color={value === "actor" ? "red" : "white"}
            />
            <Text
              style={{
                color: value === "actor" ? "red" : "white",
                textAlignVertical: "center",
              }}
            >
              Actors
            </Text>
          </TouchableOpacity>
        </View>
      </RadioButton.Group>
      <ScrollView>{searchQuery ? movieList : <Text></Text>}</ScrollView>
    </View>
  );
}
