import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart Items</h2>
      <div className="cart-items">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Category: {item.category}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
