// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";


import {getAuth,signInWithPopup,GoogleAuthProvider,signInWithRedirect} from 'firebase/auth'
import {initializeApp} from 'firebase/app';

const config = {
  apiKey: "AIzaSyBcOInsUxDbVD3o0wqr3FO6FA1Z9LDzHSE",
  authDomain: "crwn-db-a1ef5.firebaseapp.com",
  projectId: "crwn-db-a1ef5",
  storageBucket: "crwn-db-a1ef5.appspot.com",
  messagingSenderId: "669395680631",
  appId: "1:669395680631:web:dcc2b3db108e8107ba3572",
  measurementId: "G-2SDMPHSSLZ",
};

const firebaseapp = initializeApp(config);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account',
})

// // to save google user data
// export const createUserProfileDocument = async(userAuth, additionalData)=>{
//   if(!userAuth) return;
//   const userRef = firestore.doc(`users/${userAuth.uid}`);
//   const snapShot = await userRef.get();
//   if(!snapShot.exists){
//     const {displayName,email} = userAuth;
//     const createdAt = new Date();
//     try{
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData
//       });
//     }
//     catch(error){
//       console.log("Error");
//     }
//   }
//   return userRef;
// };


// firebase.initializeApp(config);

// export const auth = firebase.auth();
// // export const firestore = firebase.firestore();
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const SignInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;


export const auth = getAuth();
export const signInWithGooglePopup =()=> signInWithPopup(auth,provider)
 