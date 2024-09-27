// src/components/PropertyCard.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PropertyCard = ({ property, onBook }) => {
    const [isBooked, setIsBooked] = useState(false);

    const handleBook = () => {
        setIsBooked(true);
        onBook(property);
        alert(`You have booked: ${property.name}`);
    };

    return (
        <div
            className={`property-card border rounded-lg overflow-hidden shadow-lg m-2 p-4 transition-transform duration-300 transform ${
                isBooked ? 'scale-105 bg-indigo-100' : 'hover:scale-105'
            }`}
            onClick={!isBooked ? handleBook : null}
            style={{ cursor: isBooked ? 'not-allowed' : 'pointer' }}
        >
            <img
                src={property.image}
                alt={property.name}
                className="w-full h-40 object-cover mb-4 rounded-lg shadow-md transition duration-300 transform hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.name}</h3>
            <p className="text-gray-600 mb-1">{property.location}</p>
            <p className="text-lg font-bold text-gray-800">${property.price}</p>
            <p className="text-gray-600 mb-4">{property.description}</p>
            <button
                className={`mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200 ${isBooked ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isBooked}
            >
                {isBooked ? 'Booked' : 'Book Now'}
            </button>
        </div>
    );
};

PropertyCard.propTypes = {
    property: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    onBook: PropTypes.func.isRequired,
};

export default PropertyCard;
