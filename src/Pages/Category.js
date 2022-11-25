import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import category_one from '../assets/images/category/category_one.jpg';
import category_two from '../assets/images/category/category_two.jpg';
import BookingModal from '../Sections/Category/BookingModal';

const Category = () => {
    const { id } = useParams();
    console.log(id);
    const [selectedFurniture, setSelectedFurniture] = useState({});
    // category data fetch from mongodb using react query and react axios
    const categoryData = [
        {
            name: 'Chair',
            location: 'chattagram',
            resalePrice: 100,
            originalPrice: 400,
            usedYear: 2,
            postedAt: '12 Nov, 2022',
            seller: 'Morshed',
            image: category_one,
        },
        {
            name: 'Dinning Table',
            location: 'Motizil',
            resalePrice: 200,
            originalPrice: 600,
            usedYear: 3,
            postedAt: '10 Nov, 2022',
            seller: 'Tapas',
            image: category_two
        }
    ];
    return (
        <div className='mt-10'>
            <h2 className="text-3xl font-bold text-gray-500">Dinning Products: </h2>
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8 mt-5">
                {
                    categoryData.map(category => 
                    <div className="card lg:card-side shadow-xl" key={category.name}>
                        <figure><img className='h-full' src={category.image} alt="Album" /></figure>
                        <div className="card-body w-3/4">
                            <h2 className="card-title font-bold text-xl">{category.name}</h2>
                            <p><strong className='text-lg'>Location:</strong> {category.location}</p>
                            <p><strong className='text-lg'>Resale Price:</strong> ${category.resalePrice}</p>
                            <p><strong className='text-lg'>Original Price:</strong> ${category.originalPrice}</p>
                            <p><strong className='text-lg'>Years of Use:</strong> {category.usedYear} years</p>
                            <p><strong className='text-lg'>Posted at:</strong> {category.postedAt}</p>
                            <p><strong className='text-lg'>Seller:</strong> {category.seller}</p>
                            <div className="card-actions justify-end">
                                {/* The button to open modal */}
                                    <label onClick={() => setSelectedFurniture(category)} htmlFor="furniture-book-modal" className="btn btn-primary">Book Now</label>
                            </div>
                        </div>
                    </div>)
                }                                
            </div>
            <BookingModal selectedFurniture={selectedFurniture}></BookingModal>
        </div>
    );
};

export default Category;