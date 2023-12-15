import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Viewproduct from './components/pages/Viewproduct';
import Viewcart from './components/viewcart';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import Loginform from './components/pages/loginform';
import Cartpage from './components/pages/Cartpage';



function App() {

  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  return (
    < BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/viewcart/:id" element={<Viewcart/>} />
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/login' element={<Loginform/>}/>
        <Route path='/cart' element={<Cartpage cartItems={cartItems}/>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
