// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: 'mern-blog-b327f.firebaseapp.com',
  // projectId: 'mern-blog-b327f',
  // storageBucket: 'mern-blog-b327f.appspot.com',
  // messagingSenderId: '699397991367',
  // appId: '1:699397991367:web:88ff565ef72a182d6b87e2',
  apiKey: "AIzaSyATarMGt1TRzZpmUC6RYVYY5m9xhCNtCQY",
  authDomain: "blog-e071f.firebaseapp.com",
  projectId: "blog-e071f",
  storageBucket: "blog-e071f.appspot.com",
  messagingSenderId: "159093936753",
  appId: "1:159093936753:web:9a767a016d1fb5c8f141d0",
  measurementId: "G-5V99CPSB1R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
