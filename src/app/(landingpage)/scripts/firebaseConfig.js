// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCI9ftaKWWx_IEBG80G7fXjH0A538ox3Sk",
    authDomain: "inspire-website-4395a.firebaseapp.com",
    projectId: "inspire-website-4395a",
    storageBucket: "inspire-website-4395a.firebasestorage.app",
    messagingSenderId: "529626082020",
    appId: "1:529626082020:web:f7d20da53c21b143c41af1",
    measurementId: "G-KK7L42R6NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };