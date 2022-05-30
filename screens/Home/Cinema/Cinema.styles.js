import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#F39B36",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    bottom: 26,
  },
  backTheaters: {
    position: "absolute",
    //backgroundColor: "black",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: 120,
    height: 22,
    left: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
  },
  theaters: {
    color: "#F39B36",
    fontWeight: "bold",
  },
});

export default styles;
