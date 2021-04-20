import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import StarWars from "./Collections/StarWars.jsx";
import Potter from "./Collections/Potter.jsx";
import Rings from "./Collections/Rings";
import Jones from "./Collections/Jones";
import Avengers from "./Collections/Avengers";
import Pirates from "./Collections/Pirates";
import Wick from "./Collections/Wick";
import Runner from "./Collections/Runner";
import Troops from "./Collections/Troops";
import Fast from "./Collections/Fast";

export default function CollectionsScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "black",
    },
    body: {
      marginTop: 40,
    },
    name: {
      fontSize: 20,
      color: "white",
      fontWeight: "bold",
      marginTop: 10,
      marginLeft: 10,
    },
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.name}>Star Wars</Text>
          <StarWars />
          <Text style={styles.name}>Harry Potter</Text>
          <Potter />
          <Text style={styles.name}>The Lord of the Rings and Hobbit</Text>
          <Rings />
          <Text style={styles.name}>Indiana Jones</Text>
          <Jones />
          <Text style={styles.name}>Avengers</Text>
          <Avengers />
          <Text style={styles.name}>Pirates of the Caribbean</Text>
          <Pirates />
          <Text style={styles.name}>John Wick</Text>
          <Wick />
          <Text style={styles.name}>The Maze Runner</Text>
          <Runner />
          <Text style={styles.name}>The Troops</Text>
          <Troops />
          <Text style={styles.name}>Fast and Furious </Text>
          <Fast />
        </View>
      </View>
    </ScrollView>
  );
}
