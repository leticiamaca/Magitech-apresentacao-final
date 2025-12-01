import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSf5LqtonUkp945H-wvm9w0Q3vb6gWBTo",
  authDomain: "magitech-475718.firebaseapp.com",
  projectId: "magitech-475718",
  storageBucket: "magitech-475718.firebasestorage.app",
  messagingSenderId: "173339768413",
  appId: "1:173339768413:web:8cfecd8ab87852535dffb4",
  measurementId: "G-VD00S8D508"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
