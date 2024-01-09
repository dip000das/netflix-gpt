// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOBmTyFI3Dk_ZdYu8dRsRY7gSIOCUEtOc",
  authDomain: "netflix-gpt-e61ce.firebaseapp.com",
  projectId: "netflix-gpt-e61ce",
  storageBucket: "netflix-gpt-e61ce.appspot.com",
  messagingSenderId: "253008344616",
  appId: "1:253008344616:web:c0860c26df5071bf59671d",
  measurementId: "G-WTD29CT1Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics =  getAnalytics(app);
export const auth = getAuth();