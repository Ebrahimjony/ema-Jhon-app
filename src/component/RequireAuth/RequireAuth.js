import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../fireBase.inti';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const [user]= useAuthState(auth);
    const location= useLocation();
    if(!user){
        return <Navigate to='/Login' state={{ from: location}} replace></Navigate>
    }
    return children;
    
};

export default RequireAuth;