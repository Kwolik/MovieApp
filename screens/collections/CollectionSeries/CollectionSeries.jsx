import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import noposter from "../../../assets/noposter.png";
import styles from "./CollectionSeries.styles";

export default function CollectionSeries(props) {
  const [collection, SetCollection] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/tv/${props.id}?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      SetCollection(responseJson);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <View style={styles.menu}>
      <TouchableOpacity>
        {collection.poster_path ? (
          <Image
            style={styles.poster}
            source={{
              uri: `https://image.tmdb.org/t/p/w342/${collection.poster_path}`,
            }}
            alt="poster"
          />
        ) : (
          <Image style={styles.poster} source={noposter} alt="poster" />
        )}
      </TouchableOpacity>
    </View>
  );
}
