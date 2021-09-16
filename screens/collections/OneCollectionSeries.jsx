import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../component/MovieList";

export default function OneCollectionSeries(props) {
  const [collection, SetCollection] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/tv/${props.id}?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.seasons) {
      SetCollection(responseJson.seasons);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const collectionList = collection.map(
    (series, index) =>
      series.name !== "Specials" && (
        <MovieList
          key={index}
          id={series.id}
          title={series.name}
          year={series.air_date ? series.air_date : "20??"}
          // imdbid={series.imdbID}
          type={"Season " + series.season_number}
          poster={`https://image.tmdb.org/t/p/w342/${series.poster_path}`}
          navigation={props.navigation}
          screen={1}
        />
      )
  );

  return <ScrollView horizontal={true}>{collectionList}</ScrollView>;
}
