import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcNZH5JfWOoFhJbRo4YbOyjXkHHn9uB60",
  authDomain: "karakura-store.firebaseapp.com",
  projectId: "karakura-store",
  storageBucket: "karakura-store.appspot.com",
  messagingSenderId: "986711472002",
  appId: "1:986711472002:web:e24e78da104ec7d5e9019b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)