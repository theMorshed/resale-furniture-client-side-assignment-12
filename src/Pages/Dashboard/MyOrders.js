import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Sections/Common/LoadingSpinner';

const MyOrders = () => {
    const {email} = useParams();
    const {data: orders, isLoading} = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const result = await fetch(`http://localhost:5000/dashboard/orders/${email}`);
            const data = await result.json();
            return data;
        }
    });

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    console.log(orders);
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-500 mb-10">My Orders:</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6'>
                {
                    orders.map(order => <div className='border p-3 rounded-lg hover:border-primary' key={order._id}>
                        <p className="text-gray-500">Name: {order.item_name}</p>
                        <p className="text-gray-500">Price: ${order.price}</p>
                        <button className="btn btn-primary mt-6 mr-3">Buy Now</button>
                        <button className="btn btn-primary mt-6">Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;