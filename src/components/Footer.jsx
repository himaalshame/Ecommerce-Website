import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
<<<<<<< HEAD
import Logo from '../img/logo-light.svg';
=======
import Logo from '../img/logo.png';
>>>>>>> be7d8c9239952231d92c4e69de61e5a9271a06cd
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_grid">
          <div className="footer_about">
            <Link to="/" className="footer_logo">
              <img src={Logo} alt="Logo" />
            </Link>
            <p>
              We are a leading vegetable export company, bringing the freshest organic produce from nature directly to your table. Quality and health are our top priorities.
            </p>
            <div className="social_links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer_links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/category/groceries">Our Products</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer_contact">
            <h3>Contact Us</h3>
            <div className="contact_item">
              <FaMapMarkerAlt />
              <p>123 Fresh Way, Cairo, Egypt</p>
            </div>
            <div className="contact_item">
              <FaPhoneAlt />
              <p>+20 123 456 789</p>
            </div>
            <div className="contact_item">
              <FaEnvelope />
              <p>info@nature-export.com</p>
            </div>
          </div>

          <div className="footer_newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to get the latest updates and offers.</p>
            <form className="newsletter_form">
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer_bottom">
          <p>&copy; 2026 Nature Export. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
