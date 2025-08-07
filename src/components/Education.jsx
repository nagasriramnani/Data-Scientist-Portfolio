import React from "react";
import "./Education.css";
import ParticlesBg from "particles-bg";

const educationTimeline = [
  {
    degree: "MSc in Big Data & High Performance Computing",
    institution: "University of Liverpool",
    logo: "/icons/liverpool.webp",
    duration: "2022 – 2023",
    details: [
      "Graduated Grade: Merit [2:1]",
      "Dissertation: Deep Dense Reinforcement Learning in Validating Safety Autonomous Vehicles",
      "Used PyTorch + OpenAI Gym for RL simulation of autonomous control systems",
      "Emphasized geometric reward signal propagation & spatial dynamics for graph-based ML",
    ]
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "GVP College of Engineering",
    logo: "/icons/gvp.jpeg",
    duration: "2018 – 2022",
    details: [
      "Graduated with First Class; GPA: 7.1",
      "Core areas: Algorithms, Data Structures, OS, DBMS"
    ]
  }
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <ParticlesBg type="cobweb" color="#ffffff" bg={true} />

      <h2 className="education-title" data-aos="fade-up">Education</h2>

      <div className="education-timeline">
        {educationTimeline.map((edu, index) => (
          <div className="edu-timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
            <div className="edu-timeline-icon" />
            <div className="edu-timeline-content">
              <div className="edu-header">
                <img src={edu.logo} alt={`${edu.institution} logo`} className="edu-logo" />
                <div>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p className="edu-duration">{edu.duration}</p>
                </div>
              </div>
              <ul>
                {edu.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
