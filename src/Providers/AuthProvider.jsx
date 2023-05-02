import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,

} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const handleCreateUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
      
     
    };
  
    const handleLogin = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const handleSignout = () => {
      return signOut(auth);
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
        setUser(loggedUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    const authInfo = {
      user,
      handleCreateUser,
      handleLogin,
      handleSignout
    };
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };

export default AuthProvider;