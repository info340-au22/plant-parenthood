// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBMwwOy41R3Eah7UU2ubc0hcvzPIn0JpN4",
    authDomain: "plant-parenthood-51300.firebaseapp.com",
    projectId: "plant-parenthood-51300",
    storageBucket: "plant-parenthood-51300.appspot.com",
    messagingSenderId: "269619476731",
    appId: "1:269619476731:web:9bc8265912e4e3fe7c985e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
