import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUserProfile, error, setError } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const fullName = form.fullName.value;
        const role = form.role.value;
        const userProfile = { displayName: fullName};
        createUser(email, password)
            .then(result => {
                updateUserProfile(userProfile)
                    .then(() => {
                        saveUser(fullName, email, role);
                    })
                    .catch(err => {
                        setError(err.message);
                    });
                setUser(result.user);
                form.reset();
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            });
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('User Created successfully.');
            })
    }

    return (
        <div className="hero py-10 my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ml-10">
                    <h1 className="text-5xl font-bold">Please Register Here</h1>
                    <p className="py-6">You don't have an account then make an account for learning from an awesome instructor.. Just register and enjoy your learning with new world!!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="fullName" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Role</span>
                            </label>
                            <select name="role" className="select select-bordered w-full">
                                <option value="general">General</option>
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label mt-4">
                                <Link to='/login' className="label-text-alt link link-hover">Already Have an account. Login here</Link>
                            </label>
                        </div>
                        {
                            error ?
                                <p className='text-red-500 font-semibold'>{error}</p>
                                :
                                ''
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;