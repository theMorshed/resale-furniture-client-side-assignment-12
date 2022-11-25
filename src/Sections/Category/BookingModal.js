import React from 'react';

const BookingModal = ({ selectedFurniture }) => {
    const { name } = selectedFurniture;
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="furniture-book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="furniture-book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;