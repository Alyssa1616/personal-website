import React from 'react';

const ProjectCard = ({ title, description, imageUrl, webLink, githubLink }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      {webLink ?
      <a href={webLink} target="_blank" rel="noopener noreferrer" className="github-link">
        View Website
      </a> : null}
      {githubLink ?
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
        View on GitHub
      </a> : null}
    </div>
  );
};

export default ProjectCard;