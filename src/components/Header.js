import React from 'react';
import Logo from '../components/assests/currease_logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <>


      {/* <div className="main subtle-bg-color full-width-div"> */}
      <div className="header">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <div className="logo_smaller">
              <img src={Logo} alt="Bootstrap" width="90" height="48" />
            </div>
            <div className="d-flex align-items-center">
              <ul className="navbar-nav d-flex flex-row me-5">
                <li className="nav-item">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <a className="nav-link me-3" >Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  to="/aboutus" style={{ textDecoration: 'none' }}>
                  <a className="nav-link me-3" >About Us</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" style={{ textDecoration: 'none' }}>
                  <a className="nav-link me-3" >Contact Us</a>
                  </Link>
                </li>
              </ul>
              <Link to="/cart"  style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary btn_shop" type="submit">Shop <FontAwesomeIcon icon={faShoppingBag} /></button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* </div> */}
    </>
  );
};

export default Header;
