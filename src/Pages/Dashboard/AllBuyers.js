import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingSpinner from '../../Sections/Common/LoadingSpinner';

const AllBuyers = () => {

    const {data: allBuyers, isLoading} = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const result = await fetch('http://localhost:5000/allbuyers');
            const data = await result.json();
            return data;
        }
    });

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-500 mb-10">All Buyers:</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6'>
                {
                    allBuyers.map(buyer => <div className='border p-3 rounded-lg hover:border-primary' key={buyer._id}>
                        <p className="text-gray-500">Name: {buyer.name}</p>
                        <button className="btn btn-primary mt-6">Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllBuyers;