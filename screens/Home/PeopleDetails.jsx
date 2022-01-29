import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import MovieList from "../../component/MovieList";
import photo from "../../assets/back.png";
import nophoto from "../../assets/nophoto.png";

export default function PeopleDetails({ route, navigation }) {
  const styles = StyleSheet.create({
    menu: {
      flex: 1,
    },
    mainInfo: {
      flexDirection: "row",
    },
    poster: {
      width: 150,
      height: 150,
      marginLeft: 10,
      marginTop: 20,
      borderRadius: 75,
    },
    description: {
      marginLeft: 10,
      marginTop: 20,
      marginRight: 170,
    },
    name: {
      fontSize: 20,
      color: "#E1E1E1",
    },
    birthday: {
      marginTop: 5,
      fontSize: 16,
      color: "#B2B2B2",
    },
    button: {
      width: 80,
      height: 35,
      borderRadius: 40,
      margin: 20,
      marginBottom: 10,
      backgroundColor: "#9A9A9B",
      alignItems: "center",
      justifyContent: "center",
    },
    textimdb: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#16161A",
    },
    biography: {
      margin: 10,
    },
    readMore: {
      color: "#F39B36",
      fontSize: 18,
      textAlign: "right",
      marginRight: 10,
    },
    text: {
      color: "#E1E1E1",
      fontSize: 18,
    },
    knowFor: {
      fontSize: 20,
      color: "#F39B36",
      marginLeft: 10,
      marginTop: 10,
      fontWeight: "bold",
    },
  });

  const [popularPerson, SetPopularPerson] = React.useState([]);
  const [popularFilms, SetPopularFilms] = React.useState([]);
  const [over, SetOver] = React.useState(0);
  var currentYear = new Date().getFullYear();
  const pathImage = `https://image.tmdb.org/t/p/w342/${popularPerson.profile_path}`;

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/person/${route.params.id}?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      SetPopularPerson(responseJson);
    }
  };

  const getMovieRequestMovies = async () => {
    const url = `https://api.themoviedb.org/3/person/${route.params.id}/movie_credits?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.cast) {
      SetPopularFilms(responseJson.cast);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
    getMovieRequestMovies();
  }, []);

  const popularFilmsList = popularFilms.map((movie, index) => (
    <MovieList
      key={index}
      id={movie.id}
      title={movie.title}
      year={movie.release_date}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
          : null
      }
      navigation={navigation}
      screen={route.params.number ? route.params.number : 0}
    />
  ));

  if (popularPerson.name) {
    return (
      <ImageBackground source={photo} style={styles.menu}>
        <ScrollView style={styles.menu}>
          <View style={styles.mainInfo}>
            <View>
              {popularPerson.profile_path ? (
                <Image
                  style={styles.poster}
                  source={{ uri: pathImage }}
                  alt="poster"
                />
              ) : (
                <Image style={styles.poster} source={nophoto} alt="poster" />
              )}
            </View>
            <View style={styles.description}>
              <Text style={styles.name}>{popularPerson.name}</Text>
              <Text style={styles.birthday}>
                {popularPerson.known_for_department}
              </Text>
              {popularPerson.birthday && (
                <Text style={styles.birthday}>
                  {popularPerson.birthday && popularPerson.deathday
                    ? popularPerson.deathday.substring(0, 4) -
                      popularPerson.birthday.substring(0, 4) +
                      " "
                    : currentYear -
                      popularPerson.birthday.substring(0, 4) +
                      " "}
                  years
                </Text>
              )}
              {popularPerson.imdb_id ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.imdb.com/name/" + popularPerson.imdb_id
                    )
                  }
                >
                  <Text style={styles.textimdb}>IMDB</Text>
                </TouchableOpacity>
              ) : (
                <Text></Text>
              )}
            </View>
          </View>
          {popularPerson.biography &&
          popularPerson.biography.length > 182 &&
          over === 0 ? (
            <View style={styles.biography}>
              <Text style={styles.text}>
                {popularPerson.biography.substring(0, 180) + "..."}
              </Text>
              <TouchableOpacity onPress={() => SetOver(1)}>
                <Text style={styles.readMore}>Read more</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.biography}>
              <Text style={styles.text}>{popularPerson.biography}</Text>
            </View>
          )}
          {popularFilms.length !== 0 && (
            <View>
              <Text style={styles.knowFor}>Known for</Text>
              <ScrollView horizontal={true}>{popularFilmsList}</ScrollView>
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    );
  } else {
    return (
      <View style={styles.menu}>
        <ImageBackground source={photo} style={styles.menu}>
          <ActivityIndicator style={{ flex: 1 }} color={"#F39B36"} size={100} />
        </ImageBackground>
      </View>
    );
  }
}
