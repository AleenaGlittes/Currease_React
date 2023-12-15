import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ image, title, quantity, cardClass }) => {
  return (
    <div>
      <div className={`card ${cardClass}`}>
        <div className="card-img-container">
          <img src={image} className="card-img-top" alt="Product" />
        </div>
      </div>
      <div className="card-body">
        <p className="product_p">{title}</p>
        

        {/* <div className="circle">
       
        </div> */}
        {/* <button className="left-button">{quantity}</button> */}
      </div>
    </div>
  );
};

export default ProductCard;
