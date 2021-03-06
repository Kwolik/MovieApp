import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Firebase from "../../Firebase";
import SeriesBase from "./SeriesBase";

export default function SeriesBaseList(props) {
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

  const [popularSeries, SetPopularSeries] = React.useState([]);
  const [data, SetData] = React.useState([]);

  React.useEffect(() => {
    Firebase.database()
      .ref(`/${idUser}/Favorites/Series`)
      .on("value", (snapshot) => {
        SetData(snapshot.val());
      });
  }, []);

  React.useEffect(() => {
    const tab = [];
    Firebase.database()
      .ref(`/${idUser}/Favorites/Series`)
      .on("child_added", (snapshot) => {
        tab.push(snapshot.val());
      });

    SetPopularSeries(tab);

    return function cleanup() {
      tab.length = 0;
    };
  }, [data]);

  const popularSeriesList = popularSeries.reverse().map((movie, index) => (
    <SeriesBase
      key={index}
      id={movie.movie}
      title={movie.title}
      year={movie.year ? movie.year : "20??"}
      // imdbid={movie.imdbID}
      type={"TV Series"}
      poster={
        movie.poster ? `https://image.tmdb.org/t/p/w342/${movie.poster}` : null
      }
      navigation={props.navigation}
    />
  ));

  return (
    <View style={styles.container}>
      {popularSeriesList[0] ? (
        <View style={styles.info}>
          <Text style={styles.text}>Favorite TV Series</Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("Favorites", {
                value: 1,
              })
            }
          >
            <Text style={styles.more}>See more</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text></Text>
      )}
      <ScrollView horizontal={true}>{popularSeriesList}</ScrollView>
    </View>
  );
}
