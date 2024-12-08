import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [imageKey, setimageKey] = useState(1);
  const provider = new GoogleAuthProvider();

  // const navigate = useNavigate();

  const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signedIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    // toast.loading("Sign out Processing..");

    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        setLoading(false);
        // navigate("/");
        toast.error("Signed out!");

        // console.log("sign Out", auth);
      })
      .catch((error) => {
        // An error happened.
        toast.error("Something went wrong" + error);
        console.log(error);

        setLoading(false);
      });
  };
  const updateUserProfile = (
    name = "James",
    Url = "https://cdn-icons-png.flaticon.com/512/7084/7084424.png"
  ) => {
    setLoading(true);
    // console.log(name, Url);

    toast.loading("profile updating..");

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: Url,
    })
      .then((e) => {
        // Profile updated!
        console.log("profile", e);
        // ...
        toast.success("profile updated");

        setLoading(false);
      })
      .catch((error) => {
        // An error occurred
        toast.error("Something went wrong" + error);

        // ...
      });
  };
  const passwordReset = (resetEmail) => {
    return sendPasswordResetEmail(auth, resetEmail);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        const uid = user.uid;
        // console.log(user)
        setLoading(false);
        setimageKey((pre) => pre + 1);
      } else {
        setLoading(false);
      }
    });
  }, []);
  const authData = {
    registerWithEmail,
    isLoading,
    setLoading,
    user,
    setUser,
    logOut,
    signedIn,
    googleLogin,
    updateUserProfile,
    passwordReset,
    imageKey,
    setimageKey,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
