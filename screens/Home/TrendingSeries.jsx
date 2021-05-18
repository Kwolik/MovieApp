import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../component/MovieList";

export default function TrendingSeries({ navigation }) {
  const [trendingSeries, SetTrendingSeries] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=730f5fc8cccd28b439fbcbac1988359b`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      SetTrendingSeries(responseJson.results);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const trendingSeriesList = trendingSeries.map((series, index) => (
    <MovieList
      key={index}
      id={series.id}
      title={series.name}
      year={series.first_air_date ? series.first_air_date : "20??"}
      // imdbid={movie.imdbID}
      type={"TV Series"}
      poster={
        series.poster_path
          ? `https://image.tmdb.org/t/p/w342/${series.poster_path}`
          : null
      }
      navigation={navigation}
      screen={0}
    />
  ));

  return <ScrollView horizontal={true}>{trendingSeriesList}</ScrollView>;
}
