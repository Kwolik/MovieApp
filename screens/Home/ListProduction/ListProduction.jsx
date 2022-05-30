import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../../component/MovieList";

export default function ListProduction(props) {
  const [list, SetList] = React.useState([]);

  const getMovieRequest = async () => {
    const url = props.link;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      SetList(responseJson.results);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const productionList = list.map((movie, index) => (
    <MovieList
      key={index}
      id={movie.id}
      title={movie.title ? movie.title : movie.name}
      year={
        movie.release_date
          ? movie.release_date
          : movie.first_air_date
          ? movie.first_air_date
          : "20??"
      }
      // imdbid={movie.imdbID}
      type={props.type}
      poster={
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
          : null
      }
      navigation={props.navigation}
      screen={0}
    />
  ));

  return <ScrollView horizontal={true}>{productionList}</ScrollView>;
}
