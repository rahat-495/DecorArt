
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const CardsDetailP = ({children}) => {

    const {user , loading} = useContext(AuthContext) ;
    const location = useLocation() ;
    console.log(location);

    if(loading){
        return <span className="loading min-h-[1vh] mx-auto min-w-[20%] flex items-center justify-center loading-spinner loading-lg"></span>
    }

    if(user){
        return children ;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default CardsDetailP;
