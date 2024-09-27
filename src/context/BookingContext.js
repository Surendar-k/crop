// src/context/BookingContext.js

import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (property) => {
    setCart([...cart, property]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <BookingContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </BookingContext.Provider>
  );
};
