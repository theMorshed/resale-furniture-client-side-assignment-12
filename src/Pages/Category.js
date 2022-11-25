import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../Sections/Category/BookingModal';
import LoadingSpinner from '../Sections/Common/LoadingSpinner';

const Category = () => {
    const { id } = useParams();
    console.log(id);
    const [selectedFurniture, setSelectedFurniture] = useState({});
    const { data: furnitures, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const result = await fetch(`http://localhost:5000/category/${id}`);
            const data = await result.json();
            return data;
        }
    });

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='mt-10'>
            <h2 className="text-3xl font-bold text-gray-500">Dinning Products: </h2>
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8 mt-5">
                {
                    furnitures.map(furniture =>
                        <div className="card lg:card-side shadow-xl" key={furniture._id}>
                            <figure><img className='h-full' src={furniture.photo} alt="Album" /></figure>
                            <div className="card-body w-3/4">
                                <h2 className="card-title font-bold text-xl">{furniture.name}</h2>
                                <p><strong className='text-lg'>Location:</strong> {furniture.location}</p>
                                <p><strong className='text-lg'>Resale Price:</strong> ${furniture.resale_price}</p>
                                <p><strong className='text-lg'>Original Price:</strong> ${furniture.original_price}</p>
                                <p><strong className='text-lg'>Years of Use:</strong> {(new Date().getFullYear() - furniture.purchase_year)} years</p>
                                <p><strong className='text-lg'>Posted at:</strong> {furniture.date}</p>
                                <p><strong className='text-lg'>Seller:</strong> {furniture.seller}</p>
                                <div className="card-actions justify-end">
                                    {/* The button to open modal */}
                                    <label onClick={() => setSelectedFurniture(furniture)} htmlFor="furniture-book-modal" className="btn btn-primary">Book Now</label>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            {
                Object.keys(selectedFurniture).length > 0 && <BookingModal selectedFurniture={selectedFurniture} setSelectedFurniture={setSelectedFurniture}></BookingModal>
            }
        </div>
    );
};

export default Category;