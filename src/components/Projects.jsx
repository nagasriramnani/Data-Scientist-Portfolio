// src/components/Projects.jsx
import React from "react";
import "./Projects.css";
import ParticlesBg from "particles-bg";

// Import project images
import project1 from "../assets/projects/data-science.jpg";
import project2 from "../assets/projects/nlp.jpg";
import project3 from "../assets/projects/powerbi.jpg";
import project4 from "../assets/projects/aws-erp.jpg";

const projects = [
  {
    title: "Data Science Projects",
    image: project1,
    github: "https://github.com/nagasriramnani/Data-Science-Projects",
  },
  {
    title: "NLP Projects",
    image: project2,
    github: "https://github.com/nagasriramnani/NLP-PROJECTS",
  },
  {
    title: "Power BI Dashboards",
    image: project3,
    github: "https://github.com/nagasriramnani/PowerBI-Visual-Dashboard-Projects",
  },
  {
    title: "AWS-based ERP System",
    image: project4,
    github: "https://github.com/nagasriramnani/AWS-BASED-ERP-SYSTEM",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <ParticlesBg type="cobweb" color="#ffffff" bg={true} />

      <h2 className="projects-title" data-aos="fade-up">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="flip-left"
            data-aos-delay={index * 200}
            data-aos-duration="1000"
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  View on GitHub
                </a>
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
