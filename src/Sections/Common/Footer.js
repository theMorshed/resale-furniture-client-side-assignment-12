import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content mt-10">
                <div>
                    <h2 className='text-3xl text-gray-500 font-bold'>Resale Furniture</h2>
                    <p>We sale furniture since 2020.</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Beedroom</Link>
                    <Link to='/' className="link link-hover">Kitchen</Link>
                    <Link to='/' className="link link-hover">Dinning</Link>
                    <Link to='/' className="link link-hover">Balcony</Link>
                </div>
                <div>
                    <span className="footer-title">About Us</span>
                    <Link to='/' className="link link-hover">Our Showrooms</Link>
                    <Link to='/' className="link link-hover">Contact Us</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <div className='text-lg text-center font-normal pb-4'>
                <p>&copy;Copyright by Resale Furniture 2025.</p>
            </div>
        </div>
    );
};

export default Footer;