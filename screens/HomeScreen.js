import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import PopularFilms from "../screens/Home/PopularFilms";
import PopularSeries from "../screens/Home/PopularSeries";
import UpcomingFilms from "../screens/Home/UpcomingFilms";
import TopSeries from "../screens/Home/TopSeries";
import TopFilms from "../screens/Home/TopFilms";
import TrendingSeries from "../screens/Home/TrendingSeries";
import TrendingFilms from "../screens/Home/TrendingFilms";
import PopularPerson from "../screens/Home/PopularPerson";
import photo from "../assets/back.png";

export default function HomeScreen({ navigation }) {
  const styles = StyleSheet.create({
    menu: {
      flex: 1,
    },
    body: {
      marginTop: 40,
    },
    name: {
      fontSize: 20,
      color: "#F39B36",
      fontWeight: "bold",
      marginTop: 10,
      marginLeft: 10,
    },
  });

  const [load, SetLoad] = React.useState(true);
  const [visibility, SetVisibility] = React.useState("none");

  function componentDidMount() {
    setTimeout(() => {
      SetLoad(false);
      SetVisibility("flex");
    }, 900);
  }

  componentDidMount();

  return (
    <ImageBackground source={photo} style={styles.menu}>
      <ScrollView>
        <View style={{ display: visibility }}>
          <View style={styles.body}>
            <Text style={styles.name}>Most Popular Films</Text>
            <PopularFilms navigation={navigation} />
            <Text style={styles.name}>Most Popular TV Show</Text>
            <PopularSeries navigation={navigation} />
            <Text style={styles.name}>Upcoming Films</Text>
            <UpcomingFilms navigation={navigation} />
            <Text style={styles.name}>Top TV Series</Text>
            <TopSeries navigation={navigation} />
            <Text style={styles.name}>Top Films</Text>
            <TopFilms navigation={navigation} />
            <Text style={styles.name}>Trending TV series in this week</Text>
            <TrendingSeries navigation={navigation} />
            <Text style={styles.name}>Trending films in this week</Text>
            <TrendingFilms navigation={navigation} />
            <Text style={styles.name}>Popular Persons</Text>
            <PopularPerson navigation={navigation} />
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
