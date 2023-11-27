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
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();