import React, { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Add smooth reveal animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
      
      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button 
          className="floating-chat-btn"
          onClick={() => setIsChatOpen(true)}
          aria-label="Open AI Chat"
        >
          <FaRobot className="chat-icon" />
          <span className="chat-pulse"></span>
        </button>
      )}
      
      <footer className="footer">
        <div className="container">
          <p>© 2025 Ronnel Jatulan. Crafted with React & AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

