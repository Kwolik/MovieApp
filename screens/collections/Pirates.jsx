import React from "react";
import { ScrollView } from "react-native";
import MovieList from "../../components/MovieList";

export default function Pirates() {
  const movies = [
    {
      Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      Year: "2003",
      imdbID: "tt0325980",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: Dead Man's Chest",
      Year: "2006",
      imdbID: "tt0383574",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: At World's End",
      Year: "2007",
      imdbID: "tt0449088",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: On Stranger Tides",
      Year: "2011",
      imdbID: "tt1298650",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: Dead Men Tell No Tales",
      Year: "2017",
      imdbID: "tt1790809",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_SX300.jpg",
    },
  ];

  console.log(movies.length);

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
