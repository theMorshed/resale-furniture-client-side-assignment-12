import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const SellerProducts = () => {
    const {user} = useContext(AuthContext);
    const [sellerProducts, setSellerProducts] = useState([]);
    useEffect(() => {
        axios(`http://localhost:5000/sellerproducts/${user?.email}`)
        .then(result => {
            setSellerProducts(result.data);
        });
    }, [user?.email]);
    console.log(sellerProducts);
    return (
        <div className='mt-10'>
            <h2 className="text-3xl font-bold text-gray-500 mb-10">{user?.displayName}'s Items: </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
                {
                    sellerProducts.map(product => 
                    <div className="card lg:card-side shadow-xl" key={product._id}>
                        <figure className='w-1/2'><img className='h-full' src={product.photo} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>Status: Available/sold</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Advertise</button>
                            </div>
                        </div>
                    </div>)
                }                
            </div>
        </div>
    );
};

export default SellerProducts;