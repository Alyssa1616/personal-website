import React, { useEffect } from 'react';
import "../../styles/Skills.css";
import skills from './skillsData';

const Skills = () => {
  useEffect(() => {
    const circles = document.querySelectorAll(".skills-circle[data-speed]");
    const onScroll = () => {
      circles.forEach((circle) => {
        const speed = parseFloat(circle.dataset.speed);
        const section = circle.closest(".skills-page");
        const rect = section.getBoundingClientRect();
        const offset = -rect.top * speed;
        circle.style.transform = `translateY(${offset}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="skills-page">
      {/* <div className="skills-circle sc1" data-speed="0.1" />
      <div className="skills-circle sc2" data-speed="0.07" />
      <div className="skills-circle sc3" data-speed="0.04" /> */}

      <p className="skills-eyebrow">What I work with</p>
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
