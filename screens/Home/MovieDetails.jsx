import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import LinearGradient from "expo-linear-gradient";
import Firebase from "../../Firebase.js";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MovieList from "../../components/MovieList";
import { showMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import photo from "../../assets/back.png";

export default function MovieDetails({ route, navigation }) {
  const styles = StyleSheet.create({
    menu: {
      flex: 1,
    },
    centerImage: {
      alignItems: "center",
    },
    imageBack: {
      width: "100%",
      height: 256,
      opacity: 0.8,
    },
    poster: {
      width: 160,
      height: 256,
      position: "absolute",
      marginLeft: 10,
      marginTop: 128,
    },
    favorite: {
      position: "absolute",
      backgroundColor: "#16161A",
      width: 70,
      height: 70,
      borderRadius: 35,
      right: 10,
      marginTop: 96,
      justifyContent: "center",
      alignItems: "center",
    },
    heart: {
      fontSize: 42,
      color: "white",
    },
    rating: {
      position: "absolute",
      backgroundColor: "#16161A",
      width: 70,
      height: 70,
      borderRadius: 35,
      right: 10,
      marginTop: 175,
      justifyContent: "center",
      alignItems: "center",
    },
    rate: {
      fontSize: 28,
      color: "#F39B36",
      fontWeight: "bold",
    },
    titleComponent: {
      // borderColor: "yellow",
      // borderWidth: 2,
      marginLeft: 170,
      height: 140,
    },
    title: {
      margin: 10,
      fontSize: 20,
      color: "#E1E1E1",
      // borderColor: "red",
      // borderWidth: 2,
    },
    titleDesc: {
      // borderWidth: 2,
      // borderColor: "red",
      marginLeft: 10,
      marginRight: 10,
      flexDirection: "row",
    },
    premiere: {
      fontSize: 16,
      color: "#B2B2B2",
    },
    time: {
      fontSize: 16,
      color: "#B2B2B2",
      marginLeft: 10,
    },
    overview: {
      color: "#E1E1E1",
      fontSize: 18,
    },
    readMore: {
      color: "#F39B36",
      fontSize: 18,
      textAlign: "right",
      marginRight: 10,
    },
    info: {
      // borderColor: "red",
      // borderWidth: 2,
      margin: 10,
    },
    column: {
      flexDirection: "row",
    },
    infoLeft: {
      color: "#B2B2B2",
      fontSize: 18,
      width: 98,
      padding: 5,
    },
    infoRight: {
      color: "#E1E1E1",
      fontSize: 18,
      padding: 5,
      marginRight: 98,
      // borderWidth: 2,
      // borderColor: "yellow",
    },
    money: {
      // borderColor: "red",
      // borderWidth: 2,
      margin: 10,
      flexDirection: "row",
    },
    textUp: {
      color: "#F39B36",
      fontSize: 18,
      padding: 5,
    },
    textDown: {
      color: "#E1E1E1",
      fontWeight: "bold",
      fontSize: 18,
      padding: 5,
    },
    columnMoney: {
      // borderColor: "yellow",
      // borderWidth: 2,
      width: 85,
    },
    tagline: {
      // borderColor: "yellow",
      // borderWidth: 2,
      marginRight: 170,
      marginLeft: 5,
    },
    seeMore: {
      width: 140,
      height: 40,
      backgroundColor: "#9B672E",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      borderRadius: 60,
      marginRight: 20,
    },
    textButton: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#16161A",
    },
    imdb: {
      width: 100,
      height: 40,
      backgroundColor: "#9A9A9B",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      borderRadius: 60,
    },
    infoMovie: {
      fontSize: 20,
      color: "#F39B36",
      marginLeft: 10,
      marginTop: 10,
      fontWeight: "bold",
    },
    watchlist: {
      position: "absolute",
      backgroundColor: "#F39B36",
      width: 70,
      height: 70,
      borderRadius: 35,
      right: 10,
      bottom: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    plus: {
      fontSize: 40,
      color: "#16161A",
    },
  });

  const { currentUser } = Firebase.auth();
  const [currentDate, setCurrentDate] = React.useState("");
  const [popularFilms, SetPopularFilms] = React.useState([]);
  const [moreMovies, SetMoreMovies] = React.useState([]);
  const pathImageBack = `https://image.tmdb.org/t/p/w1066_and_h600_bestv2/${popularFilms.backdrop_path}`;
  const pathImage = `https://image.tmdb.org/t/p/w342/${popularFilms.poster_path}`;

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;
    const url2 = `https://api.themoviedb.org/3/movie/${route.params.id}/similar?api_key=730f5fc8cccd28b439fbcbac1988359b&language=en-US`;

    const response = await fetch(url);
    const responseJson = await response.json();
    const response2 = await fetch(url2);
    const responseJson2 = await response2.json();

    if (responseJson) {
      SetPopularFilms(responseJson);
    }
    if (responseJson2.results) {
      SetMoreMovies(responseJson2.results);
    }
  };

  React.useEffect(() => {
    getMovieRequest();
    id();
  }, []);

  function id() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    if (date < 10) date = "0" + date;
    if (month < 10) month = "0" + month;
    if (hours < 10) hours = "0" + hours;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    setCurrentDate(
      date + "" + month + "" + year + "" + hours + "" + min + "" + sec
    );
  }

  function addWatchlist() {
    if (currentUser.uid) {
      Firebase.database()
        .ref(`/${currentUser.uid}/Watchlist/Movie/${currentDate}`)
        .set({
          id: currentDate,
          movie: route.params.id,
          title: popularFilms.title,
          poster: popularFilms.poster_path,
          year: popularFilms.release_date,
        });
    } else {
      alert("Something wrong :(");
    }
    showMessage({
      message: "Add to Watchlist",
      description: "This movie has been added to your watchlist",
      type: "success",
    });
  }

  function removeWatchlist() {
    if (currentUser.uid) {
      Firebase.database()
        .ref(`/${currentUser.uid}/Watchlist/Movie/${idWatchlist}`)
        .remove();

      SetWatchlist(0);
      SetIdWatchlist(0);
    }
    showMessage({
      message: "Delete to Watchlist",
      description: "This movie has been removed from watchlist",
      type: "warning",
    });
  }

  function addFavorites() {
    if (currentUser.uid) {
      Firebase.database()
        .ref(`/${currentUser.uid}/Favorites/Movie/${currentDate}`)
        .set({
          id: currentDate,
          movie: route.params.id,
          title: popularFilms.title,
          poster: popularFilms.poster_path,
          year: popularFilms.release_date,
        })
        .then(() => console.log("Add record to database"));
      SetFavorite(1);
      SetIdFavorite(currentDate);
    } else {
      alert("Something wrong :(");
    }
    showMessage({
      message: "Add to Favorite",
      description: "This movie has been added to your favorites",
      type: "success",
    });
  }

  function removeFavorites() {
    if (currentUser.uid) {
      Firebase.database()
        .ref(`/${currentUser.uid}/Favorites/Movie/${idFavorite}`)
        .remove();

      SetFavorite(0);
      SetIdFavorite(0);
    }
    showMessage({
      message: "Delete to Favorite",
      description: "This movie has been removed from favorites",
      type: "warning",
    });
  }

  function RunTime() {
    const time = popularFilms.runtime / 60;
    let hover = Math.round(time);
    if (hover > time) hover = Math.round(hover - 1);
    const mins = popularFilms.runtime - 60 * hover;

    return hover === 0 ? mins + "min" : hover + "h " + mins + "min";
  }

  //More like this wykorzystac Similar Movies w Movies
  //console.log(popularFilms);
  //console.log(popularFilms.tagline);

  const budget = popularFilms.budget && popularFilms.budget.toString();
  const revenue = popularFilms.revenue && popularFilms.revenue.toString();
  const [over, SetOver] = React.useState(0);
  const [favorite, SetFavorite] = React.useState(0);
  const [idFavorite, SetIdFavorite] = React.useState(0);
  const [watchlist, SetWatchlist] = React.useState(0);
  const [idWatchlist, SetIdWatchlist] = React.useState(0);

  function Fav() {
    React.useEffect(() => {
      const onChildAdd = Firebase.database()
        .ref(`/${currentUser.uid}/Favorites/Movie`)
        .on("child_added", (snapshot) => {
          const siema = snapshot.val();
          if (siema.movie === route.params.id) {
            SetFavorite(1);
            SetIdFavorite(siema.id);
          }
        });

      return () =>
        Firebase.database()
          .ref(`/${currentUser.uid}/Favorites/Movie`)
          .off("child_added", onChildAdd);
    }, []);
  }

  function Watch() {
    React.useEffect(() => {
      const onChildAdd = Firebase.database()
        .ref(`/${currentUser.uid}/Watchlist/Movie`)
        .on("child_added", (snapshot) => {
          const siema = snapshot.val();
          if (siema.movie === route.params.id) {
            SetWatchlist(1);
            SetIdWatchlist(siema.id);
          }
        });

      return () =>
        Firebase.database()
          .ref(`/${currentUser.uid}/Watchlist/Movie`)
          .off("child_added", onChildAdd);
    }, []);
  }

  const moreMovieList = moreMovies.map((movie, index) => (
    <MovieList
      key={index}
      id={movie.id}
      title={movie.title}
      year={movie.release_date}
      // imdbid={movie.imdbID}
      type={"Movie"}
      poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
      navigation={navigation}
    />
  ));

  Fav();
  Watch();

  if (popularFilms.title) {
    return (
      <View style={styles.menu}>
        <FlashMessage position="top" />
        <ImageBackground source={photo} style={styles.menu}>
          <ScrollView>
            <View>
              <View style={styles.centerImage}>
                {popularFilms.backdrop_path !== null ? (
                  <Image
                    style={styles.imageBack}
                    source={{ uri: pathImageBack }}
                    alt="background"
                  />
                ) : (
                  <LinearGradient
                    colors={["#100D0D", "#2B2B2B"]}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={styles.imageBack}
                  />
                )}
              </View>
              {popularFilms.poster_path !== null ? (
                <Image
                  style={styles.poster}
                  source={{ uri: pathImage }}
                  alt="poster"
                />
              ) : (
                <Image style={styles.poster} source={photo} alt="poster" />
              )}
              {favorite === 0 ? (
                <TouchableOpacity
                  style={styles.favorite}
                  onPress={() => addFavorites()}
                >
                  <AntDesign name="hearto" style={styles.heart} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.favorite}
                  onPress={() => removeFavorites()}
                >
                  <AntDesign name="heart" style={styles.heart} />
                </TouchableOpacity>
              )}
              <View style={styles.rating}>
                <Text style={styles.rate}>{popularFilms.vote_average}</Text>
              </View>
            </View>
            <View style={styles.titleComponent}>
              <Text style={styles.title}>
                {popularFilms.title && popularFilms.title.length > 60
                  ? popularFilms.title.substring(0, 58) + "..."
                  : popularFilms.title}
              </Text>
              <View style={styles.titleDesc}>
                <Text style={styles.premiere}>
                  {popularFilms.release_date
                    ? popularFilms.release_date.substring(0, 4)
                    : "20??"}
                </Text>
                <Text style={styles.time}>{RunTime()}</Text>
              </View>
            </View>
            <View style={styles.info}>
              {popularFilms.overview &&
              popularFilms.overview.length > 166 &&
              over === 0 ? (
                <View>
                  <Text style={styles.overview}>
                    {popularFilms.overview.substring(0, 164) + "..."}
                  </Text>
                  <TouchableOpacity onPress={() => SetOver(1)}>
                    <Text style={styles.readMore}>Read more</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <Text style={styles.overview}>{popularFilms.overview}</Text>
              )}
            </View>
            {popularFilms.genres && popularFilms.production_companies && (
              <View style={styles.info}>
                {popularFilms.genres.length !== 0 && (
                  <View style={styles.column}>
                    <Text style={styles.infoLeft}>Genres</Text>
                    <Text style={styles.infoRight}>
                      {popularFilms.genres.map((genre, index) =>
                        index === popularFilms.genres.length - 1
                          ? genre.name
                          : genre.name + ", "
                      )}
                    </Text>
                  </View>
                )}
                {popularFilms.production_companies.length !== 0 && (
                  <View style={styles.column}>
                    <Text style={styles.infoLeft}>Producers</Text>
                    <Text style={styles.infoRight}>
                      {popularFilms.production_companies.map((genre, index) =>
                        index === popularFilms.production_companies.length - 1
                          ? genre.name
                          : genre.name + ", "
                      )}
                    </Text>
                  </View>
                )}
              </View>
            )}
            {popularFilms.budget !== 0 ||
            popularFilms.revenue !== 0 ||
            popularFilms.tagline ? (
              <View style={styles.money}>
                <View style={styles.columnMoney}>
                  <Text style={styles.textUp}>Budget</Text>
                  <Text style={styles.textDown}>
                    {popularFilms.budget && budget.length >= 7
                      ? budget.substring(0, budget.length - 6) + " mln"
                      : popularFilms.budget && budget.length < 7
                      ? budget
                      : "no data"}
                  </Text>
                </View>
                <View style={styles.columnMoney}>
                  <Text style={styles.textUp}>Revenue</Text>
                  <Text style={styles.textDown}>
                    {popularFilms.revenue &&
                    revenue.length >= 7 &&
                    revenue.length < 10
                      ? revenue.substring(0, revenue.length - 6) + " mln"
                      : popularFilms.revenue && revenue.length >= 10
                      ? (revenue / 1000000000).toFixed(2) + " mld"
                      : popularFilms.revenue && revenue.length < 7
                      ? revenue
                      : "no data"}
                  </Text>
                </View>
                {popularFilms.tagline ? (
                  <View style={styles.tagline}>
                    <Text style={styles.textUp}>Tagline</Text>
                    <Text style={styles.textDown}>{popularFilms.tagline}</Text>
                  </View>
                ) : (
                  <Text></Text>
                )}
              </View>
            ) : (
              <Text></Text>
            )}
            <View style={styles.money}>
              {popularFilms.homepage ? (
                <TouchableOpacity
                  style={styles.seeMore}
                  onPress={() => Linking.openURL(popularFilms.homepage)}
                >
                  <Text style={styles.textButton}>SEE MORE</Text>
                </TouchableOpacity>
              ) : (
                <Text></Text>
              )}
              {popularFilms.imdb_id ? (
                <TouchableOpacity
                  style={styles.imdb}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.imdb.com/title/" + popularFilms.imdb_id
                    )
                  }
                >
                  <Text style={styles.textButton}>IMDB</Text>
                </TouchableOpacity>
              ) : (
                <Text></Text>
              )}
            </View>
            {moreMovies.length !== 0 && (
              <View>
                <Text style={styles.infoMovie}>More like this</Text>
                <ScrollView horizontal={true}>{moreMovieList}</ScrollView>
              </View>
            )}
          </ScrollView>
          {watchlist === 0 ? (
            <TouchableOpacity
              style={styles.watchlist}
              onPress={() => addWatchlist()}
            >
              <FontAwesome5 name="plus" style={styles.plus} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.watchlist}
              onPress={() => removeWatchlist()}
            >
              <FontAwesome5 name="check" style={styles.plus} />
            </TouchableOpacity>
          )}
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View style={styles.menu}>
        <ImageBackground source={photo} style={styles.menu}>
          <ActivityIndicator style={{ flex: 1 }} color={"#F39B36"} size={100} />
        </ImageBackground>
      </View>
    );
  }
}
