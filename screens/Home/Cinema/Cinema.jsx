import React from "react";
import { ScrollView, Animated, Dimensions, View, Text } from "react-native";
import CinemaList from "./CinemaList";
import styles from "./Cinema.styles";

export default function Cinema({ navigation }) {
  const [popularFilms, SetPopularFilms] = React.useState([]);
  const window = Dimensions.get("window");
  const windowWidth = window.width;
  const scrollX = new Animated.Value(0);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1&region=pl`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      SetPopularFilms(responseJson.results);
    }
  };

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
    <View>
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
      <View style={styles.backTheaters}>
        <Text style={styles.theaters}>In Theaters</Text>
      </View>
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
