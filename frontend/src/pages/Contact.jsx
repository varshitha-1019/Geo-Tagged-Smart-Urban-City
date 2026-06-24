import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaArrowLeft } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent successfully to City Support Administration!");
  };

  return (
    <div className="contact-page">
      {/* Top Sticky Header Navigation Bar (Vice-Versa Back to Home navigation) */}
      <nav className="contact-nav">
        <div className="contact-nav-brand" onClick={() => navigate('/')}>
          <span className="contact-brand-icon">🏙️</span>
          <div>
            <h3>Smart Urban</h3>
            <p>Geo-Tagged Monitoring</p>
          </div>
        </div>
        <button className="contact-back-home-btn" onClick={() => navigate('/')}>
          <FaArrowLeft style={{ marginRight: '8px' }} /> Back to Home
        </button>
      </nav>

      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-badge">Municipal Support Desk</span>
          <h2>Get In Touch</h2>
          <p>
            Have questions regarding systemic escalations, municipal department mappings, or technical 
            difficulties with geo-tagging? Reach out to our city administration cell.
          </p>
        </div>

        <div className="contact-wrapper-grid">
          {/* Left Column: Quick Interactive System Info Channels */}
          <div className="contact-info-panel">
            <div className="info-card">
              <div className="info-icon-box">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h4>Central Command HQ</h4>
                <p>Urban Planning & Tech Cell, 4th Floor, Municipal Corporation Secretariat, Capital City.</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-box">
                <FaPhoneAlt />
              </div>
              <div className="info-text">
                <h4>Citizen Helplines</h4>
                <p>1800-345-6789 (Toll-Free)</p>
                <p>+91 98765 43210 (Technical Cell)</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-box">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <h4>Electronic Support Matrix</h4>
                <p>support@smarturban.gov.in</p>
                <p>admin.tech@smarturban.org</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-box">
                <FaClock />
              </div>
              <div className="info-text">
                <h4>Operational Window</h4>
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p>Emergency AI Monitoring: 24/7 Active</p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Input Form */}
          <form className="contact-form-panel" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>

            <div className="contact-form-group">
              <label>Official Email Address</label>
              <input type="email" placeholder="johndoe@example.com" required />
            </div>

            <div className="contact-form-group">
              <label>Subject / Area of Concern</label>
              <input type="text" placeholder="e.g., Department Mapping Delay, App Glitch" required />
            </div>

            <div className="contact-form-group">
              <label>Detailed Message</label>
              <textarea rows="5" placeholder="Elaborate on your query in detail..." required></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Dispatch Message Matrix
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;