import React, { useContext, useState } from 'react';
import { SiVerizon } from "react-icons/si";
import { AuthContext } from '../../Contexts/AuthProvider';
import useRole from '../../hooks/useRole';
import BookingModal from '../Category/BookingModal';

const AdvertisedItems = ({ advertisedFurniture }) => {
    const {user} = useContext(AuthContext);
    const [userRole] = useRole(user?.email);
    const [selectedFurniture, setSelectedFurniture] = useState({});
    
    return (
        <div className='mt-10'>
            <h2 className="text-3xl font-bold text-gray-500">Advertised Items: </h2>
            <p className="text-xl text-gray-400">Products for sale</p>       
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8 mt-5">
                {
                    advertisedFurniture?.map(furniture => furniture.status === 'available' && <div className="card lg:card-side shadow-xl" key={furniture._id}>
                        <figure className='w-full'><img className='h-full' src={furniture.photo} alt="Album" /></figure>
                        <div className="card-body w-3/4">
                            <h2 className="card-title font-bold text-xl">{furniture.name}</h2>
                            <p><strong className='text-lg'>Location:</strong> {furniture.location}</p>
                            <p><strong className='text-lg'>Resale Price:</strong> ${furniture.resale_price}</p>
                            <p><strong className='text-lg'>Original Price:</strong> ${furniture.original_price}</p>
                            <p><strong className='text-lg'>Years of Use:</strong> {(new Date().getFullYear() - furniture.purchase_year)} years</p>
                            <p><strong className='text-lg'>Posted at:</strong> {furniture.date}</p>
                            <p><strong className='text-lg'>Seller:</strong> {furniture.verifiedSeller && <SiVerizon className='inline ml-3 mr-1 border rounded-full p-1 text-2xl text-primary border-primary'></SiVerizon>} {furniture.seller}</p>
                            <p>{furniture.verifiedSeller && `${furniture.name} added by verified seller`}</p>
                            <div className="card-actions justify-end">
                                {/* The button to open modal */}
                                {userRole === 'buyer' && <label onClick={() => setSelectedFurniture(furniture)} htmlFor="furniture-book-modal" className="btn btn-primary btn-sm">Book Now</label>}
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

export default AdvertisedItems;