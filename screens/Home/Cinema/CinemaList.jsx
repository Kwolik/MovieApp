import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./CinemaList.styles";
import noposter from "../../../assets/noposter.png";

export default function CinemaList(props) {
  return (
    <View>
      {props.poster ? (
        <Image
          style={{ width: props.wtd, height: 242 }}
          source={{ uri: props.poster }}
          alt="poster"
        />
      ) : (
        <Image style={{ width: props.wtd, height: 242 }} source={noposter} alt="poster" />
      )}
      <View style={styles.bot}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.info}>
          <Text style={styles.year}>{props.year}</Text>
          <Text style={styles.rate}>{props.rate !== 0 && props.rate}</Text>
        </View>
      </View>
    </View>
  );
}
