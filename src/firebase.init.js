// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXlm8y3Z_FIsEd8bGm3ppPoQ7vghM1hok",
    authDomain: "ema-jhon-simple-be653.firebaseapp.com",
    projectId: "ema-jhon-simple-be653",
    storageBucket: "ema-jhon-simple-be653.appspot.com",
    messagingSenderId: "328937965246",
    appId: "1:328937965246:web:b08a4fd6fb0a73c38b00ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
