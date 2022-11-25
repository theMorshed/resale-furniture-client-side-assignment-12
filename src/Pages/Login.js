import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Login = () => {
    const { logIn, setUser, googleLogin, setError } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(from, { replace: true });
                console.log(user);
                // const currentUser = {
                //     email: user.email
                // }

                // // get jwt token
                // fetch('https://psychologist-server.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         localStorage.setItem('psychologist-token', data.token);
                //         setUser(user);
                //         form.reset();
                //         navigate(from, { replace: true });
                //     });
            })
            .catch(err => {
                setError(err.message);
            });
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                setUser(user);
                saveUser(user.displayName, user.email, 'buyer');
                // const currentUser = {
                //     email: user.email
                // }

                // // get jwt token
                // fetch('https://psychologist-server.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         localStorage.setItem('psychologist-token', data.token);
                //         setUser(user);
                //         navigate(from, { replace: true });
                //     });
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
        <div className="hero py-16">            
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ml-10">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Welcome to our review services. If you have an account then login from here and watch people's attractive review.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-8">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <Link className="label-text-alt link link-hover ml-1" to='/register'>Don't have an account? Please register here.</Link>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='ml-8'>
                        <button onClick={handleGoogleLogin} className="btn btn-xs btn-primary btn-outline"><FaGoogle className="mr-2"></FaGoogle>Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;