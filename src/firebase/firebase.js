// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVKwxwRNLkhUkfaz85JhRCep6sFa_4n_g",
    authDomain: "challenge2-450f9.firebaseapp.com",
    projectId: "challenge2-450f9",
    storageBucket: "challenge2-450f9.appspot.com",
    messagingSenderId: "143914751792",
    appId: "1:143914751792:web:e9d3eee199554de16e5af5",
    measurementId: "G-ZV9MQYW7V3"
};
const app = initializeApp(firebaseConfig);

//export const auth = getAuth();
export const db = getFirestore();
export default  app;