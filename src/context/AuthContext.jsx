import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup,sendPasswordResetEmail } from "firebase/auth";

import { createContext, useEffect, useState } from "react";

import { auth } from "../js/config";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

    const [user, setUser] = useState()

    //registrar o crear usuario con correo y contraseña(firebase)
    const signUp = async (email, password)=> await createUserWithEmailAndPassword(auth, email,password);

    //loguearse con contraseña y email (firebase)
    const signIn = async (email, password) => await signInWithEmailAndPassword(auth, email, password);

    //estado si el usuario si encuentra activo
    useEffect(()=>{
            onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser)
            })
    },[])

    //cerrar session (firebase)
    const logout = async ()=> await signOut(auth)

    //autenticacion con cuenta google (firebase)
    const singInWithGoogle = async ()=> {
        const googleProvider = new GoogleAuthProvider()
        return await signInWithPopup(auth, googleProvider)     
    }

    const resetPassword = async (email)=>{
        await sendPasswordResetEmail(auth, email)        
    }

    return(
        <AuthContext.Provider value={{
            signUp, 
            signIn, 
            user, 
            logout, 
            singInWithGoogle, 
            resetPassword}}>
            { children }
        </AuthContext.Provider>
        
    )
}

