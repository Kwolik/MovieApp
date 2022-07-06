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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
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
      <View style={styles.border}>
        <View style={styles.info}>
          <MaterialCommunityIcons name="movie-roll" style={styles.icon} />
          <Text style={styles.name}>Movie</Text>
        </View>
        <View style={styles.info}>
          <Feather name="tv" style={styles.icon} />
          <Text style={styles.name}>TV Series</Text>
        </View>
      </View>
      {load && (
        <ActivityIndicator style={styles.load} color={"#F39B36"} size={100} />
      )}
      <View style={{ display: visibility }}>
        <View style={styles.border}>
          <ScrollView>
            <View style={styles.column}>{collectionList}</View>
          </ScrollView>
          <ScrollView>
            <View style={styles.column}>{seriesList}</View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}
