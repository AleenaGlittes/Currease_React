import React from 'react';

const Home_main = () => {
  return (
    <div className="col text-center">
      <p className="main-text-part1 mb-0">
        <span className="products-blue">Products</span>
        <span className="products-blue-dark"> Within</span>
      </p>
      <p className="main-text-part2 mb-0">
        <span className="products-blue-dark">Your Province</span>
      </p>
      <div className="input-container">
        <input className="input-search" placeholder="     Select province" />
      </div>
    </div>
  );
};

export default Home_main;
