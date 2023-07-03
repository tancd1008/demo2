// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLjh-sg9_u863rtORSzpA1VGFaaKQkKlI",
  authDomain: "demo2-19259.firebaseapp.com",
  projectId: "demo2-19259",
  storageBucket: "demo2-19259.appspot.com",
  messagingSenderId: "979633185247",
  appId: "1:979633185247:web:ffc67df4d4d8cd0ef3646a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;