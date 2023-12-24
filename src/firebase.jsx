// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBkTGVhTTj3q2lP0PcIUmKZkgXPMT-dOfk",
    authDomain: "the-shoppey-66657.firebaseapp.com",
    projectId: "the-shoppey-66657",
    storageBucket: "the-shoppey-66657.appspot.com",
    messagingSenderId: "2369653027",
    appId: "1:2369653027:web:f617aec644316300b82496",
    measurementId: "G-273DLNG5T0"
  };


// Initialize Firebase Authentication and get a reference to the service
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut};