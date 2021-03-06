import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignInForm from "../../components/sign-in/sign-in-form.component";
import SignUpForm from "../../components/sign-up/sign-up-form-component";
import './authentication.styles.scss'
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocFromAuth,
} from "../../utility/firebase/firebase.utils";

const Signin = () => {
  useEffect(() => {
    const redirectCall = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocFromAuth(response.user);
        console.log(userDocRef);
      }
    };
    redirectCall();
  }, []);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(response.user);
    console.log(userDocRef);
  };

  // const logGoogleRedirectUser = async () => {
  //   const response = await signInWithGoogleRedirect();
  //   console.log(response.user);
  // };
  return (
    <div className="authentication-container">
      
      <SignInForm />   
      <SignUpForm />
    </div>
  );
};

export default Signin;
