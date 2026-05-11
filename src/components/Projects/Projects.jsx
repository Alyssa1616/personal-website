import React from "react";
import "../../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import projects from './projectsData';

const Projects = () => {
  return (
    <main>
      <section className="projects-page">
        {/* <div className="projects-circle pc1" />
        <div className="projects-circle pc2" /> */}
        <p className="projects-eyebrow">What I've built</p>
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
              cardClass={index === 7 ? "small-image" : ""}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;