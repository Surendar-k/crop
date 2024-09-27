// src/components/PropertyCard.jsx

import React from 'react';
import PropTypes from 'prop-types';

const PropertyCard = ({ property, onBook }) => {
    const handleBook = () => {
        onBook(property);
        alert(`You have booked: ${property.name}`);
    };

    return (
        <div
            className="property-card border rounded-lg overflow-hidden shadow-md m-2 p-4 transition-transform duration-300 transform hover:scale-105"
            onClick={handleBook}
            style={{ cursor: 'pointer' }} 
        >
            <img src={property.image} alt={property.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{property.name}</h3>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-lg font-bold text-gray-800">${property.price}</p>
            <p className="text-gray-600">{property.description}</p>
            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200">
                Book Now
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
