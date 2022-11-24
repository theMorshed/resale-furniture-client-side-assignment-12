import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero py-16">            
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ml-10">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Welcome to our review services. If you have an account then login from here and watch people's attractive review.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-8">
                    <form className="card-body">
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
                        <button  className="btn btn-xs btn-primary btn-outline"><FaGoogle className="mr-2"></FaGoogle>Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;