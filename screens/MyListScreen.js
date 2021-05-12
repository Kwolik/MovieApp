import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import MenuMyList from "./MyList/MenuMyList";
import MovieBaseList from "./MyList/MovieBaseList";
import SeriesBaseList from "./MyList/SeriesBaseList";
import MovieFavoritesList from "./MyList/MovieFavoritesList";
import SeriesFavoritesList from "./MyList/SeriesFavoritesList";
import photo from "../assets/back.png";

export default function MyListScreen({ navigation }) {
  const styles = StyleSheet.create({
    menu: {
      flex: 1,
    },
    black: {
      marginTop: 50,
      marginBottom: 25,
    },
    body: {
      marginTop: 25,
    },
  });

  const [load, SetLoad] = React.useState(true);
  const [visibility, SetVisibility] = React.useState("none");

  function componentDidMount() {
    setTimeout(() => {
      SetLoad(false);
      SetVisibility("flex");
    }, 950);
  }

  componentDidMount();

  return (
    <ImageBackground source={photo} style={styles.menu}>
      <View style={{ display: visibility }}>
        <View style={styles.body}>
          <MenuMyList navigation={navigation} />
          <ScrollView style={styles.black}>
            <MovieBaseList navigation={navigation} />
            <SeriesBaseList navigation={navigation} />
            <MovieFavoritesList navigation={navigation} />
            <SeriesFavoritesList navigation={navigation} />
          </ScrollView>
        </View>
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
