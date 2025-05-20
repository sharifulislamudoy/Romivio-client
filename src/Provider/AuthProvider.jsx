import React, { createContext } from 'react';
import { app } from '../Firebase/Firebase__config__';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

export const authContext = createContext();

const AuthProvider = () => {

    


    return <authContext></authContext>
};

export default AuthProvider;