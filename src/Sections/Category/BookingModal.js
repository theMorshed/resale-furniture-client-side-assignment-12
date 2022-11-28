import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({ setSelectedFurniture, selectedFurniture }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, resale_price } = selectedFurniture;
    const navigate = useNavigate();

    const handleBookedFurniture = event => {
        event.preventDefault();
        const form = event.target;
        const user_name = form.user_name.value;
        const email = form.email.value;
        const item_name = form.item_name.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const bookedFurniture = {
            user_name,
            email,
            item_name,
            price,
            phone,
            location,
            product_id: _id,
            status: 'unpaid'
        }

        const url = 'https://resale-server.vercel.app/orders';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('resaleToken')}`
            },
            body: JSON.stringify(bookedFurniture)
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`${item_name} booked successfully`);
                navigate(`/dashboard/orders/${email}`);
            })

        toast.success(`${name} booked successfully.`);
        setSelectedFurniture({});
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="furniture-book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="furniture-book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBookedFurniture}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input defaultValue={user?.displayName} readOnly type="text" name="user_name" placeholder="User Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input defaultValue={user?.email} readOnly type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input value={name} readOnly type="text" name="item_name" placeholder="Item Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input value={resale_price} readOnly type="number" name="price" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meeting Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Meeting Location" className="input input-bordered" required />
                        </div>
                        <input className='btn btn-primary mt-3' type="submit" value="Book Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;