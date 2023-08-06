import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN3L4nOZTPgypUrxVM-AdJlP87nlBc00Q",
  authDomain: "blog-cced3.firebaseapp.com",
  projectId: "blog-cced3",
  storageBucket: "blog-cced3.appspot.com",
  messagingSenderId: "974304069118",
  appId: "1:974304069118:web:7017b9afffe1995cdf6caf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };