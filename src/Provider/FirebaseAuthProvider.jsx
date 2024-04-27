import PropTypes from 'prop-types'; // ES6
import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/FirebaseAuth';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";


export const AuthProvider = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubAuthprovider = new GithubAuthProvider();

const FirebaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState(['zihad']);
    

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

    const userInfo = {
        user,
        createUser,
        loginUser,
        googleLogin,
        gitHubLogin
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