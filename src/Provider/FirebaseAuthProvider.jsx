import PropTypes from 'prop-types'; // ES6
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/FirebaseAuth';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";


export const AuthProvider = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubAuthprovider = new GithubAuthProvider();

const FirebaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubAuthprovider)
    }

    const logoutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
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
        logoutUser
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