import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menu: {
    flex: 1,
  },
  border: {
    margin: 10,
    flexDirection: "row",
  },
  name: {
    fontSize: 20,
    color: "#F39B36",
    fontWeight: "bold",
    marginLeft: 10,
  },
  movies: {
    margin: 5,
    width: "48%", //zmienić pozniej
  },
  series: {
    margin: 5,
    width: "48%", //zmienić pozniej
  },
  load: {
    position: "absolute",
    left: "50%",
    right: "50%",
    top: "50%",
    bottom: "50%",
  },
});

export default styles;
