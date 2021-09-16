import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import OneCollectionMovies from "./Collections/OneCollectionMovies";
import { ALLCOLLECTIONS } from "./Collections/CollectionMovies";
import OneCollectionSeries from "./Collections/OneCollectionSeries";
import { ALLCOLLECTIONSERIES } from "./Collections/CollectionSeries";
import Rings from "./Collections/Rings";
import photo from "../assets/back.png";

export default function CollectionsScreen({ navigation }) {
  const styles = StyleSheet.create({
    menu: {
      flex: 1,
    },
    name: {
      fontSize: 20,
      color: "#F39B36",
      fontWeight: "bold",
      marginTop: 10,
      marginLeft: 10,
    },
    radioButton: {
      marginTop: 32,
      marginBottom: 10,
      justifyContent: "space-between",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    option: {
      flexDirection: "row",
      height: 42,
      alignItems: "center",
      marginLeft: 40,
      marginRight: 40,
    },
    icon: {
      fontSize: 28,
      margin: 10,
    },
  });

  const [load, SetLoad] = React.useState(true);
  const [visibility, SetVisibility] = React.useState("none");
  const [value, SetValue] = React.useState("Movie");

  function componentDidMount() {
    setTimeout(() => {
      SetLoad(false);
      SetVisibility("flex");
    }, 1100);
  }

  componentDidMount();

  const collectionList = ALLCOLLECTIONS.map((movie, index) => (
    <View key={index}>
      <Text style={styles.name}>{movie.name}</Text>
      <OneCollectionMovies navigation={navigation} id={movie.id} />
    </View>
  ));

  const seriesList = ALLCOLLECTIONSERIES.map((series, index) => (
    <View key={index}>
      <Text style={styles.name}>{series.name}</Text>
      <OneCollectionSeries navigation={navigation} id={series.id} />
    </View>
  ));

  return (
    <ImageBackground source={photo} style={styles.menu}>
      <RadioButton.Group
        onValueChange={(newValue) => SetValue(newValue)}
        value={value}
      >
        <View style={styles.radioButton}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              SetValue("Movie");
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
                fontSize: 18,
              }}
            >
              Movie
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              SetValue("TV Series");
            }}
          >
            <Ionicons
              name="ios-tv"
              style={styles.icon}
              color={value === "TV Series" ? "#F39B36" : "#E1E1E1"}
            />
            <Text
              style={{
                color: value === "TV Series" ? "#F39B36" : "#E1E1E1",
                textAlignVertical: "center",
                fontSize: 18,
              }}
            >
              TV Series
            </Text>
          </TouchableOpacity>
        </View>
      </RadioButton.Group>
      <ScrollView>
        <View style={{ display: visibility }}>
          <View style={{ display: value === "Movie" ? "flex" : "none" }}>
            <Text style={styles.name}>The Lord of the Rings and Hobbit</Text>
            <Rings navigation={navigation} />
            {collectionList}
          </View>
          <View style={{ display: value === "TV Series" ? "flex" : "none" }}>
            {seriesList}
          </View>
        </View>
      </ScrollView>
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
