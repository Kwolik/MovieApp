import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import Firebase from "../../Firebase";
import OneMovie from "./OneMovie";
import photo from "../../assets/back.png";

export default function Favorites({ route, navigation }) {
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
    },
    menu: {
      flex: 1,
    },
    text: {
      color: "#F39B36",
      fontSize: 20,
      fontWeight: "bold",
      margin: 10,
    },
  });

  const { currentUser } = Firebase.auth();
  const [popularFilms, SetPopularFilms] = React.useState([]);
  const [popularSeries, SetPopularSeries] = React.useState([]);
  const [data, SetData] = React.useState([]);

  React.useEffect(() => {
    Firebase.database()
      .ref(`/${currentUser.uid}`)
      .on("value", (snapshot) => {
        SetData(snapshot.val());
      });
  }, []);

  React.useEffect(() => {
    const tab = [];
    const tab2 = [];
    Firebase.database()
      .ref(`/${currentUser.uid}/Favorites/Movie`)
      .on("child_added", (snapshot) => {
        tab.push(snapshot.val());
      });

    SetPopularFilms(tab);

    Firebase.database()
      .ref(`/${currentUser.uid}/Favorites/Series`)
      .on("child_added", (snapshot) => {
        tab2.push(snapshot.val());
      });

    SetPopularSeries(tab2);
  }, [currentUser.uid ? currentUser.uid : "", data]);

  const movieList = popularFilms.map((movie, index) => (
    <OneMovie
      key={index}
      id={movie.movie}
      title={movie.title}
      year={movie.year ? movie.year : "20??"}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={`https://image.tmdb.org/t/p/w342/${movie.poster}`}
      navigation={navigation}
      value={0}
    />
  ));

  const seriesList = popularSeries.map((movie, index) => (
    <OneMovie
      key={index}
      id={movie.movie}
      title={movie.title}
      year={movie.year ? movie.year : "20??"}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={`https://image.tmdb.org/t/p/w342/${movie.poster}`}
      navigation={navigation}
    />
  ));

  if (popularFilms.length !== 0 && popularSeries.length !== 0) {
    return (
      <ImageBackground source={photo} style={styles.menu}>
        <View style={styles.container}>
          {route.params.value === 0 && (
            <ScrollView>
              <Text style={styles.text}>Movies</Text>
              <View>{movieList}</View>
            </ScrollView>
          )}
          {route.params.value === 1 && (
            <ScrollView>
              <Text style={styles.text}>Tv Series</Text>
              <View>{seriesList}</View>
            </ScrollView>
          )}
          {route.params.value === 2 && (
            <ScrollView>
              <Text style={styles.text}>Movies</Text>
              <View>{movieList}</View>
              <Text style={styles.text}>Tv Series</Text>
              <View>{seriesList}</View>
            </ScrollView>
          )}
        </View>
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
