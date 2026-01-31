// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ بيانات الاتصال بمشروع Firebase الخاص بك
const firebaseConfig = {
  apiKey: "AIzaSyDUu2Y1twKjAE7LyQ3IGOLdj80DYORNdbk",
  authDomain: "abar-project-1fe15.firebaseapp.com",
  projectId: "abar-project-1fe15",
  storageBucket: "abar-project-1fe15.firebasestorage.app",
  messagingSenderId: "555806404449",
  appId: "1:555806404449:web:69eee861b5c2d115c61f20",
};

// ✅ تهيئة التطبيق
const app = initializeApp(firebaseConfig);

// ✅ تصدير auth و db بشكل صحيح
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };