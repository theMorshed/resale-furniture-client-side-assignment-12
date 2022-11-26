import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SellerBuyers from './SellerBuyers';

const AllSellers = () => {
    const [allSellers, setAllSellers] = useState([]);
    useEffect(() => {
        axios('http://localhost:5000/allsellers')
            .then(result => {
                setAllSellers(result.data);
            });
    }, []);
    
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-500 mb-10">All Sellers:</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6'>
                {
                    allSellers.map(seller => <div className='border p-3 rounded-lg hover:border-primary' key={seller._id}>
                        <p className="text-gray-500">Name: { seller.name }</p>
                        <button className="btn btn-primary mt-6">Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllSellers;