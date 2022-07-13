// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0iDwAzG56oa-4lMaL2ajzCpv555X3zmU",
  authDomain: "murua-leto.firebaseapp.com",
  projectId: "murua-leto",
  storageBucket: "murua-leto.appspot.com",
  messagingSenderId: "449700084008",
  appId: "1:449700084008:web:d22af06a7040096f91f81d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db