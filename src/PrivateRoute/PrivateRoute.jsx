import { useContext } from "react";
import { AuthProvider } from "../Provider/FirebaseAuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider)
    // const location = useLocation()

    if(user){
        return children;
    }

    console.log(user, loading);

    if(loading){
        return (
        <div className="flex justify-center items-center">
          <span className="loading loading-infinity loading-lg w-48 "></span>
        </div>
        )
    }


    

    return <Navigate to='/signin' />
};

export default PrivateRoute;