import React from 'react';
import category_one from '../../assets/images/category/category_one.jpg';
import category_two from '../../assets/images/category/category_two.jpg';
import category_three from '../../assets/images/category/category_three.jpg';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categoryData = [
        {
            id: 1,
            name: 'Dinning Room',
            desc: 'All dinning furniture are display in this category.',
            img: category_one
        },
        {
            id: 2,
            name: 'Drawing',
            desc: 'All drawing room furniture you can see in this category.',
            img: category_two
        },
        {
            id: 3,
            name: 'Kitchen',
            desc: 'Kitchen furnitures are goes here, You can find as your need.',
            img: category_three
        }
    ];

    return (
        <div className='mt-20 pb-20'>
            <h2 className="text-3xl font-bold text-gray-500">Categories: </h2>
            <p className="text-xl text-gray-400">Our Popular Categories</p>            
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categoryData.map(category => 
                    <div className="card w-full bg-base-100 shadow-xl image-full h-60" key={category.id}>                        
                        <figure><img className='w-full' src={category.img} alt="Shoes" /></figure>
                        <div className="card-body mt-10">
                            <h2 className="card-title text-2xl">{category.name}</h2>
                            <p>{category.desc}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/category/${category.id}`}><button className="btn btn-primary">See all</button></Link>
                            </div>
                        </div>
                    </div>)
                }                
            </div>
        </div>
    );
};

export default Categories;