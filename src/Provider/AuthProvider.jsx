import React, { createContext } from 'react';
import { app } from '../Firebase/Firebase__config__';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from "firebase/auth";


export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const userInfo = {
        createUser
    }


    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;