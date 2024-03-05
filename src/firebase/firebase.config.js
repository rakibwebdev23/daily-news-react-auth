// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB74ws4muOoNxdsI7nsokDW39ijye3KHBM",
  authDomain: "react-daily-news.firebaseapp.com",
  projectId: "react-daily-news",
  storageBucket: "react-daily-news.appspot.com",
  messagingSenderId: "268910325588",
  appId: "1:268910325588:web:27054d2ab57ba15c2b62c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;