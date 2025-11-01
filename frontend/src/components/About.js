import React from 'react';
import { FaUser, FaRocket, FaUserFriends, FaLightbulb, FaHandshake } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import './About.css';

const About = () => {
  return (
    <section className="about fade-in-section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="avatar-placeholder">
                <FaUser className="avatar-icon" />
              </div>
              <div className="floating-badge badge-1">
                <span>Next.js</span>
              </div>
              <div className="floating-badge badge-2">
                <span>Node.js</span>
              </div>
              <div className="floating-badge badge-3">
                <span>AI</span>
              </div>
              <div className="floating-badge badge-4">
                <span>Python</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <div className="text-highlight">
              <FaRocket className="highlight-icon" />
              <h3>Passionate About Web development</h3>
            </div>

            <p>
              I'm a <strong>Full Stack Developer</strong> with a passion for creating
              innovative solutions that blend various technologies with exceptional
              user experiences. My coding in tech started with curiosity and has
              evolved into a career dedicated to building impactful software products.
            </p>

            <p>
              Specializing in <strong>Next.js, Python, Node.js, API integrations, and AI</strong>,
              I transform complex problems into elegant, scalable solutions. I believe
              in writing clean, maintainable code and am confident in my ability to learn and adapt to new technologies quickly.
            </p>

            <div className="highlights-grid">
              <div className="highlight-card">
                <div className="highlight-icon-wrapper">
                  <FaUserFriends />
                </div>
                <h4>Attentive listener</h4>
                <p>I am a great listener of others needs and concerns, and I am always willing to help others.</p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon-wrapper">
                  <FaLightbulb />
                </div>
                <h4>Innovation First</h4>
                <p>Always exploring my own solutions</p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon-wrapper">
                  <FaHandshake />
                </div>
                <h4>Collaborative</h4>
                <p>Great team player with strong communication</p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon-wrapper">
                  <HiLightningBolt />
                </div>
                <h4>Performance</h4>
                <p>Optimized, fast, and efficient code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

