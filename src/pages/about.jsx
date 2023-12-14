import React from 'react';
import './about.css';  

function About() {
  return (
    <div className="about-container">
      <img
        className="about-image"
        src="https://i.pinimg.com/564x/66/31/0d/66310ddfa2fc416dcd9bba7085c633a5.jpg"
        alt="Our Story"
      />
      <div className="about-content">
        <h2 className="about-heading">Our Story</h2>
        <p className="about-text">
          At The Shoppey, we believe that style is not just about what you wear or the gadgets you
          own, but it's a reflection of your individuality. Established in 2023, we set out on a
          mission to curate a diverse collection of clothing, electronics, and jewelry that cater to
          every taste and lifestyle.
        </p>
        <h2 className="about-heading">Our Passion</h2>
        <p className="about-text">
          Our passion for quality and innovation drives us to carefully select each item in our
          inventory. From the latest fashion trends to cutting-edge electronics and exquisite
          jewelry pieces, we strive to offer products that not only meet but exceed your
          expectations.
        </p>
      </div>
    </div>
  );
}

export default About;
