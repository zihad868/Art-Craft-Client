import { useContext } from "react";
import { AuthProvider } from "../Provider/FirebaseAuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthProvider)
    // const location = useLocation()

    if(user){
        return children;
    }

    return <Navigate to='/signin' />
};

export default PrivateRoute;