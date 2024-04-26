import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};