import React from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import styles from "./MyListScreen.styles";
import MenuMyList from "./MyList/MenuMyList";
import MovieBaseList from "./MyList/MovieBaseList";
import SeriesBaseList from "./MyList/SeriesBaseList";
import MovieFavoritesList from "./MyList/MovieFavoritesList";
import SeriesFavoritesList from "./MyList/SeriesFavoritesList";
import MovieWaitingList from "./MyList/MovieWaitingList";
import SeriesWaitingList from "./MyList/SeriesWaitingList";
import photo from "../assets/back.png";

export default function MyListScreen({ navigation }) {
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
      {load && (
        <ActivityIndicator style={styles.load} color={"#F39B36"} size={100} />
      )}
      <View style={{ display: visibility }}>
        <View>
          <MenuMyList navigation={navigation} />
          <ScrollView style={styles.black}>
            <MovieBaseList navigation={navigation} />
            <SeriesBaseList navigation={navigation} />
            <MovieFavoritesList navigation={navigation} />
            <SeriesFavoritesList navigation={navigation} />
            <MovieWaitingList navigation={navigation} />
            <SeriesWaitingList navigation={navigation} />
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}
