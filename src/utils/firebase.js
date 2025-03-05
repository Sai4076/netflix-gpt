// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiShsIjFzF10C2CqN3ffQ_jB1ZdYEnc_E",
  authDomain: "netflixgpt-5cd9b.firebaseapp.com",
  projectId: "netflixgpt-5cd9b",
  storageBucket: "netflixgpt-5cd9b.firebasestorage.app",
  messagingSenderId: "1032008503003",
  appId: "1:1032008503003:web:b030e27a11bc723009c6fe",
  measurementId: "G-YHK2X5VXD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();