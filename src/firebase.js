// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVyBq2WJ7ENc_z2_PWckq3Mckijvwyiv4",
  authDomain: "music-recommendations-52b23.firebaseapp.com",
  projectId: "music-recommendations-52b23",
  storageBucket: "music-recommendations-52b23.appspot.com",
  messagingSenderId: "456096458167",
  appId: "1:456096458167:web:be3e15524e614077203432",
  measurementId: "G-K1ZJNNXYB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);