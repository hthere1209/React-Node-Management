import React, { useEffect, useState } from 'react';
import { HiLightningBolt } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full Stack Developer',
    'AI Enthusiast',
    'Quick Learner',
    'Problem Solver',
    'Effective communicator'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section className="hero" id="home">
      <div className="hero-content container">
        <div className="hero-text">
          <div className="hero-tag">
            <HiLightningBolt className="tag-icon" />
            <span>AI-Powered Portfolio</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Jasjek J</span>
          </h1>

          <div className="hero-subtitle">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            I craft exceptional digital experiences using various technologies.
            Specializing in Next.js, Node.js, Python, and AI integration to build the future of web.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number gradient-text">50+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-number gradient-text">8+</div>
              <div className="stat-label">Years Exp</div>
            </div>
            <div className="stat">
              <div className="stat-number gradient-text">95%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
          <div className="code-window">
            <div className="window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="window-content">
              <pre>
                <code>
                  {`const fullStackDeveloper = {
  name: "Jasjek J",
  skills: ["Next.js", "Node.js", "Python", "AI"],
  passion: "Building AI ⚡",
  status: "Available",
  superpower: "Code + Coffee + AI"
};

fullStackDeveloper.code();`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

