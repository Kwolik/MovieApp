import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../components/MovieList";

export default function Troops() {
  const movies = [
    {
      Title: "The Troops of St. Tropez",
      Year: "1964",
      imdbID: "tt0058135",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTJlZTVhZDMtYzI1My00NzAxLTkyNWYtYjMzYjk4ZTQxNjFlXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg",
    },
    {
      Title: "The Troops & Aliens",
      Year: "1979",
      imdbID: "tt0079200",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTU2NDA4MWYtMTE3OS00OTcyLWE2NTAtZmViMjRjZTYwZDAyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Troops get Married",
      Year: "1968",
      imdbID: "tt0063005",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODhkN2NmZjAtNDA3NS00ZmQwLWI3ZTItNmNkNWJmNWYxMmRjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Troops & Troop-ettes",
      Year: "1982",
      imdbID: "tt0083996",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTBkMmFiNWUtNmRiNC00MDMyLTkxZjItMDE3ZmJmZThiZmIwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Troops in New York",
      Year: "1965",
      imdbID: "tt0060450",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWUyYzVmYWUtYTRlYi00YjFiLTk2M2ItMGVmZjFiN2ZlNDdhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Troops on Vacation",
      Year: "1970",
      imdbID: "tt0065769",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzhmNmI3NWUtNDE0Yi00MTdjLWEwMzEtZjU2N2UwMmFlMTA3XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
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
