import React from "react";
import { ScrollView } from "react-native";
import PeopleList from "../../components/PeopleList";

export default function PopularPerson({ navigation }) {
  const [popularPerson, SetPopularPerson] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/person/popular?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      SetPopularPerson(responseJson.results);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const popularPersonList = popularPerson.map((people, index) => (
    <PeopleList
      key={index}
      id={people.id}
      name={people.name}
      title={people.known_for[0].title}
      // imdbid={people.imdbID}
      poster={
        people.profile_path
          ? `https://image.tmdb.org/t/p/w342/${people.profile_path}`
          : null
      }
      navigation={navigation}
    />
  ));

  return <ScrollView horizontal={true}>{popularPersonList}</ScrollView>;
}
