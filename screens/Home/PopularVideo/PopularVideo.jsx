import React from "react";
import { ScrollView, Dimensions } from "react-native";
import Trailer from "./Trailer";

export default function PopularVideo() {
  const [popularFilms, SetPopularFilms] = React.useState([]);
  const window = Dimensions.get("window");
  const windowWidth = window.width;
  const windowHeight = window.height;

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1`;

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
      index < 8 && (
        <Trailer
          key={index}
          id={movie.id}
          title={movie.title}
          year={movie.release_date ? movie.release_date : "20??"}
          overview={movie.overview}
          wwidth={windowWidth}
        />
      )
  );

  return (
    <ScrollView horizontal pagingEnabled style={{height: windowHeight * 0.48}}>
      {popularFilmsList}
    </ScrollView>
  );
}
