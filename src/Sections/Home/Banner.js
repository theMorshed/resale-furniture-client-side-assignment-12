import React from 'react';
import banner from '../../assets/images/banner.jpg';

const Banner = () => {
    return (
        <div className="hero h-96" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Resale Furniture</h1>
                    <p className="mb-5">Hello Seller and Buyer you can buy and sell used furniture with this website..</p>
                    <button className="btn btn-primary">Start Selling</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;