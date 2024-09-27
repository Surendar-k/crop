// src/components/CheckoutForm.jsx

import React, { useState } from 'react';

const CheckoutForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');
  const [error, setError] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false); // New state for confirmation message

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form inputs
    if (!fullName || !email || !phone || !paymentDetails) {
      setError('Please fill in all fields.');
      return;
    }

    // Clear error if validation passes
    setError('');

    // Handle form submission logic here
    console.log({ fullName, email, phone, paymentDetails });

    // Set confirmation state to true
    setIsConfirmed(true);
    
    // Reset form fields after submission
    setFullName('');
    setEmail('');
    setPhone('');
    setPaymentDetails('');
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg max-w-md transition-transform transform hover:scale-105">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Checkout</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {isConfirmed && <p className="text-green-500 text-center mb-4">Your booking is confirmed!</p>} {/* Confirmation Message */}
      
      <form onSubmit={handleSubmit} className={`${isConfirmed ? 'hidden' : 'block'}`}> {/* Hide form if confirmed */}
        {/** Full Name Field */}
        <div className="relative mb-6">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            required
          />
          <label className={`absolute left-4 top-3 text-gray-500 transition-all duration-200 ${fullName ? 'transform -translate-y-4 scale-75' : 'translate-y-2'}`}>
            Full Name
          </label>
        </div>

        {/** Email Address Field */}
        <div className="relative mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            required
          />
          <label className={`absolute left-4 top-3 text-gray-500 transition-all duration-200 ${email ? 'transform -translate-y-4 scale-75' : 'translate-y-2'}`}>
            Email Address
          </label>
        </div>

        {/** Phone Number Field */}
        <div className="relative mb-6">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            required
          />
          <label className={`absolute left-4 top-3 text-gray-500 transition-all duration-200 ${phone ? 'transform -translate-y-4 scale-75' : 'translate-y-2'}`}>
            Phone Number
          </label>
        </div>

        {/** Payment Details Field */}
        <div className="relative mb-6">
          <input
            type="text"
            value={paymentDetails}
            onChange={(e) => setPaymentDetails(e.target.value)}
            className="border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            placeholder=" "
            required
          />
          <label className={`absolute left-4 top-3 text-gray-500 transition-all duration-200 ${paymentDetails ? 'transform -translate-y-4 scale-75' : 'translate-y-2'}`}>
            Payment Details
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Confirm Booking
        </button>
      </form>

      <p className="text-sm text-gray-500 text-center mt-4">Your information is secure.</p>
    </div>
  );
};

export default CheckoutForm;
