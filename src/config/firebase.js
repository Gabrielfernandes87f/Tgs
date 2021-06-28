import * as firebase from 'firebase';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBw95eie3x7194kZ996sFKB-mQF5zrqW68",
    authDomain: "firetgs-69a2c.firebaseapp.com",
    projectId: "firetgs-69a2c",
    storageBucket: "firetgs-69a2c.appspot.com",
    messagingSenderId: "1062444806314",
    appId: "1:1062444806314:web:c95196961bf4c9a46660d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
