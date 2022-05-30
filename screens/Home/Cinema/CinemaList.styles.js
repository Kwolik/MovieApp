import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bot: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 2,
    paddingRight: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F39B36",
    marginLeft: 10,
  },
  info: {
    flexDirection: "row",
    marginLeft: 10,
  },
  year: {
    color: "#F39B36",
    fontWeight: "bold",
    marginRight: 20,
  },
  rate: {
    color: "#F39B36",
    fontWeight: "bold",
  },
});

export default styles;
