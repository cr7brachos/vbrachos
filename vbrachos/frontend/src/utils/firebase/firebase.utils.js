// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
            getAuth, 
            signInWithPopup, 
            GoogleAuthProvider,
            createUserWithEmailAndPassword, 
            signInWithEmailAndPassword,
            signOut,
            onAuthStateChanged
        } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuScPIm5hw2i1NhGaJgsk1NetOUBZp3dE",
  authDomain: "vbrachos-db.firebaseapp.com",
  projectId: "vbrachos-db",
  storageBucket: "vbrachos-db.appspot.com",
  messagingSenderId: "93621593408",
  appId: "1:93621593408:web:c9291bfa1133a3958c06a5"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); //returns a new instance of GoogleAuthProvider
provider.setCustomParameters({ //every time we ask the provider he asks for an account
    prompt: "select_account"
}); 

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

/* δημιουργεί χρήστη βάσει του Authorization from Firestore*/
export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt, 
                ...additionalInformation
            });
        } catch (error) {
            console.log(error);
        }
    }

    return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    console.log(email, password);
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmalAndPassowrd = async (email, password) => {
    if (!email || !password) return;
    console.log(email, password);
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
