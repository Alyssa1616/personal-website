import React from 'react';
import "../../styles/Skills.css";
import skills from './skillsData';

const Skills = () => {
  return (
    <div className="skills-page">
      <h1>Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;