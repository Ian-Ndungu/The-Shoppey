// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN76hYTAMlMqB0t6I3agq_O4rOjsSvuBw",
  authDomain: "the-shoppey.firebaseapp.com",
  projectId: "the-shoppey",
  storageBucket: "the-shoppey.appspot.com",
  messagingSenderId: "703358051759",
  appId: "1:703358051759:web:6d16aa82ce837142187b5a",
  measurementId: "G-YNJKTGTYF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };