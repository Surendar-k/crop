// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Checkout from './pages/Checkout'; 
import AboutUs from './pages/AboutUs'; 
import ContactUs from './pages/ContactUs'; // Import the ContactUs component

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} /> {/* Add route for Contact Us */}
            </Routes>
        </Router>
    );
};

export default App;
