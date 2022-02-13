import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOZ12z3Pu1nwTg8wH2OL7sb3H16nadW4I",
  authDomain: "musicapp-8eb78.firebaseapp.com",
  databaseURL: "https://musicapp-8eb78-default-rtdb.firebaseio.com",
  projectId: "musicapp-8eb78",
  storageBucket: "musicapp-8eb78.appspot.com",
  messagingSenderId: "229425694473",
  appId: "1:229425694473:web:f3a7b457e68267fc4fb5d8",
};

export const firebaseApp = initializeApp(firebaseConfig);
