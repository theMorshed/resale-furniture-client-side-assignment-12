import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../Sections/Common/LoadingSpinner';

const SellerRoute = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [userRole, UserRoleLoading] = useRole(user?.email);
    const location = useLocation();
    const isAdmin = userRole === 'buyer';

    if (loading || UserRoleLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user && isAdmin) {
        return children;
    }

    logOut();

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;