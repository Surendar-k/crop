// src/pages/ContactUs.jsx

import React from 'react';

const ContactUs = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">We'd love to hear from you! Please fill out the form below.</p>
            <form className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input type="text" className="border border-gray-300 rounded w-full p-2" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="border border-gray-300 rounded w-full p-2" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Message</label>
                    <textarea className="border border-gray-300 rounded w-full p-2" rows="4" required></textarea>
                </div>
                <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
