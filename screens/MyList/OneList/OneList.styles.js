import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menu: {
    margin: 5,
  },
  column: {
    flexDirection: "row",
  },
  poster: {
    width: 60, //40   160
    height: 96, //64   256
    borderRadius: 10,
  },
  bottom: {
    marginLeft: 10,
    justifyContent: "center",
    marginRight: 60,
  },
  title: {
    color: "#E1E1E1",
    margin: 2,
    fontSize: 16,
    fontWeight: "bold",
  },
  year: {
    color: "#B2B2B2",
    margin: 2,
  },
});

export default styles;
