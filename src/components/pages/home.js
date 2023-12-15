import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Home_main from '../Home_main';
import ProductList from '../ProductList';

const Home = () => {
  return (
    <>
      <div className="main subtle-bg-color full-width-div ">
        <Header />
        <Home_main />
      </div>
      <ProductList/>



      <Footer />
    </>
  )
}

export default Home
