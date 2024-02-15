import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import database from 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyBE-NVIbafFqDzy-ne0pKqHfbHFQV90jYE",
  authDomain: "movie-486d3.firebaseapp.com",
  databaseURL: "https://movie-486d3-default-rtdb.firebaseio.com",
  projectId: "movie-486d3",
  storageBucket: "movie-4dd3a.appspot.com",
  messagingSenderId: "262833312014",
  appId: "1:262833312014:android:e75606b5d16e61f11f475f",
};
let Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
