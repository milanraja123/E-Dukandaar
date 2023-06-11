import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDG1yHus3rqQfZQXiJv0lLgkE673pXsKCs",
  authDomain: "login-authentication-a19f1.firebaseapp.com",
  projectId: "login-authentication-a19f1",
  storageBucket: "login-authentication-a19f1.appspot.com",
  messagingSenderId: "327634368848",
  appId: "1:327634368848:web:09b0d5e6352bc666171455",
  measurementId: "G-T865HCLD7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};
