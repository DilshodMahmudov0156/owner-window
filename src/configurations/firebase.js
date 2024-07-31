import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAOPY46fDErj6XjlqjG0_pKu8rOqkWi8NY",
    authDomain: "fast-food-delivery-8e4e3.firebaseapp.com",
    databaseURL: "https://fast-food-delivery-8e4e3-default-rtdb.firebaseio.com",
    projectId: "fast-food-delivery-8e4e3",
    storageBucket: "fast-food-delivery-8e4e3.appspot.com",
    messagingSenderId: "610140957255",
    appId: "1:610140957255:web:609c91212c7b48b6141f62"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const photoStorage = getStorage(app);