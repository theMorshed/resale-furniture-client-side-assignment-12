import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        createUser('morshed.morshed.com', '123456')
        .then(res => {
            console.log(res.user);
        })
    }
    return (
        <div>
            <button className='btn btn-ghost' onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;