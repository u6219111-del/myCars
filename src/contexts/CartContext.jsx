import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(car) {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === car.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === car.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...car, quantity: 1 }];
      }
    });
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  function updateQuantity(id, quantity) {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  function getCartCount() {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  function getCartTotal() {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  function clearCart() {
    setCartItems([]);
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartCount,
    getCartTotal,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}