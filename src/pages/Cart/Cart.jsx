import React from "react";
import { useCart } from "../../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import { useTranslation } from 'react-i18next';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCheckout = () => {
    alert(`${t('order_placed_successfully')} ${t('total')}: $${getCartTotal().toFixed(2)}`);
    clearCart();
    navigate("/checkout-success"); 
  };

  return (
     <div className="cart-container">
      <div className="cart-wrapper">
        <h1 className="cart-title">{t('shopping_cart')}</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <svg className="empty-cart-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="empty-cart-title">{t('your_cart_is_empty')}</h3>
            <p className="empty-cart-text">{t('start_adding_cars')}</p>
            <div className="browse-btn-container">
              <Link to="/vehicles" className="browse-btn">{t('browse_vehicles')}</Link>
            </div>
          </div>
        ) : (
          <div className="cart-items-container">
            <ul className="cart-items-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-content">
                    <div className="cart-item-image-wrapper">
                      <img 
                        src={item.image_url} 
                        alt={item.name} 
                        className="cart-item-image"
                      />
                    </div>
                    <div className="cart-item-details">
                      <div className="cart-item-header">
                        <div>
                          <h3 className="cart-item-name">{item.name}</h3>
                          <p className="cart-item-category">{item.category}</p>
                        </div>
                        <p className="cart-item-price">${item.price}</p>
                      </div>
                      <div className="cart-item-actions">
                        <label htmlFor={`quantity-${item.id}`} className="quantity-label">{t('qty')}:</label>
                        <select
                          id={`quantity-${item.id}`}
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="quantity-select"
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                          ))}
                        </select>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="remove-btn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="remove-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          {t('remove')}
                        </button>
                      </div>
                      <p className="cart-item-total">
                        {t('total')}: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="cart-summary">
              <div className="subtotal">
                <p>{t('subtotal')}</p>
                <p>${getCartTotal().toFixed(2)}</p>
              </div>
              <p className="shipping-info">{t('shipping_taxes')}</p>
              <div className="checkout-btn-container">
                <button 
                  onClick={handleCheckout}
                  className="checkout-btn"
                >
                  {t('checkout')}
                </button>
              </div>
              <div className="continue-shopping">
                <Link to="/vehicles" className="continue-shopping-link">
                  {t('continue_shopping')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;