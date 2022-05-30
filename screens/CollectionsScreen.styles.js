import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menu: {
    flex: 1,
  },
  border: {
    marginTop: 6,
    margin: 10,
    flexDirection: "row",
  },
  name: {
    fontSize: 20,
    color: "#F39B36",
    fontWeight: "bold",
    marginRight: 10,
  },
  column: {
    margin: 5,
    marginBottom: 50,
  },
  movies: {
    margin: 5,
    width: "48%", //zmienić pozniej
    flexDirection: "row",
    justifyContent: "center",
  },
  series: {
    margin: 5,
    width: "48%", //zmienić pozniej
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    fontSize: 28,
    color: "#F39B36",
    marginRight: 6,
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
