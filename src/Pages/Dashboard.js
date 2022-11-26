import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import useRole from '../hooks/useRole';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const [userRole] = useRole(user?.email);

    return (
        <div className='text-2xl text-primary mt-10'>
            Hello This Dashboard is for only {userRole} and You can access your Route and functionalities.
        </div>
    );
};

export default Dashboard;