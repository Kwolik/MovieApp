import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../components/MovieList";

export default function Rings() {
  const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Hobbit: An Unexpected Journey",
      Year: "2012",
      imdbID: "tt0903624",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg",
    },
    {
      Title: "The Hobbit: The Desolation of Smaug",
      Year: "2013",
      imdbID: "tt1170358",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg",
    },
    {
      Title: "The Hobbit: The Battle of the Five Armies",
      Year: "2014",
      imdbID: "tt2310332",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzNDE3OTQ3MF5BMl5BanBnXkFtZTgwODczMTg4MjE@._V1_SX300.jpg",
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
