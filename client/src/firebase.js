// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d51e9.firebaseapp.com",
  projectId: "mern-blog-d51e9",
  storageBucket: "mern-blog-d51e9.appspot.com",
  messagingSenderId: "874478942104",
  appId: "1:874478942104:web:0e0be70a58c154a835dded"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);