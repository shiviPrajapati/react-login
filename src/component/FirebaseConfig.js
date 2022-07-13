// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBDQS-CFjF8thYEiTvISvhkNHTq2jmG3OE",
  authDomain: "login-99be5.firebaseapp.com",
  projectId: "login-99be5",
  storageBucket: "login-99be5.appspot.com",
  messagingSenderId: "473336144436",
  appId: "1:473336144436:web:215a126c1c53f2fd45a061"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app