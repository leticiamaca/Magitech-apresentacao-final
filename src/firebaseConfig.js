// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Configuração do projeto Magitech no Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCSf5LqtonUkp945H-wvm9w0Q3vb6gWBTo",
  authDomain: "magitech-475718.firebaseapp.com",
  projectId: "magitech-475718",
  storageBucket: "magitech-475718.firebasestorage.app",
  messagingSenderId: "173339768413",
  appId: "1:173339768413:web:8cfecd8ab87852535dffb4",
  measurementId: "G-VD00S8D508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const provider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
