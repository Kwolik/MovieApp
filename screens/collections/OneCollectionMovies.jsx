import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../component/MovieList";

export default function OneCollectionMovies(props) {
  const [collection, SetCollection] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/collection/${props.id}?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.parts) {
        SetCollection(responseJson.parts);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const collectionList = collection.map((movie, index) => (
    <MovieList
      key={index}
      id={movie.id}
      title={movie.title}
      year={movie.release_date ? movie.release_date : "20??"}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
      navigation={props.navigation}
      screen={1}
    />
  ));

  return <ScrollView horizontal={true}>{collectionList}</ScrollView>;
}
