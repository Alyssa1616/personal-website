import React from 'react';

const ProjectCard = ({ title, description, skills, imageUrl, webLink, githubLink }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p className='skill-list'>{skills}</p>
      <p className="description">{description}</p>
      <div className="d-flex justify-content-center button-container">
      {webLink ?
      <a href={webLink} className="btn github-link mx-2" target="_blank" rel="noopener noreferrer">
        View Website
      </a> : null}
      {githubLink ?
      <a href={githubLink} className="btn github-link mx-2" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a> : null}
      </div>
    </div>
  );
};

export default ProjectCard;