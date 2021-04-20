import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import PopularFilms from "../screens/Home/PopularFilms";
import PopularSeries from "../screens/Home/PopularSeries";
import UpcomingFilms from "../screens/Home/UpcomingFilms";
import TopSeries from "../screens/Home/TopSeries";
import TopFilms from "../screens/Home/TopFilms";
import TrendingSeries from "../screens/Home/TrendingSeries";
import TrendingFilms from "../screens/Home/TrendingFilms";

export default function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "black",
    },
    body: {
      marginTop: 40,
    },
    name: {
      fontSize: 20,
      color: "white",
      fontWeight: "bold",
      marginTop: 10,
      marginLeft: 10,
    },
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.name}>Most Popular Films</Text>
          <PopularFilms />
          <Text style={styles.name}>Most Popular TV Show</Text>
          <PopularSeries />
          <Text style={styles.name}>Upcoming Films</Text>
          <UpcomingFilms />
          <Text style={styles.name}>Top TV Series</Text>
          <TopSeries />
          <Text style={styles.name}>Top Films</Text>
          <TopFilms />
          <Text style={styles.name}>Trending TV series in this week</Text>
          <TrendingSeries />
          <Text style={styles.name}>Trending films in this week</Text>
          <TrendingFilms />
        </View>
      </View>
    </ScrollView>
  );
}
