import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuc8VovKCiVvpXhyDSpizJtHW-Zuhfe6c",
  authDomain: "ask-chat-37d57.firebaseapp.com",
  projectId: "ask-chat-37d57",
  storageBucket: "ask-chat-37d57.appspot.com",
  messagingSenderId: "137000808834",
  appId: "1:137000808834:web:889eb513f3c6c82ac91f9b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
