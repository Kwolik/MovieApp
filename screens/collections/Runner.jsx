import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../components/MovieList";

export default function Runner() {
  const movies = [
    {
      Title: "The Maze Runner",
      Year: "2014",
      imdbID: "tt1790864",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg",
    },
    {
      Title: "Maze Runner: The Scorch Trials",
      Year: "2015",
      imdbID: "tt4046784",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE3MDU2NzQyMl5BMl5BanBnXkFtZTgwMzQxMDQ3NTE@._V1_SX300.jpg",
    },
    {
      Title: "Maze Runner: The Death Cure",
      Year: "2018",
      imdbID: "tt4500922",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYyNzk3MDc2NF5BMl5BanBnXkFtZTgwMDk3OTM1NDM@._V1_SX300.jpg",
    },
  ];

  const moviesList = movies.map((movie, index) => (
    <MovieList
      key={index}
      title={movie.Title}
      year={movie.Year}
      imdbid={movie.imdbID}
      type={movie.Type}
      poster={movie.Poster}
    />
  ));

  return <ScrollView horizontal={true}>{moviesList}</ScrollView>;
}
