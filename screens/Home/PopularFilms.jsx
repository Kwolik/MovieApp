import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../components/MovieList";

export default function PopularFilms() {
  const [popularFilms, SetPopularFilms] = React.useState([]);
  //przez /trending pokazuje srednia ocen a przy popular juz
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

  const popularFilmsList = popularFilms.map((movie, index) => (
    <MovieList
      key={index}
      title={movie.title}
      year={movie.release_date.substring(0, 4)}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
    />
  ));

  return <ScrollView horizontal={true}>{popularFilmsList}</ScrollView>;
}