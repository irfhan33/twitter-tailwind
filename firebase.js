import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUZ1Eq5fRzy6aQ0JTYKxwFPXD4jb34mXg",
  authDomain: "twitter-tailwind.firebaseapp.com",
  projectId: "twitter-tailwind",
  storageBucket: "twitter-tailwind.appspot.com",
  messagingSenderId: "1017905080749",
  appId: "1:1017905080749:web:a457cc0856dead9a41d924",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
