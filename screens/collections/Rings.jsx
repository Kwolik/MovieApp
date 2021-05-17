import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../component/MovieList";

export default function Rings({ navigation }) {
  const [rings, SetRings] = React.useState([]);
  const [hobbit, SetHobbit] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/collection/119?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.parts) {
      SetRings(responseJson.parts);
    }
  };

  const getMovieRequest2 = async () => {
    const url = `https://api.themoviedb.org/3/collection/121938?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.parts) {
      SetHobbit(responseJson.parts);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
    getMovieRequest2();
  }, []);

  const ringsList = rings.map((movie, index) => (
    <MovieList
      key={index}
      id={movie.id}
      title={movie.title}
      year={movie.release_date ? movie.release_date : "20??"}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
      navigation={navigation}
      screen={1}
    />
  ));

  const hobbitList = hobbit.map((movie, index) => (
    <MovieList
      key={index}
      id={movie.id}
      title={movie.title}
      year={movie.release_date ? movie.release_date : "20??"}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
      navigation={navigation}
      screen={1}
    />
  ));

  return (
    <ScrollView horizontal={true}>
      {ringsList}
      {hobbitList}
    </ScrollView>
  );
}
