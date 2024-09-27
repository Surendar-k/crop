// src/pages/AboutUs.jsx

import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-700 mb-4">
                Welcome to Property Rental, your number one source for all things property rental. 
                We’re dedicated to giving you the very best of properties, with a focus on dependability, customer service, and uniqueness.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
                Our mission is to provide an easy and reliable way for you to find your perfect property rental. 
                We believe that everyone deserves to find a place they can call home.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Team</h2>
            <p className="text-lg text-gray-700 mb-4">
                Our team is made up of experienced professionals who are passionate about helping you find your ideal rental property. 
                We strive to provide you with the best service possible and ensure that your experience is seamless.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h2>
            <p className="text-lg text-gray-700">
                If you have any questions or comments, please don’t hesitate to contact us at 
                <a href="mailto:info@propertyrental.com" className="text-indigo-600 hover:underline"> info@propertyrental.com</a>.
            </p>
        </div>
    );
};

export default AboutUs;
