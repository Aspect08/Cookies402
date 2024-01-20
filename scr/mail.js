// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDFDBFWWWLTpD6kqaOrf3i49xB9t-bxLrI",
  authDomain: "pawsguard-79aa0.firebaseapp.com",
  databaseURL: "https://pawsguard-79aa0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pawsguard-79aa0",
  storageBucket: "pawsguard-79aa0.appspot.com",
  messagingSenderId: "778272185845",
  appId: "1:778272185845:web:1a90ab3c72d7fad1ee54bc",
  measurementId: "G-E3ES908TZF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storageRef = ref(storage);

const imagesRef = ref(storage, 'images')