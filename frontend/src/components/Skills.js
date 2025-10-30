import React from 'react';
import { FaPalette, FaCog, FaDatabase, FaBrain, FaRocket, FaTools } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaPalette,
      color: '#00f5ff',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Framer Motion', level: 88 }
      ]
    },
    {
      title: 'Backend',
      icon: FaCog,
      color: '#ff00ff',
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Express', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'GraphQL', level: 82 },
        { name: 'REST APIs', level: 95 }
      ]
    },
    {
      title: 'Database',
      icon: FaDatabase,
      color: '#ffff00',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'Redis', level: 85 },
        { name: 'Firebase', level: 87 },
        { name: 'SQL', level: 92 }
      ]
    },
    {
      title: 'AI & ML',
      icon: FaBrain,
      color: '#00f5ff',
      skills: [
        { name: 'OpenAI API', level: 88 },
        { name: 'TensorFlow', level: 75 },
        { name: 'LangChain', level: 82 },
        { name: 'Vector DB', level: 80 },
        { name: 'Prompt Eng.', level: 90 }
      ]
    },
    {
      title: 'DevOps',
      icon: FaRocket,
      color: '#ff00ff',
      skills: [
        { name: 'Docker', level: 87 },
        { name: 'AWS', level: 85 },
        { name: 'CI/CD', level: 88 },
        { name: 'Nginx', level: 82 },
        { name: 'Linux', level: 90 }
      ]
    },
    {
      title: 'Tools',
      icon: FaTools,
      color: '#ffff00',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'VS Code', level: 98 },
        { name: 'Figma', level: 85 },
        { name: 'Postman', level: 90 },
        { name: 'Webpack', level: 82 }
      ]
    }
  ];

  return (
    <section className="skills fade-in-section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-intro">
          <p>
            Comprehensive skill set across the full development stack, 
            with special focus on modern web technologies and AI integration.
          </p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                className="skill-category" 
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="category-header">
                  <IconComponent className="category-icon" />
                  <h3>{category.title}</h3>
                </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

