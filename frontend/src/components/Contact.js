import React, { useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('/api/contact', formData);
      setStatus({ 
        type: 'success', 
        message: response.data.message 
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'your.email@example.com', link: 'mailto:your.email@example.com' },
    { icon: FaPhone, label: 'Phone', value: '+1 (234) 567-890', link: 'tel:+1234567890' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Your City, Country', link: null }
  ];

  const socialLinks = [
    { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: FaGithub, label: 'GitHub', url: 'https://github.com' },
    { icon: FaTwitter, label: 'Twitter', url: 'https://twitter.com' },
    { icon: FaEnvelope, label: 'Email', url: 'mailto:your.email@example.com' }
  ];

  return (
    <section className="contact fade-in-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-intro">
          <p>
            Have a project in mind or want to collaborate? 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-info-cards">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="info-card">
                    <div className="info-icon">
                      <IconComponent />
                    </div>
                    <div className="info-text">
                      <div className="info-label">{info.label}</div>
                      {info.link ? (
                        <a href={info.link} className="info-value">{info.value}</a>
                      ) : (
                        <div className="info-value">{info.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="social-section">
              <h3>Connect With Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <IconComponent className="social-icon" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                ></textarea>
              </div>

              {status.message && (
                <div className={`status-message ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

