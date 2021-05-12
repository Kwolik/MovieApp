import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../components/MovieList";

export default function AHS({ navigation }) {
  const [AHS, SetAHS] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/tv/1413?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.seasons) {
      SetAHS(responseJson.seasons);
    }
  };

  console.log(AHS[1]);

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const AHSList = AHS.map((series, index) => (
    <MovieList
      key={index}
      id={series.id}
      title={series.name}
      year={series.air_date ? series.air_date : "20??"}
      // imdbid={series.imdbID}
      type={"Season " + series.season_number}
      poster={`https://image.tmdb.org/t/p/w342/${series.poster_path}`}
      navigation={navigation}
      screen={1}
    />
  ));

  return <ScrollView horizontal={true}>{AHSList}</ScrollView>;
}
