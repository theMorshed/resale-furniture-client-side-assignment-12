import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({ selectedFurniture }) => {
    const { user } = useContext(AuthContext);
    const { name, resalePrice } = selectedFurniture;

    const handleBookedFurniture = event => {
        event.preventDefault();
        const form = event.target;

        console.log('Furniture booked successsfully.');
        form.reset();
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
                            <input defaultValue={name} readOnly type="text" name="item_name" placeholder="Item Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input defaultValue={resalePrice} readOnly type="number" name="price" placeholder="Price" className="input input-bordered" required />
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