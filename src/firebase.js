import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUu2Y1twKjAE7LyQ3IGOLdj80DYORNdbk",
  authDomain: "abar-project-1fe15.firebaseapp.com",
  projectId: "abar-project-1fe15",
  storageBucket: "abar-project-1fe15.appspot.com",
  messagingSenderId: "555806404449",
  appId: "1:555806404449:web:69eee861b5c2d115c61f20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);