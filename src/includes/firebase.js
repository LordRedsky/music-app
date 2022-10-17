import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAfQNuaPHFpP2gO4UdhX5on2pjZRUTBLNQ",
    authDomain: "music-app-24.firebaseapp.com",
    projectId: "music-app-24",
    storageBucket: "music-app-24.appspot.com",
    messagingSenderId: "271366843589",
    appId: "1:271366843589:web:5da9200a9633a5457254ac"
};


//? Initialize firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export {
    auth, db, usersCollection,
}