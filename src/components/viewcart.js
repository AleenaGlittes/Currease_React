import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Viewcart = () => {
  const { id } = useParams();
  const navigate =useNavigate();
  const [product, setProduct] = useState(null);
  console.log(id)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, [id]);

  const addToCart = () => {
    if (product) {
      const { image, title, category, price } = product;
      const cartItem = { image, title, category, price };
  
      const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const updatedCart = [...existingCartItems, cartItem];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  
      alert('Product added to cart!');
      navigate('/cart');
    }
  };
  

  return (
    <>
    <Header/>
    <div className="product-view">
      {product ? (
        <>
          <div className="product-image">
            <img src={product.image} alt="Product Image" />
          </div>
          <div className="product-details">
            <button className="small-button">New</button>
            <h2 className="product-name">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            {/* <ul class="dotted-lines">
                <li>Makanan yang lengkap dan seimbang, dengan 41 nutrisi penting.</li>
                <li>Mengandung antioksidan (vitamin E dan selenium) untuk sistem kekebalan tubuh yang sehat.</li>
                <li> Mengandung serat untuk memperlancar pencernaan dan meningkatkan kesehatan usus.</li>
                <li>
                    Diperkaya dengan kalsium, fosfor dan vitamin D untuk tulang yang sehat.</li>
              </ul> */}
            <div className="product-thumbnails">
              <img src={product.image} alt="Thumbnail 1" className="color-shade" />
              <img src={product.image} alt="Thumbnail 2" className="light-shade" />
              <img src={product.image} alt="Thumbnail 3" className="light-shade" />
            </div>
            {/* Other product details */}
            <h1> ₹{product.price}</h1>
            <h3 className="ingredients-header">{product.category}</h3>
            {/* <ul class="ingredients-list">
                <li>Nutrisi</li>
                <li>vitamin E</li>
                <li>Protein</li>
              </ul> */}
              
            <button className="buy-now" onClick={addToCart}>Add to cart</button>
            
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Viewcart;
