import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../middleware/auth';

const PrivateRoute = ({ component: Component , ...rest }) => (
    isLogin() ? <Component {...rest}/> : <Navigate to="/"/>
)
export default PrivateRoute;