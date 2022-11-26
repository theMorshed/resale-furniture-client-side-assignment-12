import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../Sections/Common/LoadingSpinner';
import { SiVerizon } from "react-icons/si";

const AllSellers = () => {
    const {data: allSellers, isLoading, refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const result = await fetch('http://localhost:5000/allsellers');
            const data = await result.json();
            return data;
        }
    });

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const handleVerify = (id, name) => {
        fetch(`http://localhost:5000/verifySeller/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`${name} varified successfully.`);
                refetch();
            })
    }

    console.log(allSellers);
    
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-500 mb-10">All Sellers:</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6'>
                {
                    allSellers.map(seller => <div className='border p-3 rounded-lg hover:border-primary' key={seller._id}>
                        <p className="text-gray-500">{seller.isVerified && <SiVerizon className='inline mr-3 border rounded-full p-1 text-2xl text-primary border-primary'></SiVerizon>}{ seller.name }</p>
                        {!seller.isVerified && <button className="btn btn-primary mt-6 btn-sm mr-3" onClick={() => handleVerify(seller._id, seller.name)}>Verify</button>}
                        <button className="btn btn-primary mt-6 btn-sm">Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllSellers;