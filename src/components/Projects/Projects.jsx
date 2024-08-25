import React from "react";
import "../../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import projects from './projectsData';

const Projects = () => {
    return (
    <main>
      <section className="projects-page">
        <h1>My Projects</h1>
        <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            skills={project.skills}
            imageUrl={project.imageUrl}
            webLink={project.webLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
      </section>
    </main>
    );
};

export default Projects;
