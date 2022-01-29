import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import mainContext from "../context/mainContext";
import Firebase from "../Firebase";
import photo from "../assets/back.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Genre from "./Profile/Genre";
import { GENRESLIST } from "./Profile/Genres";

export default function ProfileScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: 80,
    },
    menu: {
      flex: 1,
    },
    buttonEdit: {
      position: "absolute",
      backgroundColor: "#F39B36",
      width: 80,
      height: 80,
      right: 10,
      top: 10,
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    edit: {
      color: "#16161A",
      fontSize: 40,
    },
    logout: {
      color: "#F39B36",
      fontSize: 32,
    },
    textButton: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#16161A",
    },
    textLogout: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#F39B36",
    },
    buttonLogout: {
      position: "absolute",
      width: 80,
      height: 80,
      left: 10,
      top: 10,
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    avatar: {
      height: 160,
      width: 160,
      alignSelf: "center",
      borderRadius: 80,
    },
    name: {
      fontSize: 28,
      color: "#F39B36",
      margin: 10,
    },
    moreInfo: {
      flexDirection: "row",
      justifyContent: "center",
    },
    email: {
      fontSize: 18,
      color: "#B2B2B2",
      textAlign: "center",
      marginLeft: 10,
      marginRight: 10,
    },
    table: {
      flexDirection: "row",
      marginTop: 40,
    },
    category: {
      fontSize: 18,
      color: "#B2B2B2",
      marginTop: 2,
      marginLeft: 20,
      marginRight: 20,
      textAlign: "center",
    },
    result: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#B2B2B2",
      marginBottom: 2,
      marginLeft: 20,
      marginRight: 20,
      textAlign: "center",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      fontSize: 32,
      color: "#E1E1E1",
      margin: 10,
      padding: 2,
    },
    type: {
      color: "#B2B2B2",
      fontSize: 18,
      width: 200,
      marginLeft: 10,
    },
    typeResult: {
      color: "#B2B2B2",
      fontSize: 18,
      marginLeft: 10,
      width: 58,
      textAlign: "right",
      fontWeight: "bold",
      paddingRight: 2,
    },
    typeMore: {
      color: "#B2B2B2",
      fontSize: 18,
      width: 200,
      marginLeft: 66,
      marginTop: 5,
      marginBottom: 5,
    },
    moviesGenre: {
      marginTop: 20,
    },
    title: {
      fontSize: 20,
      color: "#F39B36",
      fontWeight: "bold",
      marginTop: 10,
      marginLeft: 10,
    },
  });

  const { signOutUser } = useContext(mainContext);
  const [profileInformation, SetProfileInformation] = React.useState(null);
  const [data, SetData] = React.useState([]);
  const [clickWatch, SetClickWatch] = React.useState(false);
  const [clickFavo, SetClickFavo] = React.useState(false);
  const [clickWait, SetClickWait] = React.useState(false);
  const [watch, SetWatch] = React.useState(0);
  const [watchMovies, SetWatchMovies] = React.useState(0);
  const [watchSeries, SetWatchSeries] = React.useState(0);
  const [favorite, SetFavorite] = React.useState(0);
  const [favoriteMovies, SetFavoriteMovies] = React.useState(0);
  const [favoriteSeries, SetFavoriteSeries] = React.useState(0);
  const [waiting, SetWaiting] = React.useState(0);
  const [waitingMovies, SetWaitingMovies] = React.useState(0);
  const [waitingSeries, SetWaitingSeries] = React.useState(0);
  const [movies, SetMovies] = React.useState(0);
  const [series, SetSeries] = React.useState(0);
  const [all, SetAll] = React.useState(0);

  React.useEffect(() => {
    Firebase.database()
      .ref(`/${idUser}/User`)
      .once("value", (snapshot) => {
        SetProfileInformation(snapshot.val());
      });
  }, [data]);

  React.useEffect(() => {
    Firebase.database()
      .ref(`/${idUser}`)
      .on("value", (snapshot) => {
        SetData(snapshot.val());
      });
  }, []);

  React.useEffect(() => {
    const tab = [];
    const tab2 = [];
    const tab3 = [];
    const tab4 = [];
    const tab5 = [];
    const tab6 = [];
    Firebase.database()
      .ref(`/${idUser}/Watchlist/Movie`)
      .on("child_added", (snapshot) => {
        tab.push(snapshot.val());
      });

    Firebase.database()
      .ref(`/${idUser}/Watchlist/Series`)
      .on("child_added", (snapshot) => {
        tab2.push(snapshot.val());
      });

    Firebase.database()
      .ref(`/${idUser}/Favorites/Movie`)
      .on("child_added", (snapshot) => {
        tab3.push(snapshot.val());
      });

    Firebase.database()
      .ref(`/${idUser}/Favorites/Series`)
      .on("child_added", (snapshot) => {
        tab4.push(snapshot.val());
      });

    Firebase.database()
      .ref(`/${idUser}/Waitinglist/Movie`)
      .on("child_added", (snapshot) => {
        tab5.push(snapshot.val());
      });

    Firebase.database()
      .ref(`/${idUser}/Waitinglist/Series`)
      .on("child_added", (snapshot) => {
        tab6.push(snapshot.val());
      });

    SetWatch(tab.length + tab2.length);
    SetFavorite(tab3.length + tab4.length);
    SetWaiting(tab5.length + tab6.length);
    SetWatchMovies(tab.length);
    SetWatchSeries(tab2.length);
    SetFavoriteMovies(tab3.length);
    SetFavoriteSeries(tab4.length);
    SetWaitingMovies(tab5.length);
    SetWaitingSeries(tab6.length);
    SetMovies(tab.length + tab3.length + tab5.length);
    SetSeries(tab2.length + tab4.length + tab6.length);
    SetAll(
      tab.length +
        tab3.length +
        tab5.length +
        tab2.length +
        tab4.length +
        tab6.length
    );
    return function cleanup() {
      tab.length = 0;
      tab2.length = 0;
      tab3.length = 0;
      tab4.length = 0;
      tab5.length = 0;
      tab6.length = 0;
    };
  }, [data]);

  // function list(siema) {
  //   for (var i = 0; i < 19; i++) {
  //     if (GENRESLIST[i].name === siema) {
  //       return (
  //         <View key={i} style={styles.moviesGenre}>
  //           <Text style={styles.title}>{GENRESLIST[i].name}</Text>
  //           <Genre id={GENRESLIST[i].id} navigation={navigation} />
  //         </View>
  //       );
  //     }
  //   }
  // }

  if (profileInformation && profileInformation.name) {
    return (
      <ImageBackground source={photo} style={styles.menu}>
        <ScrollView>
          <TouchableOpacity
            style={styles.buttonLogout}
            onPress={() => signOutUser()}
          >
            <MaterialCommunityIcons name="logout" style={styles.logout} />
            <Text style={styles.textLogout}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonEdit}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <MaterialCommunityIcons name="account-edit" style={styles.edit} />
            <Text style={styles.textButton}>Edit</Text>
          </TouchableOpacity>
          <View style={styles.container}>
            {/* <Image style={styles.avatar} source={require("../assets/logo.png")} /> */}
            <View>
              <Text style={styles.name}>
                {profileInformation && profileInformation.name}
              </Text>
              <View style={styles.moreInfo}>
                <Text style={styles.email}>
                  {profileInformation && profileInformation.email}
                </Text>
                {profileInformation && profileInformation.age && (
                  <Text style={styles.email}>
                    {profileInformation.age} years
                  </Text>
                )}
              </View>
            </View>
            <View style={styles.table}>
              <View>
                <Text style={styles.result}>{movies}</Text>
                <Text style={styles.category}>Movies</Text>
              </View>
              <View>
                <Text style={styles.result}>{series}</Text>
                <Text style={styles.category}>TV Series</Text>
              </View>
              <View>
                <Text style={styles.result}>{all}</Text>
                <Text style={styles.category}>All</Text>
              </View>
            </View>
            <View style={{ marginTop: 40 }}>
              <TouchableOpacity onPress={() => SetClickWatch(!clickWatch)}>
                <View style={styles.row}>
                  <MaterialCommunityIcons
                    name="playlist-check"
                    style={styles.icon}
                  />
                  <Text style={styles.type}>Watchlist</Text>
                  <Text style={styles.typeResult}>{watch}</Text>
                </View>
                {clickWatch && (
                  <View>
                    <View style={styles.row}>
                      <Text style={styles.typeMore}>Movies</Text>
                      <Text style={styles.typeResult}>{watchMovies}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.typeMore}>TV Series</Text>
                      <Text style={styles.typeResult}>{watchSeries}</Text>
                    </View>
                  </View>
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => SetClickFavo(!clickFavo)}>
                <View style={styles.row}>
                  <MaterialCommunityIcons
                    name="heart-multiple"
                    style={styles.icon}
                  />
                  <Text style={styles.type}>Favorites</Text>
                  <Text style={styles.typeResult}>{favorite}</Text>
                </View>
                {clickFavo && (
                  <View>
                    <View style={styles.row}>
                      <Text style={styles.typeMore}>Movies</Text>
                      <Text style={styles.typeResult}>{favoriteMovies}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.typeMore}>TV Series</Text>
                      <Text style={styles.typeResult}>{favoriteSeries}</Text>
                    </View>
                  </View>
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => SetClickWait(!clickWait)}>
                <View style={styles.row}>
                  <MaterialCommunityIcons name="clock" style={styles.icon} />
                  <Text style={styles.type}>Waiting list</Text>
                  <Text style={styles.typeResult}>{waiting}</Text>
                </View>
                {clickWait && (
                  <View>
                    <View style={styles.row}>
                      <Text style={styles.typeMore}>Movies</Text>
                      <Text style={styles.typeResult}>{waitingMovies}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.typeMore}>TV Series</Text>
                      <Text style={styles.typeResult}>{waitingSeries}</Text>
                    </View>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
          {/* Trzeba zrobić sprawdzanie/aktualizacje po zmianie gatunku list filmów */}
          {profileInformation &&
            profileInformation.genre1 &&
            GENRESLIST.map(
              (genre) =>
                profileInformation.genre1 === genre.name && (
                  <View key={1} style={styles.moviesGenre}>
                    <Text style={styles.title}>{genre.name}</Text>
                    <Genre id={genre.id} navigation={navigation} />
                  </View>
                )
            )}
          {profileInformation &&
            profileInformation.genre2 &&
            GENRESLIST.map(
              (genre) =>
                profileInformation.genre2 === genre.name && (
                  <View key={2} style={styles.moviesGenre}>
                    <Text style={styles.title}>{genre.name}</Text>
                    <Genre id={genre.id} navigation={navigation} />
                  </View>
                )
            )}
            {profileInformation &&
            profileInformation.genre3 &&
            GENRESLIST.map(
              (genre) =>
                profileInformation.genre3 === genre.name && (
                  <View key={3} style={styles.moviesGenre}>
                    <Text style={styles.title}>{genre.name}</Text>
                    <Genre id={genre.id} navigation={navigation} />
                  </View>
                )
            )}
        </ScrollView>
      </ImageBackground>
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
