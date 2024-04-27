
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../Firebase/firebase.config'

export const AuthContext = createContext(null) ;

const AuthProvider = ({children}) => {
    
    const [user , setUser] = useState(null) ;
    const [loading , setLoading] = useState(true) ;

    const createUser = (email , pass) => {
        setLoading(true) ;
        return createUserWithEmailAndPassword(auth , email , pass) ;
    }

    const signIn = (email , pass) => {
        setLoading(true) ;
        return signInWithEmailAndPassword(auth , email , pass) ;
    }

    const googleLogin = () => {
        setLoading(true) ;
        const provider = new GoogleAuthProvider() ;
        return signInWithPopup(auth , provider) ;
    }

    const githubLogin = () => {
        setLoading(true) ;
        const provider = new GithubAuthProvider() ;
        return signInWithPopup(auth , provider) ;
    }

    const logOut = () => {
        return signOut(auth) ;
    }

    const setProfile = (name , photo) => {
        setLoading(true) ;
        return updateProfile(auth.currentUser , {
            displayName : name ,
            photoURL : photo ,
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , user => {
            setUser(user) ;
            setLoading(false) ;
        })
        return unSubscribe ;
    } , [])

    const authInfo = {
        user ,
        loading ,
        createUser ,
        setProfile , 
        signIn ,
        logOut ,
        googleLogin ,
        githubLogin ,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
