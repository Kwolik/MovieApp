import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { ALLCOLLECTIONS } from "./collections/CollectionMoviesList";
import { ALLCOLLECTIONSERIES } from "./collections/CollectionSeriesList";
import CollectionMovies from "./collections/CollectionMovies";
import CollectionSeries from "./collections/CollectionSeries";
import photo from "../assets/back.png";

export default function CollectionsScreen({ navigation }) {
  const styles = StyleSheet.create({
    menu: {
      flex: 1,
    },
    border: {
      margin: 10,
      flexDirection: "row",
    },
    name: {
      fontSize: 20,
      color: "#F39B36",
      fontWeight: "bold",
      marginTop: 10,
      marginLeft: 10,
    },
    movies: {
      margin: 5,
      width: "48%", //zmienić pozniej
    },
    series: {
      margin: 5,
      width: "48%", //zmienić pozniej
    },
  });

  const [load, SetLoad] = React.useState(true);
  const [visibility, SetVisibility] = React.useState("none");

  function componentDidMount() {
    setTimeout(() => {
      SetLoad(false);
      SetVisibility("flex");
    }, 1100);
  }

  componentDidMount();

  const collectionList = ALLCOLLECTIONS.map((movie, index) => (
    <View key={index}>
      <CollectionMovies id={movie.id} />
    </View>
  ));

  const seriesList = ALLCOLLECTIONSERIES.map((series, index) => (
    <View key={index}>
      <CollectionSeries id={series.id} />
    </View>
  ));

  return (
    <ImageBackground source={photo} style={styles.menu}>
      <View style={{ display: visibility }}>
        <ScrollView>
          <View style={styles.border}>
            <View style={styles.movies}>
              <Text style={styles.name}>Filmy</Text>
              {collectionList}
            </View>
            <View style={styles.series}>
              <Text style={styles.name}>Seriale</Text>
              {seriesList}
            </View>
          </View>
        </ScrollView>
      </View>
      {load && (
        <ActivityIndicator
          style={{
            position: "absolute",
            left: "50%",
            right: "50%",
            top: "50%",
            bottom: "50%",
          }}
          color={"#F39B36"}
          size={100}
        />
      )}
    </ImageBackground>
  );
}
