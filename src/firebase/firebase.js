import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyACguaVLx6JDVIhtR7yXgURh2gdxS_503w",
    authDomain: "insta-clone-ea00a.firebaseapp.com",
    projectId: "insta-clone-ea00a",
    storageBucket: "insta-clone-ea00a.appspot.com",
    messagingSenderId: "1037126217311",
    appId: "1:1037126217311:web:f2bd409e755c8a941a35ea",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
