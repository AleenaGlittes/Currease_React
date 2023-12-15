import React from 'react';
import Aboutimage from './assests/aboutus.png';
import Abouthighlight from './assests/aboutushighlight.png'

const About = () => {
  return (
    <>
      <div className="full-width-container">
        <div className="left-section">
          <div className="image-section">
            <img src={Aboutimage} alt="Image 1" className="image-sectionimage1" />
            <img src={Aboutimage} alt="Image 2" className="image-sectionimage2" />
            <img src={Aboutimage} alt="Image 3" className="image-sectionimage3" />
          </div>
        </div>
        <div className="right-section">
          <h2 className="aboutushead">A Novel Product <br /> In The Food Market.</h2>
          <p className="aboutusdesc">
            As a retorted curry base gravy produced particularly by keeping the<br /> millennials in mind, “Currease”, unlike other instant alternatives to<br /> home-cooked food, ensure to deliver locally produced fresh <br /> ingredients and easy-to-follow recipes so that anyone can prepare a <br /> quality home-cooked dish that does not compromise on time and <br /> well-being.
          </p>
          <button className="showmore">Products</button>
        </div>
      </div>
      <div className="centered-container">
        <div className="image-wrapper">
          <img src={Abouthighlight} alt="Your Image" />
        </div>
        <div className="description">
          <p>
            All Currease products are manufactured using “retort” technology. Retorting is one of the <br /> major techniques used for the thermal processing of food products that are packed either in <br />semi-rigid flexible laminates or in metal or alloy cans. The technology provides the advantage of <br /> processing and packing the food together; which makes it more commercially stable with<br /> safe and effective shelf life.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
