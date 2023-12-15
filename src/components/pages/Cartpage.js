import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Cartpage = ({ cartItems }) => {
    console.log(cartItems);

    return (
        <>
            <Header />
            <div className="cart-page">
                <h2 className='carthead'>Cart Items</h2>
                {cartItems && cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <div className="cart-item-details">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="product-details">
                                    <h3>{item.title}</h3>
                                    <p>Category: {item.category}</p>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {/* Add quantity information here */}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No items in the cart</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cartpage;
