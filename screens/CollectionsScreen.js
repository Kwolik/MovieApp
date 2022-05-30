import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import styles from "./CollectionsScreen.styles";
import { ALLCOLLECTIONS } from "./Collections/CollectionMoviesList";
import { ALLCOLLECTIONSERIES } from "./Collections/CollectionSeriesList";
import CollectionMovies from "./Collections/CollectionMovies";
import CollectionSeries from "./Collections/CollectionSeries";
import photo from "../assets/back.png";

export default function CollectionsScreen({ navigation }) {
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
      {load && (
        <ActivityIndicator style={styles.load} color={"#F39B36"} size={100} />
      )}
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
    </ImageBackground>
  );
}
