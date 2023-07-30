import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCCliylac_enqBHpF6QSUMUOZm9-QRCEAU",
  authDomain: "dan-todo-94133.firebaseapp.com",
  projectId: "dan-todo-94133",
  storageBucket: "dan-todo-94133.appspot.com",
  messagingSenderId: "783662863711",
  appId: "1:783662863711:web:29eb550edc74a6098752ea",
  measurementId: "G-ZX08M9P10Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()

export default getFirestore()

export const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user) )
        return unsub;
    }, [])

    return currentUser;
}