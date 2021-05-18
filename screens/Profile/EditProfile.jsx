import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  ScrollView,
  TextInput,
} from "react-native";
import Firebase from "../../Firebase";
import mainContext from "../../context/mainContext";
import photo from "../../assets/back.png";

export default function EditProfile() {
  const styles = StyleSheet.create({
    menu: {
      flex: 1,
    },
    title: {
      fontSize: 24,
      color: "#F39B36",
      marginTop: 10,
      marginBottom: 10,
    },
    component: {
      margin: 10,
    },
    input: {
      height: 50,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 20,
      paddingLeft: 5,
      paddingBottom: 10,
      color: "#E1E1E1",
      borderColor: "rgba(0,0,0,0.00001)",
    },
    info: {
      marginLeft: 5,
      marginTop: 10,
      fontSize: 18,
      color: "#B2B2B2",
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 10,
      marginBottom: 10,
    },
    genre: {
      width: 120,
      height: 40,
      backgroundColor: "#9A9A9B",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      borderRadius: 60,
      marginLeft: 5,
      marginRight: 5,
    },
    textButton: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#16161A",
    },
    modal: {
      backgroundColor: "#000000aa",
      flex: 1,
    },
    choice: {
      height: 40,
      backgroundColor: "#9A9A9B",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      borderRadius: 60,
    },
    base: {
      height: 40,
      backgroundColor: "#9B672E",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      borderRadius: 60,
    },
  });

  const { handleEmail, handlePassword } = React.useContext(mainContext);
  const [profileInformation, SetProfileInformation] = React.useState();
  const [name, SetName] = React.useState();
  const [age, SetAge] = React.useState();
  const [email, SetEmail] = React.useState();
  const [password, SetPassword] = React.useState();
  const [visib, SetVisib] = React.useState(false);
  const [genreValue, SetGenreValue] = React.useState(0);
  const [genreOne, SetGenreOne] = React.useState();
  const [genreTwo, SetGenreTwo] = React.useState();
  const [genreThree, SetGenreThree] = React.useState();
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "TV Movie",
    "Thriller",
    "War",
    "Western",
  ];

  React.useEffect(() => {
    Firebase.database()
      .ref(`/${idUser}/User`)
      .once("value", (snapshot) => {
        SetProfileInformation(snapshot.val());
        SetName(snapshot.val().name);
        SetAge(snapshot.val().age && snapshot.val().age);
        SetEmail(snapshot.val().email);
        SetGenreOne(snapshot.val().genre1 ? snapshot.val().genre1 : "Selected");
        SetGenreTwo(snapshot.val().genre2 ? snapshot.val().genre2 : "Selected");
        SetGenreThree(
          snapshot.val().genre3 ? snapshot.val().genre3 : "Selected"
        );
      });
  }, []);

  function ChoiceValue(g) {
    if (genreValue === 1) SetGenreOne(g);
    if (genreValue === 2) SetGenreTwo(g);
    if (genreValue === 3) SetGenreThree(g);
    SetVisib(false);
  }

  if (profileInformation) {
    return (
      <ImageBackground source={photo} style={styles.menu}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.component}>
              <Text style={styles.title}></Text>
              <Text style={styles.info}>Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={(name) => SetName(name)}
                value={name}
                underlineColorAndroid="#F39B36"
              />
              <Text style={styles.info}>Age</Text>
              <TextInput
                style={styles.input}
                onChangeText={(age) => SetAge(age)}
                value={age}
                underlineColorAndroid="#F39B36"
              />
              <Text style={styles.info}>Genres</Text>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.genre}
                  onPress={() => {
                    SetGenreValue(1);
                    SetVisib(true);
                  }}
                >
                  <Text style={styles.textButton}>{genreOne}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.genre}
                  onPress={() => {
                    SetGenreValue(2);
                    SetVisib(true);
                  }}
                >
                  <Text style={styles.textButton}>{genreTwo}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.genre}
                  onPress={() => {
                    SetGenreValue(3);
                    SetVisib(true);
                  }}
                >
                  <Text style={styles.textButton}>{genreThree}</Text>
                </TouchableOpacity>
              </View>
              <Modal transparent={true} visible={visib}>
                <View style={styles.modal}>
                  <ScrollView style={{ margin: 50, marginBottom: 100 }}>
                    {genres.map((genre, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.choice}
                        onPress={() => ChoiceValue(genre)}
                      >
                        <Text>{genre}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </Modal>
              <TouchableOpacity
                style={styles.base}
                onPress={() => {
                  Firebase.database()
                    .ref(`/${idUser}/User`)
                    .set({
                      id: idUser,
                      email: email,
                      name: name && name,
                      age: age && age,
                      genre1: genreOne !== "Selected" && genreOne,
                      genre2: genreTwo !== "Selected" && genreTwo,
                      genre3: genreThree !== "Selected" && genreThree,
                    });
                  alert("All changes were saved");
                }}
              >
                <Text style={styles.textButton}>Save</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.component}>
              <Text style={styles.title}></Text>
              <Text style={styles.info}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={(email) => SetEmail(email)}
                value={email}
                underlineColorAndroid="#F39B36"
              />
              <TouchableOpacity
                style={styles.base}
                onPress={() => handleEmail(email)}
              >
                <Text style={styles.textButton}>Save New Email</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.component}>
              <Text style={styles.title}></Text>
              <Text style={styles.info}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={(password) => SetPassword(password)}
                value={password}
                secureTextEntry
                underlineColorAndroid="#F39B36"
              />
              <TouchableOpacity
                style={styles.base}
                onPress={() => handlePassword(password)}
              >
                <Text style={styles.textButton}>Save New Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  } else {
    return (
      <View style={styles.menu}>
        <ImageBackground source={photo} style={styles.menu}>
          <ActivityIndicator style={{ flex: 1 }} color={"#F39B36"} size={100} />
        </ImageBackground>
      </View>
    );
  }
}
