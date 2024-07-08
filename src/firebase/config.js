import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB21WpWOsxEv4-0ZvNro1_se7jmnkUw75s",
  authDomain: "book-list-with-firebase-c145e.firebaseapp.com",
  projectId: "book-list-with-firebase-c145e",
  storageBucket: "book-list-with-firebase-c145e.appspot.com",
  messagingSenderId: "17650580055",
  appId: "1:17650580055:web:8f2d47df586a6e6b3d0112"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)