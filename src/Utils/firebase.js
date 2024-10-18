
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "",
  authDomain: "pet-store-69458.firebaseapp.com",
  projectId: "pet-store-69458",
  storageBucket: "pet-store-69458.appspot.com",
  messagingSenderId: "185119389022",
  appId: "1:185119389022:web:059d9c685b40a3ab91cbcf",
  measurementId: "G-58832P95SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storageDB = getStorage(app);


export{auth,db,storageDB,analytics}