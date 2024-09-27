// src/pages/Home.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import PropertyCard from '../components/PropertyCard';
import Filters from '../components/Filters';
import Cart from '../components/Cart';
import Properties from '../data/properties'; // Ensure this matches the renamed file exactly

const Home = () => {
    const [bookedProperties, setBookedProperties] = useState([]);
    const [filters, setFilters] = useState({ location: '', maxPrice: '' });
    const navigate = useNavigate(); // Initialize useNavigate

    const handleBook = (property) => {
        setBookedProperties((prevBooked) => {
            const existingProperty = prevBooked.find(item => item.id === property.id);
            if (existingProperty) {
                return prevBooked.map(item => 
                    item.id === property.id 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                );
            } else {
                return [...prevBooked, { ...property, quantity: 1 }];
            }
        });
    };

    const handleRemove = (id) => {
        setBookedProperties((prevBooked) => prevBooked.filter(property => property.id !== id));
    };

    const handleDecreaseQuantity = (id) => {
        setBookedProperties((prevBooked) => {
            const existingProperty = prevBooked.find(item => item.id === id);
            if (existingProperty.quantity > 1) {
                return prevBooked.map(item => 
                    item.id === id 
                        ? { ...item, quantity: item.quantity - 1 } 
                        : item
                );
            } else {
                return prevBooked.filter(item => item.id !== id);
            }
        });
    };

    // src/pages/Home.jsx

const filteredProperties = Properties.filter(property => {
    return (!filters.location || property.location === filters.location) &&
           (!filters.maxPrice || property.price <= filters.maxPrice);
});


    const totalPrice = bookedProperties.reduce((total, property) => total + property.price * property.quantity, 0);

    // Function to handle checkout button click
    const handleCheckout = () => {
        navigate('/checkout', { state: { bookedProperties, totalPrice } });
    };

    return (
        <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
            <header className="py-4 text-center">
                <h1 className="text-3xl font-bold text-indigo-600">Property Booking System</h1>
            </header>
            <Filters filters={filters} setFilters={setFilters} />
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
                {filteredProperties.map(property => (
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={property.id}>
                        <PropertyCard property={property} onBook={handleBook} />
                    </div>
                ))}
            </div>
            <Cart 
                bookedProperties={bookedProperties} 
                onRemove={handleRemove} 
                onDecreaseQuantity={handleDecreaseQuantity} 
                totalPrice={totalPrice} 
            />
            {/* Checkout Button */}
            {bookedProperties.length > 0 && (
                <div className="mt-4 text-center">
                    <button 
                        onClick={handleCheckout} 
                        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-200"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
            <footer className="py-4 text-center mt-6 border-t">
                <p className="text-gray-600">© 2024 Property Booking System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
