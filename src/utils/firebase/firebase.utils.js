import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCuoV-1L6C-koGlsKhXqBARZzbzyKxg72o",
  authDomain: "clothing018.firebaseapp.com",
  projectId: "clothing018",
  storageBucket: "clothing018.appspot.com",
  messagingSenderId: "1050614868320",
  appId: "1:1050614868320:web:2c788629f0ca5ad754d605",
  measurementId: "G-F9PYZTM5C4"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation={}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt, ...additionalInformation,
      });
    } catch (error) {
      console.log("Error Creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth,email,password);
};

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth,email,password);
};