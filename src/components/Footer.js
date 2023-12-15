import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Logo from '../components/assests/currease_logo.png'

const Footer = () => {
  return (
    <>
      <div className="logo_wrapper">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="footer">
        <p className="text-center support">Customer Support </p>
        <p className="text-center phone">+1 65695 545 65 <br/>support@cantaricrop.com</p>
        {/* <p className="text-center phone1">support@cantaricrop.com</p> */}

        <div className="button-container">
          <button className="footerbtn">Home</button>
          <button className="footerbtn">About Us</button>
          <button className="footerbtn">Contact Us</button>
          <button className="footerbtn">Shop</button>
        </div>

        <div className="footer_bottom">
          <div className="left-content">
            <p className="copyright">© 2023 Cantaricrop</p>
          </div>
          <div className="center-content">
            <p>Terms of Service Privacy Policy</p>
          </div>
          <div className="right-content">
            <a href="#" className="social-icon">
                <FontAwesomeIcon icon={fab.faFacebookF} />
            </a>
            <a href="#" className="social-icon">
                <FontAwesomeIcon icon={fab.faLinkedin} />
            </a>
            <a href="#" className="social-icon">
                <FontAwesomeIcon icon={fab.faTwitter} />
            </a>
            <a href="#" className="social-icon">
                <FontAwesomeIcon icon={fab.faInstagram} />
            </a>
        </div>
        </div>
      </div>
      </>
  );
};

export default Footer;
