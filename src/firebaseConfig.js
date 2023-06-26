import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/database";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBoHEhzIuMZHRJc5DGzP4Tvqo2UZnFifbs",
  authDomain: "nextauth-400d2.firebaseapp.com",
  databaseURL: "https://nextauth-400d2-default-rtdb.firebaseio.com",
  projectId: "nextauth-400d2",
  storageBucket: "nextauth-400d2.appspot.com",
  messagingSenderId: "181251954859",
  appId: "1:181251954859:web:6fc03395e6dfb3f74f3fee",
  measurementId: "G-Q0G26XZ6EE",
};
// src/firebase.js
const app = initializeApp(firebaseConfig);
// export const db = firebase.Database();
export const auth = getAuth();
