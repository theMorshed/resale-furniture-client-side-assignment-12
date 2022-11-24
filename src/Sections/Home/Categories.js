import React from 'react';
import category_one from '../../assets/images/category/category_one.jpg';
import category_two from '../../assets/images/category/category_two.jpg';
import category_three from '../../assets/images/category/category_three.jpg';

const Categories = () => {
    return (
        <div className='mt-20 pb-20'>
            <h2 className="text-3xl font-bold text-gray-500">Categories: </h2>
            <p className="text-xl text-gray-400">Our Popular Categories</p>            
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card w-full bg-base-100 shadow-xl image-full h-60">
                    <figure><img className='w-full' src={category_one} alt="Shoes" /></figure>
                    <div className="card-body mt-10">
                        <h2 className="card-title text-2xl">Dinning Room</h2>
                        <p>All dinning furniture are display in this category.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See all</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl image-full h-60">
                    <figure><img className='w-full' src={category_two} alt="Shoes" /></figure>
                    <div className="card-body mt-10">
                        <h2 className="card-title text-2xl">Drawing</h2>
                        <p>These furniture are for drawing room</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See all</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl image-full h-60">
                    <figure><img className='w-full' src={category_three} alt="Shoes" /></figure>
                    <div className="card-body mt-10">
                        <h2 className="card-title text-2xl">Kitchen</h2>
                        <p>Kitchen furniture are goes here..</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See all</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;