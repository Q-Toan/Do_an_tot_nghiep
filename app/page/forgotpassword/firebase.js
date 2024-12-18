import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyASbgWEJ2rzvFyWpJCZdpkXhLHwDVMoN-Y",
    authDomain: "font-end-12.firebaseapp.com",
    projectId: "font-end-12",
    storageBucket: "font-end-12.firebasestorage.app",
    messagingSenderId: "126362779596",
    appId: "1:126362779596:web:e6357877064f60be266769",
    measurementId: "G-H6E1FKQ2YM"
};

firebase.initializeApp(firebaseConfig);

export default firebase