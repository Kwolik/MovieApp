import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../component/MovieList";

export default function PopularSeries({ navigation }) {
  const [popularSeries, SetPopularSeries] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      SetPopularSeries(responseJson.results);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const popularSeriesList = popularSeries.map((series, index) => (
    <MovieList
      key={index}
      id={series.id}
      title={series.name}
      year={series.first_air_date ? series.first_air_date : "20??"}
      // imdbid={movie.imdbID}
      type={"TV Series"}
      poster={`https://image.tmdb.org/t/p/w342/${series.poster_path}`}
      navigation={navigation}
      screen={0}
    />
  ));

  return <ScrollView horizontal={true}>{popularSeriesList}</ScrollView>;
}
