import React from 'react';
import Navigetionbar from '../Page/Shared/Navigetionbar/Navigetionbar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Navigetionbar></Navigetionbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;