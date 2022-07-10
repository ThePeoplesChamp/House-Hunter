import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "house-marketplace-app-4305f.firebaseapp.com",
  projectId: "house-marketplace-app-4305f",
  storageBucket: "house-marketplace-app-4305f.appspot.com",
  messagingSenderId: "358861227230",
  appId: "1:358861227230:web:098d13e9488ca9dcd5ee4f",
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
export const auth = getAuth()



