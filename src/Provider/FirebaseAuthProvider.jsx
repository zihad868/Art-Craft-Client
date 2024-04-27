import PropTypes from 'prop-types'; // ES6
import { createContext, useState } from "react";


export const AuthProvider = createContext(null)

const FirebaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState(['zihad']);

    const userInfo = {
        user,
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