import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDtK2WcgSI1Z_GwGia8PhQ7biMoxWi9ne8",
    authDomain: "projectgm-bcd0a.firebaseapp.com",
    projectId: "projectgm-bcd0a",
    storageBucket: "projectgm-bcd0a.appspot.com",
    messagingSenderId: "48595149593",
    appId: "1:48595149593:web:2047cfdd207fe6c5ed5b88",
    measurementId: "G-CFKFHYMXP2"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();