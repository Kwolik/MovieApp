import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../components/MovieList";

export default function Jones() {
  const movies = [
    {
      Title: "Indiana Jones and the Raiders of the Lost Ark",
      Year: "1981",
      imdbID: "tt0082971",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SX300.jpg",
    },
    {
      Title: "Indiana Jones and the Last Crusade",
      Year: "1989",
      imdbID: "tt0097576",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Indiana Jones and the Temple of Doom",
      Year: "1984",
      imdbID: "tt0087469",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGI1NTk2ZWMtMmI0YS00Yzg0LTljMzgtZTg4YjkyY2E5Zjc0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Indiana Jones and the Kingdom of the Crystal Skull",
      Year: "2008",
      imdbID: "tt0367882",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDIzNzM5MDUtZmI5MC00NGQ5LWFlNzEtYzE3ODIxNDI3ZmNhXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_SX300.jpg",
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
