// src/pages/Checkout.jsx

import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
  const location = useLocation(); // Get the current location
  const { bookedProperties, totalPrice } = location.state || { bookedProperties: [], totalPrice: 0 }; // Destructure state

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Total Amount: ${totalPrice.toFixed(2)}</h2>
      <CheckoutForm bookedProperties={bookedProperties} totalPrice={totalPrice} />
    </div>
  );
};

export default Checkout;
