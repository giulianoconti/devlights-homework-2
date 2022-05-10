// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3be9UwOjQkn6JxXPjwgn128_2-SRmfn8",
  authDomain: "devlights-homework2.firebaseapp.com",
  projectId: "devlights-homework2",
  storageBucket: "devlights-homework2.appspot.com",
  messagingSenderId: "631964255349",
  appId: "1:631964255349:web:cbd597a74bf3f2fa79e43c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
