import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../components/MovieList";

export default function TrendingFilms({ navigation }) {
  const [trendingFilms, SetTrendingFilms] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=730f5fc8cccd28b439fbcbac1988359b`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      SetTrendingFilms(responseJson.results);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const trendingFilmsList = trendingFilms.map((movie, index) => (
    <MovieList
      key={index}
      id={movie.id}
      title={movie.title}
      year={movie.release_date ? movie.release_date : "20??"}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
      navigation={navigation}
    />
  ));

  return <ScrollView horizontal={true}>{trendingFilmsList}</ScrollView>;
}
