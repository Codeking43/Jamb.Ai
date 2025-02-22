// Firebase Configuration Module
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDC7n9YyHLAIwxIr86T1Z6R_bi2fiyPlG4",
    authDomain: "instagram-page-6a449.firebaseapp.com",
    databaseURL: "https://instagram-page-6a449-default-rtdb.firebaseio.com",
    projectId: "instagram-page-6a449",
    storageBucket: "instagram-page-6a449.firebasestorage.app",
    messagingSenderId: "490527916378",
    appId: "1:490527916378:web:c290f53fc48cbe71673363"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
