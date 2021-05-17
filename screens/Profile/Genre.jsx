import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../component/MovieList";

export default function Genre(props) {
  const [popularFilms, SetPopularFilms] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=730f5fc8cccd28b439fbcbac1988359b&with_genres=${props.id}`;

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
      id={movie.id}
      title={movie.title}
      year={movie.release_date ? movie.release_date : "20??"}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
      navigation={props.navigation}
      screen={4}
      back={0}
    />
  ));

  return <ScrollView horizontal={true}>{popularFilmsList}</ScrollView>;
}
