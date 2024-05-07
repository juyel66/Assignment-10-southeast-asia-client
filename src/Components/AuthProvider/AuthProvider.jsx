import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loggedInUser, setLoggedInUser] = useState(null); 

    const [loading , setLoading] = useState(true);

    // create user 
    const createUser = (email, password, name )=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password ,  name)
    }

    // sign in user / login user 
    const signInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login 
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, new GoogleAuthProvider());
        
    }

    // github login 
    const githubLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, new GithubAuthProvider());
    }

    // logOut 
    const logOut = ()=>{
        setLoading(true)
        setUser(null)
        setLoggedInUser(null); // Reset loggedInUser state
        return signOut(auth)
    }

    // Set loggedInUser when user logs in
    useEffect(() => {
        if (user) {
            setLoggedInUser(user);
        } else {
            setLoggedInUser(null);
        }
    }, [user]);

    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user,
        loggedInUser, 
        loading,
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node.isRequired
}

export default AuthProvider;
