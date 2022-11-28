import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const [allBuyers, setAllBuyers] = useState([]);
    useEffect(() => {
        axios('https://resale-server.vercel.app/allbuyers')
            .then(result => {
                setAllBuyers(result.data);
            });
    }, []);

    const handleDelete = (id, name) => {
        fetch(`https://resale-server.vercel.app/deleteBuyer/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`${name} deleted successfully.`);
            })
    }

    return (
        <div>
            {allBuyers?.length > 0 ? <h2 className="text-3xl font-bold text-gray-500 mb-10">All Buyers:</h2> : <h2 className="text-3xl font-bold text-gray-500 mb-10">You don't have any buyers to display</h2>}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6'>
                {
                    allBuyers.map(buyer => <div className='border p-3 rounded-lg hover:border-primary' key={buyer._id}>
                        <p className="text-gray-500">Name: {buyer.name}</p>
                        <button className="btn btn-primary mt-6 btn-sm" onClick={() => handleDelete(buyer._id, buyer.name)}>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllBuyers;