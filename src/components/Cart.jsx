// src/components/Cart.jsx

import React from 'react';

const Cart = ({ bookedProperties, onRemove, onDecreaseQuantity, totalPrice }) => {
    return (
        <div className="border-t mt-4 pt-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            {bookedProperties.length === 0 ? (
                <p className="text-gray-600">No properties booked.</p>
            ) : (
                bookedProperties.map((property) => (
                    <div key={property.id} className="flex justify-between p-2 border-b">
                        <span>{property.name} (x{property.quantity})</span>
                        <div className="flex items-center">
                            <button 
                                onClick={() => onDecreaseQuantity(property.id)} 
                                className="text-yellow-500 mr-2"
                            >
                                -
                            </button>
                            <button 
                                onClick={() => onRemove(property.id)} 
                                className="text-red-500"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}
            <div className="mt-2 font-bold">
                <span>Total Price: ${totalPrice.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default Cart;
