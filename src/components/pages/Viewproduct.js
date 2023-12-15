import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Viewcart from '../viewcart';
import { useParams } from 'react-router-dom';

const Viewproduct = () => {

    const {id} = useParams();
    console.log(id)

  return (
    <div>
      <Header/>
      <Viewcart productId={id}/>
      <Footer/>
    </div>
  )
}

export default Viewproduct
