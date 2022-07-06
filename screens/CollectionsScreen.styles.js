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
    marginRight: 10,
  },
  column: {
    marginBottom: 40,
    flex: 2,
  },
  info: {
    flex: 2,
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
