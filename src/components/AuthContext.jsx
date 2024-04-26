import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig'; // Import Firebase auth instance
import { GoogleAuthProvider } from 'firebase/auth';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserSignedIn(!!user);
    });

    return unsubscribe;
  }, [auth]);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ isUserSignedIn, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
