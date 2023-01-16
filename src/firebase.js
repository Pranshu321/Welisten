// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBzAeFMXj-b4Jv3A1u1iTviR2p31m14JD4",
	authDomain: "breathein-e5b63.firebaseapp.com",
	projectId: "breathein-e5b63",
	storageBucket: "breathein-e5b63.appspot.com",
	messagingSenderId: "708533887559",
	appId: "1:708533887559:web:f45a06ad62bea7119a4762",
};

// Initialize Firebase
let app;

if (firebase.apps.length == 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();

export { db, auth, storage };
