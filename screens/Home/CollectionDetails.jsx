import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import MovieList from "../../components/MovieList";
import photo from "../../assets/back.png";

export default function CollectionDetails({ route, navigation }) {
  const styles = StyleSheet.create({
    menu: {
      flex: 1,
    },
    centerImage: {
      alignItems: "center",
    },
    imageBack: {
      width: 425,
      height: 239,
    },
    poster: {
      width: 160,
      height: 256,
      position: "absolute",
      marginLeft: 10,
      marginTop: 128,
    },
    description: {
      marginLeft: 10,
      marginTop: 20,
    },
    title: {
      marginLeft: 182,
      margin: 10,
      color: "#E1E1E1",
      fontSize: 20,
      height: 126,
    },
    biography: {
      margin: 10,
    },
    text: {
      color: "#E1E1E1",
      fontSize: 18,
    },
    knowFor: {
      marginLeft: 10,
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
    },
  });

  const [popularCollection, SetPopularCollection] = React.useState([]);
  const [listCollection, SetListCollection] = React.useState([]);
  const pathImageBack = `https://image.tmdb.org/t/p/w1066_and_h600_bestv2/${popularCollection.backdrop_path}`;
  const pathImage = `https://image.tmdb.org/t/p/w342/${popularCollection.poster_path}`;

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/collection/${route.params.id}?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      SetPopularCollection(responseJson);
      SetListCollection(responseJson.parts);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const popularFilmsList = listCollection.map((movie, index) => (
    <MovieList
      key={index}
      id={movie.id}
      title={movie.title}
      year={movie.release_date}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
      navigation={navigation}
      screen={2}
    />
  ));

  if (popularCollection.name && popularFilmsList.length !== 0) {
    return (
      <ImageBackground source={photo} style={styles.menu}>
        <ScrollView style={styles.menu}>
          <View style={styles.menu}>
            <View>
              <View style={styles.centerImage}>
                <Image
                  style={styles.imageBack}
                  source={{ uri: pathImageBack }}
                  alt="background"
                  //blurRadius={0.5}
                />
              </View>
              <Image
                style={styles.poster}
                source={{ uri: pathImage }}
                alt="poster"
              />
            </View>
            <Text style={styles.title}>{popularCollection.name}</Text>
            {popularCollection.overview ? (
              <View>
                <ScrollView style={styles.biography}>
                  <Text style={styles.text}>{popularCollection.overview}</Text>
                </ScrollView>
              </View>
            ) : (
              <Text></Text>
            )}
            <View>
              <ScrollView horizontal={true}>{popularFilmsList}</ScrollView>
            </View>
          </View>
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
