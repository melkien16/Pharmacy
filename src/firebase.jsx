import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQXR63o89d2QpvtCao9beTheTMUB35wgE",
  authDomain: "pharmacy-locator-7ca1d.firebaseapp.com",
  projectId: "pharmacy-locator-7ca1d",
  storageBucket: "pharmacy-locator-7ca1d.firebasestorage.app",
  messagingSenderId: "125747935134",
  appId: "1:125747935134:web:e6d210f9c5e9e28e0c488f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
