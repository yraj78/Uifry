import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="/images/logo3.png" alt="Logo" className="footer-logo" />
          <h4>Uifry</h4>
          <p>Email: info@uifry.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="#bookings">Bookings</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#terms">Terms of Use</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li><a href="#tour">Take a Tour</a></li>
            <li><a href="#chat">Live Chat</a></li>
            <li><a href="#reviews">Reviews</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Stay up to date</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">&copy; 2024 Uifry. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
