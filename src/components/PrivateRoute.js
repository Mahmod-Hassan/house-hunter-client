import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Loader from '../shared/Loader/Loader';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const isLoggedIn = localStorage.getItem('loggedIn');
    const location = useLocation();
    console.log('this is private route', user,loading);

    if(loading) {
        return <Loader></Loader>
    }
    
    if(user?.email || isLoggedIn) {
        return children;
    }
    else{
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    
}
export default PrivateRoute;