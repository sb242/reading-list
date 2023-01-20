import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDf5SzWNgNhMyzWDXQxuKieIXvDnxzDO0",
  authDomain: "readinglistapp-c115d.firebaseapp.com",
  projectId: "readinglistapp-c115d",
  storageBucket: "readinglistapp-c115d.appspot.com",
  messagingSenderId: "720880407136",
  appId: "1:720880407136:web:134201fe4cee4e58c7e905",
};

//init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

export { db };
