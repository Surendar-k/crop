import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold hover:text-gray-400 transition duration-200">Property Rental</Link>
                <ul className={`flex space-x-6 md:space-x-12 transition-transform duration-300 ${isOpen ? 'block' : 'hidden'} md:flex`}>
                    <li>
                        <Link to="/" className="text-white hover:text-gray-400 transition duration-200">Home</Link>
                    </li>
                    <li>
                        <Link to="/checkout" className="text-white hover:text-gray-400 transition duration-200">Checkout</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-400 transition duration-200">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-gray-400 transition duration-200">Contact</Link>
                    </li>
                </ul>
                <div className="hidden md:block">
                    <Link to="/login" className="text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded transition duration-200">Login</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col space-y-2 p-4 bg-gray-800">
                        <li>
                            <Link to="/" className="text-white hover:text-gray-400 transition duration-200" onClick={toggleMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/checkout" className="text-white hover:text-gray-400 transition duration-200" onClick={toggleMenu}>Checkout</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white hover:text-gray-400 transition duration-200" onClick={toggleMenu}>About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white hover:text-gray-400 transition duration-200" onClick={toggleMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
