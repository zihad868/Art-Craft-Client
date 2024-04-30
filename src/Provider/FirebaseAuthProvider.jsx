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
    const [loding, setLoding] = useState(true);
    

    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoding(true);
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubLogin = () => {
        setLoding(true);
        return signInWithPopup(auth, gitHubAuthprovider)
    }

    const logoutUser = () => {
        setLoding(true);
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
            setLoding(false);
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
        loding
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