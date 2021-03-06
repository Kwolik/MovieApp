import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { RadioButton, Searchbar } from "react-native-paper";
import MovieListSearch from "../component/MovieListSearch";
import ActorListSearch from "../component/ActorListSearch";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import photo from "../assets/back.png";

export default function SearchScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginTop: 40,
    },
    menu: {
      flex: 1,
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
    },
    icon: {
      margin: 2,
      fontSize: 24,
      marginTop: 5,
    },
    icon2: {
      margin: 2,
      marginTop: 4,
      fontSize: 28,
      alignItems: "center",
    },
    radioButton: {
      marginTop: 2,
      justifyContent: "center",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    option: {
      flexDirection: "row",
      padding: 2,
      margin: 4,
      height: 38,
    },
    scroll: {
      marginBottom: 100,
    },
    result: {
      color: "#F39B36",
      fontSize: 24,
      marginTop: 20,
    },
  });

  const [value, SetValue] = React.useState("Movie");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [movies, SetMovies] = React.useState([]);

  const url = {
    linkMovie: `https://api.themoviedb.org/3/search/movie?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
    linkSeries: `https://api.themoviedb.org/3/search/tv?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1&query=${searchQuery}&include_adult=false`,
    linkCollection: `https://api.themoviedb.org/3/search/collection?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&query=${searchQuery}&page=1`,
    linkActor: `https://api.themoviedb.org/3/search/person?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
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

    if (value === "Actor") {
      const response = await fetch(url.linkActor);
      const responseJson = await response.json();

      if (responseJson.results) {
        SetMovies(responseJson.results);
      }
    }
  };

  const movieList = movies.map((movie, index) => (
    <MovieListSearch
      key={index}
      id={movie.id}
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
      poster={
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
          : null
      }
      screen={2}
      navigation={navigation}
    />
  ));

  const actorList = movies.map((people, index) => (
    <ActorListSearch
      key={index}
      id={people.id}
      name={people.name}
      type={people.known_for_department}
      // imdbid={people.imdbID}
      poster={
        people.profile_path
          ? `https://image.tmdb.org/t/p/w342/${people.profile_path}`
          : null
      }
      know={people.known_for}
      navigation={navigation}
    />
  ));

  const onChangeSearch = (query) => {
    getMovieRequest();
    setSearchQuery(query);
  };

  return (
    <ImageBackground source={photo} style={styles.menu}>
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
                SetMovies([]);
              }}
            >
              <MaterialCommunityIcons
                name="movie-open"
                style={styles.icon}
                color={value === "Movie" ? "#F39B36" : "#E1E1E1"}
              />
              <Text
                style={{
                  color: value === "Movie" ? "#F39B36" : "#E1E1E1",
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
                SetMovies([]);
              }}
            >
              <Ionicons
                name="ios-tv"
                style={styles.icon2}
                color={value === "TV Series" ? "#F39B36" : "#E1E1E1"}
              />
              <Text
                style={{
                  color: value === "TV Series" ? "#F39B36" : "#E1E1E1",
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
                SetMovies([]);
              }}
            >
              <MaterialIcons
                name="collections"
                style={styles.icon}
                color={value === "Collection" ? "#F39B36" : "#E1E1E1"}
              />
              <Text
                style={{
                  color: value === "Collection" ? "#F39B36" : "#E1E1E1",
                  textAlignVertical: "center",
                }}
              >
                Collection
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                SetValue("Actor");
                setSearchQuery("");
                SetMovies([]);
              }}
            >
              <Ionicons
                name="ios-people"
                style={styles.icon2}
                color={value === "Actor" ? "#F39B36" : "#E1E1E1"}
              />
              <Text
                style={{
                  color: value === "Actor" ? "#F39B36" : "#E1E1E1",
                  textAlignVertical: "center",
                }}
              >
                People
              </Text>
            </TouchableOpacity>
          </View>
        </RadioButton.Group>
        <ScrollView style={styles.scroll}>
          {searchQuery && movies.length !== 0 ? (
            value === "Actor" ? (
              actorList
            ) : (
              movieList
            )
          ) : (
            <Text style={styles.result}>No results</Text>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
