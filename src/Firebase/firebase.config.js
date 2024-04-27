
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaddW0lo7-1H1tfGjDaJBXZCwfdfSN52o",
  authDomain: "assignment-10-7cae0.firebaseapp.com",
  projectId: "assignment-10-7cae0",
  storageBucket: "assignment-10-7cae0.appspot.com",
  messagingSenderId: "898780254632",
  appId: "1:898780254632:web:70296165c06b3fe42e8d9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth ;
