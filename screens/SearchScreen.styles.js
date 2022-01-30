import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
  },
  menu: {
    flex: 1,
  },
  search: {
    width: "90%",
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    margin: 2,
    fontSize: 24,
    marginTop: 5,
  },
  icon2: {
    margin: 2,
    marginTop: 4,
    fontSize: 28,
    alignItems: "center",
  },
  radioButton: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    // borderWidth: 2,
    // borderColor: "blue",
  },
  option: {
    flexDirection: "row",
    padding: 5,
    // borderWidth: 2,
    // borderColor: "red",
  },
  scroll: {
    marginBottom: 100,
  },
  result: {
    color: "#F39B36",
    fontSize: 24,
    marginTop: 20,
  },
});

export default styles;