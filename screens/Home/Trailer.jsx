import React from "react";
import { View, StyleSheet, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Trailer(props) {
  const styles = StyleSheet.create({
    container: {
      height: 360,
      width: props.wwidth,
      marginTop: 10,
    },
    video: {
      justifyContent: "center",
      alignItems: "center",
    },
    info: {
      height: 112,
    },
    title: {
      color: "#E1E1E1",
      fontSize: 16,
      fontWeight: "bold",
      marginLeft: 10,
    },
    overview: {
      color: "#B2B2B2",
      margin: 10,
    },
  });

  const [trailer, SetTrailer] = React.useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      SetTrailer(responseJson.results);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
  }, []);

  const popularVideoList = trailer.map((movie, index) => {
    if (
      movie.type === "Trailer" &&
      movie.official &&
      movie.name.indexOf("Official") !== -1 &&
      movie.name.indexOf("Trailer") !== -1 &&
      movie.name.indexOf("2") === -1
    ) {
      return (
        <View key={movie.id} style={styles.container}>
          <View style={styles.video}>
            <YoutubePlayer
              height={props.wwidth * 0.56}
              width={props.wwidth * 0.96}
              videoId={movie.key}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>
              {props.title} | {props.year.substring(0, 4)}
            </Text>
            <Text style={styles.overview}>
              {props.overview.length < 230
                ? props.overview
                : props.overview.substring(0, 232) + "..."}
            </Text>
          </View>
        </View>
      );
    }
  });

  return <View>{popularVideoList}</View>;
}
