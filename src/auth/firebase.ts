import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
const API_KEY:string= import.meta.env.VITE_API_KEY;

interface IfirebaseConfig{
    apiKey:string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

// ADD YOUR firebaseConfig

const firebaseConfig:IfirebaseConfig = {
  apiKey: API_KEY,
  authDomain : "react-authfb.firebaseapp.com" , 
  projectId : "react-authfb" , 
  storageBucket : "react-authfb.appspot.com" , 
  messagingSenderId : "490877149169" , 
  appId : "1:490877149169:web:b9d373a5df090a50e72e50" 
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();