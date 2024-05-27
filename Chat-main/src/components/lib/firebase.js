import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-a8a10.firebaseapp.com",
  projectId: "reactchat-a8a10",
  storageBucket: "reactchat-a8a10.appspot.com",
  messagingSenderId: "1037367406517",
  appId: "1:1037367406517:web:b5618fc1bb1aa68dc833fc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()