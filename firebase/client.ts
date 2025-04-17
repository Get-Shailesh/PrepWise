// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAhPrb_BJwBoR_fYat3OPWPYOC7d62Lgc",
    authDomain: "prep-wise-82d71.firebaseapp.com",
    projectId: "prep-wise-82d71",
    storageBucket: "prep-wise-82d71.firebasestorage.app",
    messagingSenderId: "732662081434",
    appId: "1:732662081434:web:87a652a3482c3bec84fc23",
    measurementId: "G-7F7DCJB6PH"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);