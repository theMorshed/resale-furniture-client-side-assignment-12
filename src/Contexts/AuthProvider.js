import React, { createContext, useEffect, useState } from 'react';
import app from '../../src/Config/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [spinner, setSpinner] = useState(false);

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        localStorage.removeItem('psychologist-token');
        return signOut(auth);
    }

    const value = {
        logIn,
        user,
        setUser,
        googleLogin,
        logOut,
        createUser,
        updateUserProfile,
        error,
        setError,
        loading,
        setLoading,
        spinner,
        setSpinner
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;