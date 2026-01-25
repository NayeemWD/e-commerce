import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDTsGCGojUqowg6AWtpxG9HJ6Al3qVU-r4",
    authDomain: "easyshop-auth.firebaseapp.com",
    projectId: "easyshop-auth",
    storageBucket: "easyshop-auth.firebasestorage.app",
    messagingSenderId: "693246002021",
    appId: "1:693246002021:web:35b7b2d2cbe626e48e178c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;