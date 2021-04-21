import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../components/MovieList";

export default function Potter() {
  const [harryPotter, SetHarryPotter] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/collection/1241?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.parts) {
      SetHarryPotter(responseJson.parts);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const harryPotterList = harryPotter.map((movie, index) => (
    <MovieList
      key={index}
      title={movie.title}
      year={movie.release_date ? movie.release_date.substring(0, 4) : "20??"}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
    />
  ));

  return <ScrollView horizontal={true}>{harryPotterList}</ScrollView>;
}
