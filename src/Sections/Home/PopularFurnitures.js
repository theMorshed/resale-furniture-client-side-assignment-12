import React from 'react';
import { FaBed, FaChair, FaCouch, FaDollyFlatbed } from "react-icons/fa";
import { MdBackupTable, MdBrunchDining } from "react-icons/md";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { BsDoorOpen } from "react-icons/bs";

const PopularFurnitures = () => {
    return (
        <div className='mt-20 pb-20'>
            <h2 className="text-3xl font-bold text-gray-500">Popular Furnitures: </h2>
            <p className="text-xl text-gray-400">Categories our customers love to check out.</p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-6'>
                <div className='border p-3 text-center rounded-lg hover:border-primary'>
                    <FaCouch className='text-8xl mb-3 mx-auto'></FaCouch>
                    <p className="text-xl font-semibold text-gray-500">Sofa</p>
                </div>
                <div className='border p-3 text-center rounded-lg hover:border-primary'>
                    <FaChair className='text-8xl mb-3 mx-auto'></FaChair>
                    <p className="text-xl font-semibold text-gray-500">Chair</p>
                </div>
                <div className='border p-3 text-center rounded-lg hover:border-primary'>
                    <FaBed className='text-8xl mb-3 mx-auto'></FaBed>
                    <p className="text-xl font-semibold text-gray-500">Bed</p>
                </div>
                <div className='border p-3 text-center rounded-lg hover:border-primary'>
                    <MdBackupTable className='text-8xl mb-3 mx-auto'></MdBackupTable>
                    <p className="text-xl font-semibold text-gray-500">Table</p>
                </div>
                <div className='border p-3 text-center rounded-lg hover:border-primary'>
                    <FaDollyFlatbed className='text-8xl mb-3 mx-auto'></FaDollyFlatbed>
                    <p className="text-xl font-semibold text-gray-500">Flat Bed</p>
                </div>
                <div className='border p-3 text-center rounded-lg hover:border-primary'>              
                    <RiArchiveDrawerFill className='text-8xl mb-3 mx-auto'></RiArchiveDrawerFill>
                    <p className="text-xl font-semibold text-gray-500">Drawer</p>
                </div>
                <div className='border p-3 text-center rounded-lg hover:border-primary'>
                    <MdBrunchDining className='text-8xl mb-3 mx-auto'></MdBrunchDining>
                    <p className="text-xl font-semibold text-gray-500">Dinning</p>
                </div>
                <div className='border p-3 text-center rounded-lg hover:border-primary'>
                    <BsDoorOpen className='text-8xl mb-3 mx-auto'></BsDoorOpen>
                    <p className="text-xl font-semibold text-gray-500">Door</p>
                </div>
            </div>
        </div>
    );
};

export default PopularFurnitures;