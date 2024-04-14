import firebase from "./firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add this import for Firestore

const firebaseConfig = {
    apiKey: "AIzaSyDnaAmWK1jc2EneZnEXhqRGMxuBw-VMayg",
    authDomain: "wedding-event-info-4bc80.firebaseapp.com",
    databaseURL: "https://wedding-event-info-4bc80-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wedding-event-info-4bc80",
    storageBucket: "wedding-event-info-4bc80.appspot.com",
    messagingSenderId: "289549822615",
    appId: "1:289549822615:web:af9c726adcf9690392d7d2",
    measurementId: "G-B2LBEYJWV1"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);