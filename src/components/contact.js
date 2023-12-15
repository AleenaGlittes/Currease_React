import React from 'react';

function contact() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="cardcontact">
          <h3 className="contactind">Cantaricrop India</h3>
          <p className="contact_p">+91 9523212121<br />
          supportind@gmail.com</p>
        </div>
        <div className="cardcontact">
          <h3 className="contactind">Cantari Corp UK</h3>
          <p className="contact_p">+44 35232 8910<br />
          supportuk@gmail.com</p>
        </div>
        <div className="cardcontact">
          <h3 className="contactind">Cantari Crop USA</h3>
          <p className="contact_p">+1 35232 1200<br />
          supportusa@gmail.com</p>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <input type="text" placeholder="Name" className="input_contact" /><br />
        <input type="email" placeholder="Email" /><br />
        <input type="tel" placeholder="Phone" /><br />
        <input type="text" placeholder="Message" /><br />
        <button className="button_contact">Send Message</button>
      </div>
    </div>
  );
}

export default contact;
