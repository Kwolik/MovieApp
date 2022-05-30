import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import styles from "./CategoryList.styles";
import Firebase from "../../../Firebase";
import OneList from "../OneList";
import photo from "../../../assets/back.png";

export default function CategoryList({ route, navigation }) {
  const [popularFilms, SetPopularFilms] = React.useState([]);
  const [popularSeries, SetPopularSeries] = React.useState([]);
  const [data, SetData] = React.useState([]);

  React.useEffect(() => {
    Firebase.database()
      .ref(`/${idUser}`)
      .on("value", (snapshot) => {
        SetData(snapshot.val());
      });
  }, []);

  React.useEffect(() => {
    const tab = [];
    const tab2 = [];
    Firebase.database()
      .ref(`/${idUser}/${route.params.list}/Movie`)
      .on("child_added", (snapshot) => {
        tab.push(snapshot.val());
      });

    SetPopularFilms(tab);

    Firebase.database()
      .ref(`/${idUser}/${route.params.list}/Series`)
      .on("child_added", (snapshot) => {
        tab2.push(snapshot.val());
      });

    SetPopularSeries(tab2);
    return function cleanup() {
      tab.length = 0;
      tab2.lenth = 0;
    };
  }, [data]);

  const movieList = popularFilms.map((movie, index) => (
    <OneList
      key={index}
      id={movie.movie}
      title={movie.title}
      year={movie.year ? movie.year : "20??"}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={
        movie.poster ? `https://image.tmdb.org/t/p/w342/${movie.poster}` : null
      }
      navigation={navigation}
      value={0}
    />
  ));

  const seriesList = popularSeries.map((movie, index) => (
    <OneList
      key={index}
      id={movie.movie}
      title={movie.title}
      year={movie.year ? movie.year : "20??"}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={
        movie.poster ? `https://image.tmdb.org/t/p/w342/${movie.poster}` : null
      }
      navigation={navigation}
    />
  ));

  if (popularFilms.length !== 0 || popularSeries.length !== 0) {
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
              {popularFilms.length !== 0 ? (
                <View>{movieList}</View>
              ) : (
                <Text style={styles.result}>No result</Text>
              )}
              <Text style={styles.text}>Tv Series</Text>
              {popularSeries.length !== 0 ? (
                <View>{seriesList}</View>
              ) : (
                <Text style={styles.result}>No result</Text>
              )}
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
