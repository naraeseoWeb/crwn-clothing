import { initializeApp } from 'firebase/app';
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCe_zyMlTf9wO5H6A7N-Au1PNvAG8Jl1hY',
  authDomain: 'crwn-clothing-db-7f117.firebaseapp.com',
  projectId: 'crwn-clothing-db-7f117',
  storageBucket: 'crwn-clothing-db-7f117.appspot.com',
  messagingSenderId: '323253046582',
  appId: '1:323253046582:web:4dfb51c9f71951b900f797',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
