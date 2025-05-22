import { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase__config__';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logOut = () => {
        return signOut(auth);
    }


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    })

    const userInfo = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading
    }


    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;