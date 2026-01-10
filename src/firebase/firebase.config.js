// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOCzTU_vXoZvzq8NvVsjKqq3jJELVSR_o",
  authDomain: "skillswap-ph.firebaseapp.com",
  projectId: "skillswap-ph",
  storageBucket: "skillswap-ph.firebasestorage.app",
  messagingSenderId: "842128915836",
  appId: "1:842128915836:web:0fc4c418e902abaf0578f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;