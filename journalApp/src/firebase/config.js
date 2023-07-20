// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALMbWAoBtIVagwkjAjc0msWy2-YrHlSpA",
  authDomain: "react-cursos-14cc0.firebaseapp.com",
  projectId: "react-cursos-14cc0",
  storageBucket: "react-cursos-14cc0.appspot.com",
  messagingSenderId: "300247333743",
  appId: "1:300247333743:web:78b89c1ec3946c0b76869a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

