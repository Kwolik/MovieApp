import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../component/MovieList";

export default function TopFilms({ navigation }) {
  const [topFilms, SetTopFilms] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      SetTopFilms(responseJson.results);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const topFilmsList = topFilms.map((movie, index) => (
    <MovieList
      key={index}
      id={movie.id}
      title={movie.title}
      year={movie.release_date ? movie.release_date : "20??"}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
      navigation={navigation}
      screen={0}
    />
  ));

  return <ScrollView horizontal={true}>{topFilmsList}</ScrollView>;
}
