import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAD1DmksWBcSpqWqyGU2l1Ks2rJK3YaV4k",
  authDomain: "ni0duann-chatapp.firebaseapp.com",
  projectId: "ni0duann-chatapp",
  storageBucket: "ni0duann-chatapp.appspot.com",
  messagingSenderId: "688224196830",
  appId: "1:688224196830:web:79375b57ef520eb0940a4f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
