import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import StarWars from "./Collections/StarWars";
import Potter from "./Collections/Potter";
import Rings from "./Collections/Rings";
import Jones from "./Collections/Jones";
import Avengers from "./Collections/Avengers";
import Pirates from "./Collections/Pirates";
import Wick from "./Collections/Wick";
import Runner from "./Collections/Runner";
import Troops from "./Collections/Troops";
import Fast from "./Collections/Fast";
import Bond from "./Collections/Bond";
import AHS from "./Collections/AHS";
import photo from "../assets/back.png";

export default function CollectionsScreen({ navigation }) {
  const styles = StyleSheet.create({
    menu: {
      flex: 1,
    },
    body: {
      marginTop: 40,
    },
    name: {
      fontSize: 20,
      color: "#F39B36",
      fontWeight: "bold",
      marginTop: 10,
      marginLeft: 10,
    },
  });

  const [load, SetLoad] = React.useState(true);
  const [visibility, SetVisibility] = React.useState("none");

  function componentDidMount() {
    setTimeout(() => {
      SetLoad(false);
      SetVisibility("flex");
    }, 1100);
  }

  componentDidMount();

  return (
    <ImageBackground source={photo} style={styles.menu}>
      <ScrollView>
        <View style={{ display: visibility }}>
          <View style={styles.body}>
            <Text style={styles.name}>Star Wars</Text>
            <StarWars navigation={navigation} />
            <Text style={styles.name}>Harry Potter</Text>
            <Potter navigation={navigation} />
            <Text style={styles.name}>The Lord of the Rings and Hobbit</Text>
            <Rings navigation={navigation} />
            <Text style={styles.name}>James Bond</Text>
            <Bond navigation={navigation} />
            <Text style={styles.name}>Indiana Jones</Text>
            <Jones navigation={navigation} />
            <Text style={styles.name}>Avengers</Text>
            <Avengers navigation={navigation} />
            <Text style={styles.name}>Pirates of the Caribbean</Text>
            <Pirates navigation={navigation} />
            <Text style={styles.name}>John Wick</Text>
            <Wick navigation={navigation} />
            <Text style={styles.name}>The Maze Runner</Text>
            <Runner navigation={navigation} />
            <Text style={styles.name}>The Troops</Text>
            <Troops navigation={navigation} />
            <Text style={styles.name}>Fast and Furious</Text>
            <Fast navigation={navigation} />
            <Text style={styles.name}>American Horror Story</Text>
            <AHS navigation={navigation} />
          </View>
        </View>
      </ScrollView>
      {load && (
        <ActivityIndicator
          style={{
            position: "absolute",
            left: "50%",
            right: "50%",
            top: "50%",
            bottom: "50%",
          }}
          color={"#F39B36"}
          size={100}
        />
      )}
    </ImageBackground>
  );
}
