import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ContactForm from './ContactForm';

const Navbar = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => {
    setContactFormOpen(true);
  };

  const closeContactForm = () => {
    setContactFormOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/images/logo3.png" alt="Logo" className="navbar-logo-image" />
          <span className="navbar-logo-text">Uifry</span>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><button className="contact-button" onClick={openContactForm}>Contact</button></li>
        </ul>
      </nav>
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </>
  );
};

export default Navbar;