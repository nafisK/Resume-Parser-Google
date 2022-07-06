import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCbAa6YDdhdAP6XxIIINHCDGIG3wp0delU",
  authDomain: "resume-parser-a87cb.firebaseapp.com",
  projectId: "resume-parser-a87cb",
  storageBucket: "resume-parser-a87cb.appspot.com",
  messagingSenderId: "301822763498",
  appId: "1:301822763498:web:04a06d60446574f525d293",
  measurementId: "G-3X0ZVSCMQC",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app, "gs://resume-parser-a87cb.appspot.com")
export { storage, db }
