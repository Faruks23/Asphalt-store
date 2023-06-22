import React, { createContext, useEffect, useState } from 'react';
  import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firbase.config';

export const AuthContext=createContext()
const AuthProvider = ({ children }) => {
  const [user, setUSer] = useState(null)
  const [loding,setLoging]=useState(true)

  const auth = getAuth(app);
const provider = new GoogleAuthProvider();

  // create user with email and password
  const createUser = (email, password) => {
    setLoging(false);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // sign in user with email and password
  const Login = (email, password) => {
     setLoging(false);
    return signInWithEmailAndPassword(auth, email, password);
  }
  // google sign in user
  const loinWithGoogle = () => {
     setLoging(false);
    return signInWithPopup(auth, provider);
  }
  // get logged in user form firebase

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUSer(user)
      console.log("loging use find");
      setLoging(false)
    })
    return () => {
      unsubscribe();
    }
  }, [])
  
  //Logout user
  const Logout = () => {
     setLoging(false);
    return signOut(auth)
  }

  
  const AuthUser = {
    createUser,
    Login,
    loinWithGoogle,
    user,
    Logout,
    loding,
  };
  return (
    <div>
      <AuthContext.Provider value={AuthUser}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;