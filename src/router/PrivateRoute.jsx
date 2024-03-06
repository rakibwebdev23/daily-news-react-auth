import { useContext } from "react";
import { UserContext } from "../provider/UserProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const { user } = useContext(UserContext);
    const location = useLocation();

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;