import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../components/MovieList";

export default function SeasonList(props) {
  const [season, SetSeason] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/tv/42009/season/${props.id}?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
        SetSeason(responseJson);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  // Nie ma plakatów do kazdych odcinków wiec jakos trzeba to ładnie zrobić
  const seasonList = season.map((series, index) => (
    <MovieList
    //   key={index}
    //   title={series.epi.name}
    //   year={series.air_date ? series.air_date.substring(0, 4) : "20??"}
    //   // imdbid={series.imdbID}
    //   type={"S"+ (series.season_number.length > 1 ? series.season_number : "0" + series.season_number) + " E" + ()}
    //   poster={`https://image.tmdb.org/t/p/w342/${series.poster_path}`}
    />
  ));

  return <ScrollView horizontal={true}>{seasonList}</ScrollView>;
}