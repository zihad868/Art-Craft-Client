import PropTypes from 'prop-types'; // ES6
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/FirebaseAuth';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";


export const AuthProvider = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubAuthprovider = new GithubAuthProvider();

const FirebaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubAuthprovider)
    }

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })

        return () => {
            unsubscribe;
        }
    }, [])

    const userInfo = {
        user,
        createUser,
        loginUser,
        googleLogin,
        gitHubLogin,
        logoutUser,
        updateUserProfile,
        loading
    }



    return (
        <AuthProvider.Provider value={userInfo}>
            { children }
        </AuthProvider.Provider>
    );
};

export default FirebaseAuthProvider;

FirebaseAuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}