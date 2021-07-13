import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAvhCpCuh2QeEAomAYvMo_5gVKfHF8C_S4",
    authDomain: "social-app-3cb8b.firebaseapp.com",
    projectId: "social-app-3cb8b",
    storageBucket: "social-app-3cb8b.appspot.com",
    messagingSenderId: "120225593350",
    appId: "1:120225593350:web:fe12a389a80066ddb16b87",
    measurementId: "G-QCVHX31GD9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};