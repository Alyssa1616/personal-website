import React from "react";
import "../../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import image1 from '../../assets/dash.png';
import image2 from '../../assets/wics.png';
import image3 from '../../assets/bu.png';
import image4 from '../../assets/portfolio.png';
import image5 from '../../assets/dashstarter.png';
import image6 from '../../assets/communaphasia.png';

const projects = [
  {
    title: 'Dash Hypermedia Research Project',
    description: "Working with Professor Andy van Dam's graphics research group on Dash, a web-based application sponsored by Adobe for interacting with multimedia documents. I focused on integrating learning tools by building a dynamic front end and 2 Flask APIs as well as integrating OpenAI's API.",
    imageUrl: image1,
    webLink: "https://brown-dash.github.io/Dash-Documentation/about/",
    githubLink: 'https://github.com/brown-dash/Dash-Documentation',
  },
  {
    title: 'Brown University WiCS Website',
    description: "Rebuilding the Brown University in Computer Science Website using React, particularly working to integrate resources into the website to increase user traffic. I'm also spearheading a blog page to empower women in tech through sharing experiences.",
    imageUrl: image2,
    webLink: "https://brown-wics.github.io/website/",
    githubLink: 'https://github.com/Brown-WiCS/website',
  },
  {
    title: 'Code Models Entity Tracking Research',
    description: "Working with Dr. Najoung Kim as a research assistant in the Dept. of Computer Science and the Dept. of Linguistics to analyze the ability of large language models to track state changes of discourse entities expressed in natural language.",
    imageUrl: image3,
    githubLink: 'https://github.com/Alyssa1616/code-model-entity-tracking',
  },
  {
    title: 'Portfolio Website',
    description: "Created this website using React, JavaScript, HTML, and CSS.",
    imageUrl: image4,
    // webLink: "https://brown-wics.github.io/website/"
    githubLink: 'https://github.com/Alyssa1616/personal-website',
  },
  {
    title: 'Dash Starter Project',
    description: "For the application of my current research position at Brown, I created a web-based application built for organizing, editing, linking, and analyzing multimedia documents and collections. I used React, Typescript, MobX, and CSS.",
    imageUrl: image5,
    webLink: "https://dash---alyssa-feinberg.web.app/"
  },
  {
    title: 'CommunAphasia',
    description: "Created an icon-based messaging system and speech therapy tool using Swift and Firebase to help improve communication for people with aphasia; collaborated with Boston University aphasia researcher Claire Cordella. Received 1st place, 2022 Congressional App Challenge; presented app to members of Congress at the Capitol in Washington D.C.",
    imageUrl: image6,
    webLink: "https://www.congressionalappchallenge.us/22-ma04/",
    githubLink: 'https://github.com/Alyssa1616/CommunAphasia'
  },
  // {
  //   title: 'Othello',
  //   description: "For the application of my current research position at Brown, I created a web-based application built for organizing, editing, linking, and analyzing multimedia documents and collections. I used React, Typescript, MobX, and CSS.",
  //   imageUrl: image6
  // },
];

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
