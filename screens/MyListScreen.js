import React from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import styles from "./MyListScreen.styles";
import MenuMyList from "./MyList/MenuMyList";
import MyList from "./MyList/MyList";
import photo from "../assets/back.png";

export default function MyListScreen({ navigation }) {
  const [load, SetLoad] = React.useState(true);
  const [visibility, SetVisibility] = React.useState("none");

  function componentDidMount() {
    setTimeout(() => {
      SetLoad(false);
      SetVisibility("flex");
    }, 700);
  }

  componentDidMount();

  return (
    <ImageBackground source={photo} style={styles.menu}>
      {load && (
        <ActivityIndicator style={styles.load} color={"#F39B36"} size={100} />
      )}
      <View style={{ display: visibility }}>
        <View>
          <MenuMyList navigation={navigation} />
          <ScrollView style={styles.black}>
            <MyList
              navigation={navigation}
              text={"Watched Movies"}
              list={"Watchlist"}
              type={"Movie"}
              value={0}
            />
            <MyList
              navigation={navigation}
              text={"Watched TV Series"}
              list={"Watchlist"}
              type={"Series"}
              value={1}
            />
            <MyList
              navigation={navigation}
              text={"Favorite Movies"}
              list={"Favorites"}
              type={"Movie"}
              value={0}
            />
            <MyList
              navigation={navigation}
              text={"Favorites TV Series"}
              list={"Favorites"}
              type={"Series"}
              value={1}
            />
            <MyList
              navigation={navigation}
              text={"Waiting list Movies"}
              list={"Waitinglist"}
              type={"Movie"}
              value={0}
            />
            <MyList
              navigation={navigation}
              text={"Waiting list TV Series"}
              list={"Waitinglist"}
              type={"Series"}
              value={1}
            />
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}
