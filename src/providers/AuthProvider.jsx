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
  const [loading, setLoading] = useState(true);

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
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Profile Update Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      const toastError = "Profile update error:";
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: toastError,
        showConfirmButton: false,
        timer: 1500,
      });
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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
      if (currentUser && currentUser.email) {
        const loggedUser = {
          email: currentUser.email,
        };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("The-Toy-Lab-Token", data.token);
          });
      } else {
        localStorage.removeItem("The-Toy-Lab-Token");
      }
    });
    return () => {
      return unsubscribe();
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
