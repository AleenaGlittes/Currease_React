import React, { useState, useEffect } from 'react';
import ProductCard from './Productcard';
import {Link} from 'react-router-dom'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        // Update state with fetched data
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div className="product_list">
      <div className="row">
        {products.map((product, index) => (
          <div className="col" key={index}>
            <Link to={`/viewcart/${product.id}`}>
            <ProductCard
              image={product.image}
              title={product.title}
              quantity={product.quantity}
              cardClass={`card_${index + 1}`}
            />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
