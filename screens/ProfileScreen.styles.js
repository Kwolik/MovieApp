import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
  },
  menu: {
    flex: 1,
  },
  buttonEdit: {
    position: "absolute",
    backgroundColor: "#F39B36",
    width: 80,
    height: 80,
    right: 10,
    top: 10,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  edit: {
    color: "#16161A",
    fontSize: 40,
  },
  logout: {
    color: "#F39B36",
    fontSize: 32,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#16161A",
  },
  textLogout: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F39B36",
  },
  buttonLogout: {
    position: "absolute",
    width: 80,
    height: 80,
    left: 10,
    top: 10,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    height: 160,
    width: 160,
    alignSelf: "center",
    borderRadius: 80,
  },
  name: {
    fontSize: 28,
    color: "#F39B36",
    margin: 10,
  },
  moreInfo: {
    flexDirection: "row",
    justifyContent: "center",
  },
  email: {
    fontSize: 18,
    color: "#B2B2B2",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  table: {
    flexDirection: "row",
    marginTop: 40,
  },
  category: {
    fontSize: 18,
    color: "#B2B2B2",
    marginTop: 2,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#B2B2B2",
    marginBottom: 2,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 32,
    color: "#E1E1E1",
    margin: 10,
    padding: 2,
  },
  type: {
    color: "#B2B2B2",
    fontSize: 18,
    width: 200,
    marginLeft: 10,
  },
  typeResult: {
    color: "#B2B2B2",
    fontSize: 18,
    marginLeft: 10,
    width: 58,
    textAlign: "right",
    fontWeight: "bold",
    paddingRight: 2,
  },
  typeMore: {
    color: "#B2B2B2",
    fontSize: 18,
    width: 200,
    marginLeft: 66,
    marginTop: 5,
    marginBottom: 5,
  },
  moviesGenre: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: "#F39B36",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
});

export default styles;
