import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../auth/firebase";

import { toastError, toastSuccess, toastWarn } from "../helpers/Toast";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [student, setStudent] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      toastSuccess("Registered successfully");
      navigate("/login");

      console.log(userCredential);
    } catch (error) {
      console.log(error);
      toastError(error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/library");
      toastSuccess("Signed in successfully");
    } catch (error) {
      toastError(error.message);
      console.log(error);
    }
  };
  // dont need async constantly running and observ
  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setStudent({
          name: user.displayName || "",
          email: user.email,
          uid: user.uid,
        });
      } else {
        setStudent(null);
      }
    });
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      toastSuccess("Successfully logged out");
    } catch (error) {
      toastError(error.message);
    }
  };

  const googleProvider = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/library");
        toastSuccess("Logged in successfully");
      })
      .catch((error) => {
        toastError(error.message);
      });
  };

  const forgotPassword = (email) => {
    if (!email) {
      toastWarn("Please enter your email address.");
      return;
    }
  
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastError("Please check your mail");
      })
      .catch((error) => {
        toastError(getErrorCode(error));
      });
  };

  const values = { student, logOut, createUser, signIn, googleProvider,forgotPassword };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
