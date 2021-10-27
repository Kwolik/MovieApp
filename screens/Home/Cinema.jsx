import React from "react";
import {
  ScrollView,
  Animated,
  Dimensions,
  View,
  StyleSheet,
} from "react-native";
import CinemaList from "./CinemaList";

export default function Cinema({ navigation }) {
  const styles = StyleSheet.create({
    normalDot: {
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: "#F39B36",
      marginHorizontal: 4,
    },
    indicatorContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      bottom: 26,
    },
  });

  const [popularFilms, SetPopularFilms] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1&region=pl`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      SetPopularFilms(responseJson.results);
    }
  };

  const window = Dimensions.get("window");
  const windowWidth = window.width;
  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const popularFilmsList = popularFilms.map(
    (movie, index) =>
      index < 12 && (
        <View
          key={index}
          style={{
            width: windowWidth,
            height: 256,
          }}
        >
          <CinemaList
            id={movie.id}
            title={movie.title}
            year={movie.release_date ? movie.release_date : "20??"}
            // imdbid={movie.imdbID}
            type={"Movie"}
            poster={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w1066_and_h600_bestv2/${movie.backdrop_path}`
                : null
            }
            rate={movie.vote_average}
            wtd={windowWidth}
          />
        </View>
      )
  );

  return (
    <View style={{ marginBottom: -20 }}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
      >
        {popularFilmsList}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {popularFilms.map((image, imageIndex) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (imageIndex - 1),
              windowWidth * imageIndex,
              windowWidth * (imageIndex + 1),
            ],
            outputRange: [8, 16, 8],
            extrapolate: "clamp",
          });
          return (
            imageIndex < 12 && (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            )
          );
        })}
      </View>
    </View>
  );
}
