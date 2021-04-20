import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../components/MovieList";

export default function TopSeries() {
  const [topSeries, SetTopSeries] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      SetTopSeries(responseJson.results);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const topSeriesList = topSeries.map((series, index) => (
    <MovieList
      key={index}
      title={series.name}
      year={series.first_air_date.substring(0, 4)}
      // imdbid={movie.imdbID}
      type={"TV series"}
      poster={`https://image.tmdb.org/t/p/w342/${series.poster_path}`}
    />
  ));

  return <ScrollView horizontal={true}>{topSeriesList}</ScrollView>;
}
