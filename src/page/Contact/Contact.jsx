import React from 'react';
import PageTransition from '../../components/PageTransition';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './contact.css';

function Contact() {
  return (
    <PageTransition>
      <div className="contact_page">
        <div className="container">
          <div className="contact_hero">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Get in touch with us for any inquiries or orders.</p>
          </div>

          <div className="contact_grid">
            <div className="contact_info">
              <div className="info_item">
                <div className="icon_circle"><FaMapMarkerAlt /></div>
                <div className="info_text">
                  <h3>Our Location</h3>
                  <p>123 Fresh Way, Cairo, Egypt</p>
                </div>
              </div>

              <div className="info_item">
                <div className="icon_circle"><FaPhoneAlt /></div>
                <div className="info_text">
                  <h3>Phone Number</h3>
                  <p>+20 123 456 789</p>
                </div>
              </div>

              <div className="info_item">
                <div className="icon_circle"><FaEnvelope /></div>
                <div className="info_text">
                  <h3>Email Address</h3>
                  <p>info@nature-export.com</p>
                </div>
              </div>

              <div className="info_item">
                <div className="icon_circle"><FaClock /></div>
                <div className="info_text">
                  <h3>Business Hours</h3>
                  <p>Sat - Thu: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact_form_container">
              <form className="contact_form">
                <div className="form_group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form_group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form_group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form_group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn_submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Contact;
