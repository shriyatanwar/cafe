// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { useEffect, useState } from "react";

// new add 
import { getFirestore, doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCCAB1HBoveyodH8xJqkeTdxzXJdFSm4q0",
  authDomain: "cafeform-5e99c.firebaseapp.com",
  projectId: "cafeform-5e99c",
  storageBucket: "cafeform-5e99c.firebasestorage.app",
  messagingSenderId: "97237879299",
  appId: "1:97237879299:web:3f91a6bfe00babf1e31c36",
  measurementId: "G-ETWYK2QLDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// getAuth()
const auth = getAuth()


//signup

// export function signup (email, password){
//     return createUserWithEmailAndPassword(auth,email,password)
// }

const db = getFirestore(app);

export async function signup(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

const userDoc = doc(db, "users", user.uid);
await setDoc(userDoc, {
  email,
  name: "",
  mobile: "",
  createdAt: new Date(),
});

return user;
}

// active user 
export function useAuth(){
  const [current,setCurrent]=useState("")
  useEffect(()=>{
    let x=onAuthStateChanged(auth,user=>setCurrent(user))
    return x
  },[])
  return current
}

// signin
export function signin (email,password){
  return signInWithEmailAndPassword(auth, email,password)
}

//logout
export function logout(){
  return signOut(auth)
}