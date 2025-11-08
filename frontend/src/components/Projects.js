import React, { useState } from 'react';
import { FaBrain, FaShoppingCart, FaComments, FaChartLine, FaImage, FaTasks } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Content Generator',
      description: 'An AI-powered platform that generates high-quality content using GPT-4. Features real-time generation, content optimization, and multi-format export.',
      icon: FaBrain,
      tags: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      category: 'ai',
      demoLink: '#',
      githubLink: '#',
      backgroundImage: 'url(/asset/1.png)'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-featured online marketplace with real-time inventory, payment integration, admin dashboard, and advanced analytics.',
      icon: FaShoppingCart,
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'AWS'],
      category: 'fullstack',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Real-Time Chat App',
      description: 'Modern chat application with WebSocket, end-to-end encryption, file sharing, and video calling capabilities.',
      icon: FaComments,
      tags: ['React', 'Socket.io', 'WebRTC', 'Redis'],
      category: 'fullstack',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics platform with beautiful data visualizations, real-time metrics, and customizable reports.',
      icon: FaChartLine,
      tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      category: 'frontend',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'AI Image Generator',
      description: 'Create stunning images from text descriptions using Stable Diffusion. Features style transfer and image editing.',
      icon: FaImage,
      tags: ['React', 'Python', 'Stable Diffusion', 'S3'],
      category: 'ai',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Task Management System',
      description: 'Collaborative project management tool with kanban boards, time tracking, team collaboration, and reporting.',
      icon: FaTasks,
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      category: 'fullstack',
      demoLink: '#',
      githubLink: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects fade-in-section" id="projects">
      <div className="container">
        <h2 className="section-title">Proudest Projects</h2>
        
        <div className="projects-intro">
          <p>
            A showcase of my recent work, from AI-powered applications to 
            full-stack solutions. Each project demonstrates technical excellence 
            and user-centric design.
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                className="project-card"
                key={project.id}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  backgroundImage: project.backgroundImage // Add background image dynamically here
                }}
              >
                <div className="project-image">
                  <div className="image-overlay"></div>
                  <IconComponent className="project-icon" />
                </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.demoLink} className="project-link">
                    <span>Live Demo</span>
                    <span className="arrow">→</span>
                  </a>
                  <a href={project.githubLink} className="project-link">
                    <span>GitHub</span>
                    <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

