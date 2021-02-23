import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyCP7_ixj6s2zizops39Eg8v8xPEtrxcUvs",
    authDomain: "fir-clickable-test.firebaseapp.com",
    databaseURL: "https://fir-clickable-test-default-rtdb.firebaseio.com",
    projectId: "fir-clickable-test",
    storageBucket: "fir-clickable-test.appspot.com",
    messagingSenderId: "43140431630",
    appId: "1:43140431630:web:b600c9fe67ec40c64ba15f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();