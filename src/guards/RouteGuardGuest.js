import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

export const RouteGuardGuest = ({
    children
}) => {
    const isAuthenticated = localStorage.getItem('auth') ? true : false;

    if(isAuthenticated){
        return <Navigate to='/login' />; 
    }

    return children ? children : <Outlet />;
}