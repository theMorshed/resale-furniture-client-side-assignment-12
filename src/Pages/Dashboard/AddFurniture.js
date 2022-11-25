import React from 'react';
import toast from 'react-hot-toast';

const AddFurniture = () => {
    const handleAddFurniture = event => {
        event.preventDefault();
        toast.success('Furniture added successfully.');
    }

    return (
        <div className='ml-8'>
            <form onSubmit={handleAddFurniture}>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-md w-full" />
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Original Price</span>
                    </label>
                    <input type="number" name="original_price" placeholder="Original Price" className="input input-bordered" required />
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Condition</span>
                    </label>
                    <select name="condition" className="select select-bordered">
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered" required />
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Product Category</span>
                    </label>
                    <select name="category" className="select select-bordered">
                        <option value="1">Dinning</option>
                        <option value="2">Drawing</option>
                        <option value="3">Kitchen</option>
                    </select>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-bordered" placeholder="Description"></textarea>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Resale Price</span>
                    </label>
                    <input type="number" name="resale_price" placeholder="Resale Price" className="input input-bordered" required />
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Year of Purchase</span>
                    </label>
                    <input type="number" name="purchase_year" placeholder="Year of Purchase" className="input input-bordered" required />
                </div>
                <input className='btn btn-primary mt-3' type="submit" value="Add Furniture" />
            </form>
        </div>
    );
};

export default AddFurniture;