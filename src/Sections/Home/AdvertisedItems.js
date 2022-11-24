import React from 'react';
import category_one from '../../assets/images/category/category_one.jpg';
import category_two from '../../assets/images/category/category_two.jpg';
import category_three from '../../assets/images/category/category_three.jpg';

const AdvertisedItems = () => {
    return (
        <div className='mt-10'>
            <h2 className="text-3xl font-bold text-gray-500">Advertised Items: </h2>
            <p className="text-xl text-gray-400">Products for sale</p>         
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                <div className="card lg:card-side shadow-xl">
                    <figure><img className='h-full' src={category_one} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side shadow-xl">
                    <figure><img className='h-full' src={category_two} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side shadow-xl">
                    <figure><img className='h-full' src={category_three} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItems;