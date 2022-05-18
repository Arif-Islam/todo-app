// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqoLua3MNiTHjYv0yAb375fbDgxCw1SKE",
    authDomain: "task-manager-4250d.firebaseapp.com",
    projectId: "task-manager-4250d",
    storageBucket: "task-manager-4250d.appspot.com",
    messagingSenderId: "312535818298",
    appId: "1:312535818298:web:72dcfc2eeae2d6afd69503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;