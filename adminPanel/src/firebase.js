import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyChUhRdKkqhGcdCPbR2DbhB15iVD6LD2Dk",
  authDomain: "khusniddin-771e8.firebaseapp.com",
  databaseURL: "https://khusniddin-771e8-default-rtdb.firebaseio.com",
  projectId: "khusniddin-771e8",
  storageBucket: "khusniddin-771e8.appspot.com",
  messagingSenderId: "545885442460",
  appId: "1:545885442460:web:71be747d620bad68c03859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);