// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiY00VmyyPJkNQsahExpCcFHQR1PFgSm8",
  authDomain: "redeagleproject-b8f9e.firebaseapp.com",
  projectId: "redeagleproject-b8f9e",
  storageBucket: "redeagleproject-b8f9e.appspot.com", // ✅ fixed this
  messagingSenderId: "88148342309",
  appId: "1:88148342309:web:2968b73e2c5fcceddf71cc",
  measurementId: "G-NCZ0MRGM7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };