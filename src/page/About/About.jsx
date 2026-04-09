import React from 'react';
import PageTransition from '../../components/PageTransition';
import './about.css';

function About() {
  return (
    <PageTransition>
      <div className="about_page">
        <div className="container">
          <div className="about_hero">
            <h1>About Nature Export</h1>
            <p>Bringing the best of nature to the global market.</p>
          </div>

          <div className="about_content">
            <div className="about_section">
              <h2>Our Mission</h2>
              <p>
                Our mission is to provide high-quality, organic, and fresh vegetables and fruits from our local farms to international markets. We believe in sustainable farming practices and ensuring that every product we export meets the highest standards of quality and health.
              </p>
            </div>

            <div className="about_section">
              <h2>Why Choose Us?</h2>
              <ul>
                <li><strong>100% Organic:</strong> All our produce is grown without harmful chemicals or pesticides.</li>
                <li><strong>Freshness Guaranteed:</strong> We use state-of-the-art logistics to ensure our products reach you as fresh as they were when harvested.</li>
                <li><strong>Global Reach:</strong> We export to over 20 countries worldwide, maintaining a strong reputation for reliability.</li>
                <li><strong>Sustainability:</strong> We support local farmers and use eco-friendly packaging solutions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default About;
