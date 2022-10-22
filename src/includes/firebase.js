import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAfQNuaPHFpP2gO4UdhX5on2pjZRUTBLNQ",
    authDomain: "music-app-24.firebaseapp.com",
    projectId: "music-app-24",
    storageBucket: "music-app-24.appspot.com",
    messagingSenderId: "271366843589",
    appId: "1:271366843589:web:5da9200a9633a5457254ac"
};

//* Initialize firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

//! for offline
db.enablePersistence().catch((error) => {
    console.log(`Firebase persistance error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments")

export {
    auth, db, usersCollection, songsCollection, storage, commentsCollection
}