import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const DashboardRedirect = () => {
    const { isAdmin, isAuthenticated } = useSelector((state) => state.auth);

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />;
    }

    return (
        isAdmin ? <Outlet /> : <Navigate to='/' replace />
    );

};


export default DashboardRedirect;