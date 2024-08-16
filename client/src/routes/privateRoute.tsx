import React from "react";
import {useAuth} from "../contexts/authContext.tsx";
import {useNavigate} from "react-router-dom";


interface PrivateRouteProps {
    children: React.ReactNode;
}
export const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            {user ? children : navigate("/login")}
        </>
    );
};
