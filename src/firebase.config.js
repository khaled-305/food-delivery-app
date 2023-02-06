import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9_kSW_TFgxBOYcE0jyDLiOqcjxrFZ1Tc",
  authDomain: "foodapp-327d5.firebaseapp.com",
  databaseURL: "https://foodapp-327d5-default-rtdb.firebaseio.com",
  projectId: "foodapp-327d5",
  storageBucket: "foodapp-327d5.appspot.com",
  messagingSenderId: "9717855678",
  appId: "1:9717855678:web:5288993000c8ff48ab75ef"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

