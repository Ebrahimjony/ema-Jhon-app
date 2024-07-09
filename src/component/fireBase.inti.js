// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhbRhvuhCxtz7Wwrjo7E0fVmJ5Oh1RNO8",
  authDomain: "ema-john-shopping-4d509.firebaseapp.com",
  projectId: "ema-john-shopping-4d509",
  storageBucket: "ema-john-shopping-4d509.appspot.com",
  messagingSenderId: "60378419919",
  appId: "1:60378419919:web:0f3a17dd561153b0d2ddba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;