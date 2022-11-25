import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const AddFurniture = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleAddFurniture = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const original_price = form.original_price.value;
        const date = form.date.value;
        const seller = user?.displayName;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const category = form.category.value;
        const description = form.description.value;
        const resale_price = form.resale_price.value;
        const purchase_year = form.purchase_year.value;

        const furniture = {
            name,
            photo,
            original_price,
            condition,
            phone,
            date,
            seller,
            location,
            category,
            description,
            resale_price,
            purchase_year
        }

        fetch('http://localhost:5000/addfurniture', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(furniture)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${furniture.name} is added successfully`);
                navigate('/');
            })
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
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" className="file-input file-input-bordered file-input-md w-full" />
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Original Price</span>
                    </label>
                    <input type="number" name="original_price" placeholder="Original Price" className="input input-bordered" required />
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Posted Date</span>
                    </label>
                    <input type="date" name="date" placeholder="Original Price" className="input input-bordered" required />
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