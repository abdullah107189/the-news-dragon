import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <Spinner  animation="border" />;
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivetRoutes;