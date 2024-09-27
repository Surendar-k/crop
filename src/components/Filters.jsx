// src/components/Filters.jsx

import React from 'react';

const Filters = ({ filters, setFilters }) => {
    return (
        <div className="flex space-x-4 mb-4">
            <select 
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                value={filters.location} // Set the value to reflect the selected location
                className="border border-gray-300 rounded-lg p-2"
            >
                <option value="">All Locations</option>
                <option value="City Center">City Center</option>
                <option value="Beachfront">Beachfront</option>
                <option value="Mountain">Mountain</option>
                <option value="Urban District">Urban District</option>
                <option value="Countryside">Countryside</option>
                {/* Add more locations as needed */}
            </select>
            <input 
                type="number" 
                placeholder="Max Price" 
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} 
                className="border border-gray-300 rounded-lg p-2"
            />
            <button className="bg-blue-500 text-white p-2 rounded-lg">Filter</button>
        </div>
    );
};

export default Filters;
