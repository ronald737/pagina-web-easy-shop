// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBevAP_NMX71yuzSNNCF_ozgbV29QwfoUE",
  authDomain: "auth-es.firebaseapp.com",
  projectId: "auth-es",
  storageBucket: "auth-es.appspot.com",
  messagingSenderId: "133663784635",
  appId: "1:133663784635:web:81329db857b42eeb89b39e",
  measurementId: "G-C67667WME9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
