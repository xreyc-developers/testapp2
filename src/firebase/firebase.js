// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQcfJleXUHruG0nyB-kL1AYtGKDD1aORc",
    authDomain: "challenge2-new.firebaseapp.com",
    projectId: "challenge2-new",
    storageBucket: "challenge2-new.appspot.com",
    messagingSenderId: "312413054019",
    appId: "1:312413054019:web:6354f100a7ed7de3e320f6",
    measurementId: "G-L6MCNZ50F6"
};
const app = initializeApp(firebaseConfig);

//export const auth = getAuth();
export const db = getFirestore();
export default  app;