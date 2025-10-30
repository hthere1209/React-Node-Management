import React from 'react';
import { FaUser, FaRocket, FaLightbulb, FaHandshake } from 'react-icons/fa';
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
                <span>React</span>
              </div>
              <div className="floating-badge badge-2">
                <span>Node.js</span>
              </div>
              <div className="floating-badge badge-3">
                <span>AI</span>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <div className="text-highlight">
              <FaRocket className="highlight-icon" />
              <h3>Passionate About Technology</h3>
            </div>
            
            <p>
              I'm a <strong>Full Stack Developer</strong> with a passion for creating 
              innovative solutions that blend cutting-edge technology with exceptional 
              user experiences. My journey in tech started with curiosity and has 
              evolved into a career dedicated to building impactful digital products.
            </p>
            
            <p>
              Specializing in <strong>React, Node.js, and AI integration</strong>, 
              I transform complex problems into elegant, scalable solutions. I believe 
              in writing clean, maintainable code and staying ahead of the curve with 
              emerging technologies.
            </p>
            
            <div className="highlights-grid">
              <div className="highlight-card">
                <div className="highlight-icon-wrapper">
                  <FaRocket />
                </div>
                <h4>Mission-Driven</h4>
                <p>Focused on delivering value through technology</p>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon-wrapper">
                  <FaLightbulb />
                </div>
                <h4>Innovation First</h4>
                <p>Always exploring cutting-edge solutions</p>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon-wrapper">
                  <FaHandshake />
                </div>
                <h4>Collaborative</h4>
                <p>Team player with strong communication</p>
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

