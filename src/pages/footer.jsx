import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Welcome to The Shoppey, where fashion, technology, and elegance converge to bring you a unique and enjoyable shopping experience.</p>
          <Link to="/about" className="aboutUs">About</Link>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
            <ul>
                <li><Link to="/mens">Men's Clothing</Link></li>
                <li><Link to="/womens">Women's Clothing</Link></li>
                <li><Link to="/electronics">Electronics</Link></li>
            </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: theshoppey@example.com</p>
          <p>Phone: (+254)7 173-93483</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 The Shoppey. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
