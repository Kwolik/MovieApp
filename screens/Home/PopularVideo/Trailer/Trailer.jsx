import React from "react";
import { View, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "./Trailer.styles";

export default function Trailer(props) {
  const [trailer, SetTrailer] = React.useState([]);
  //Poprawić ten fragment
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

  const popularVideoList = trailer.map((movie) => {
    if (
      movie.type === "Trailer" &&
      movie.official &&
      movie.name.indexOf("Official") !== -1 &&
      movie.name.indexOf("Trailer") !== -1 &&
      movie.name.indexOf("2") === -1
    ) {
      return (
        <View
          key={movie.id}
          style={{ height: 360, width: props.wwidth, marginTop: 10 }}
        >
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
