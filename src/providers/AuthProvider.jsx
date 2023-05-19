import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const gitHubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({});

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleUpdateProfile = async (name, image) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
      });
      Swal.fire("Profile update successful");
    } catch (error) {
      const toastError = "Profile update error:" + error.message;
      Swal.fire(toastError);
    }
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    registerUser,
    user,
    logOut,
    loginUser,
    googleSignIn,
    githubSignIn,
    handleUpdateProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
