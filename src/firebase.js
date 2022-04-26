import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdjdq8JsRSWKeHQYCHNzXm8nn29cOh-4s",
    authDomain: "ig-reels-a9b15.firebaseapp.com",
    projectId: "ig-reels-a9b15",
    storageBucket: "ig-reels-a9b15.appspot.com",
    messagingSenderId: "1018616208158",
    appId: "1:1018616208158:web:bb1026f5301bd9294e070f",
    measurementId: "G-W3051LNHFL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()

  export default db