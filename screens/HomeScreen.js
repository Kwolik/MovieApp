import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import styles from "./Home.styles";
import Cinema from "../screens/Home/Cinema";
import PopularPerson from "../screens/Home/PopularPerson";
import PopularVideo from "../screens/Home/PopularVideo";
import photo from "../assets/back.png";
import ListProduction from "./Home/ListProduction";

export default function HomeScreen({ navigation }) {
  const [load, SetLoad] = React.useState(true);
  const [visibility, SetVisibility] = React.useState("none");

  const popularFilms = {
    link: `https://api.themoviedb.org/3/movie/popular?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1`,
    type: "Movie",
  };
  const popularSeries = {
    link: `https://api.themoviedb.org/3/tv/popular?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1`,
    type: "TV Series",
  };
  const upcomingFilms = {
    link: `https://api.themoviedb.org/3/movie/upcoming?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1`,
    type: "Movie",
  };
  const trendingSeries = {
    link: `https://api.themoviedb.org/3/trending/tv/week?api_key=730f5fc8cccd28b439fbcbac1988359b`,
    type: "TV Series",
  };
  const trendingFilms = {
    link: `https://api.themoviedb.org/3/trending/movie/week?api_key=730f5fc8cccd28b439fbcbac1988359b`,
    type: "Movie",
  };
  const topSeries = {
    link: `https://api.themoviedb.org/3/tv/top_rated?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1`,
    type: "TV Series",
  };
  const topFilms = {
    link: `https://api.themoviedb.org/3/movie/top_rated?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1`,
    type: "Movie",
  };

  function componentDidMount() {
    setTimeout(() => {
      SetLoad(false);
      SetVisibility("flex");
    }, 1200);
  }

  componentDidMount();

  return (
    <ImageBackground source={photo} style={styles.menu}>
      <StatusBar translucent={false} />
      {load && (
        <ActivityIndicator style={styles.load} color={"#F39B36"} size={100} />
      )}
      <ScrollView>
        <View style={{ display: visibility }}>
          <Cinema navigation={navigation} />
          <Text style={styles.name}>Most Popular Films</Text>
          <ListProduction
            navigation={navigation}
            link={popularFilms.link}
            type={popularFilms.type}
          />
          <Text style={styles.name}>Most Popular TV Shows</Text>
          <ListProduction
            navigation={navigation}
            link={popularSeries.link}
            type={popularSeries.type}
          />
          <Text style={styles.name}>Upcoming Films</Text>
          <ListProduction
            navigation={navigation}
            link={upcomingFilms.link}
            type={upcomingFilms.type}
          />
          <PopularVideo/>
          <Text style={styles.name}>Trending TV Series in this week</Text>
          <ListProduction
            navigation={navigation}
            link={trendingSeries.link}
            type={trendingSeries.type}
          />
          <Text style={styles.name}>Trending Films in this week</Text>
          <ListProduction
            navigation={navigation}
            link={trendingFilms.link}
            type={trendingFilms.type}
          />
          <Text style={styles.name}>Top TV Series</Text>
          <ListProduction
            navigation={navigation}
            link={topSeries.link}
            type={topSeries.type}
          />
          <Text style={styles.name}>Top Films</Text>
          <ListProduction
            navigation={navigation}
            link={topFilms.link}
            type={topFilms.type}
          />
          <Text style={styles.name}>Popular Persons</Text>
          <PopularPerson navigation={navigation} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
