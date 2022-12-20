import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRZSgzmMTdHpD_siPGIOgVoK_xTDRhHvU",
  authDomain: "chat-room-fea83.firebaseapp.com",
  projectId: "chat-room-fea83",
  storageBucket: "chat-room-fea83.appspot.com",
  messagingSenderId: "587393897679",
  appId: "1:587393897679:web:45af73544ff6a2300713ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);