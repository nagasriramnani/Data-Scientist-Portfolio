// src/components/About.jsx
import React from "react";
import "./About.css";
import ParticlesBg from "particles-bg";
import Lottie from "lottie-react";
import animationData from "./user-interface.json";

const About = () => {
  return (
    <section className="about-section" id="about">
        <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
      <div className="about-container">
        <div className="about-text" data-aos="fade-right">
          <h2>About <span>Me</span></h2>
          <p>
            I'm <strong>Naga Sri Ram Kochetti</strong>, a passionate and dedicated Computer Science graduate with an MSc in Big <strong>Data and High-Performance Computing</strong> from the University of Liverpool.
          </p>
          <p>
            With expertise in <strong>Data Science, AI/ML, Data Engineering, and DevOps</strong>, I aim to turn data into innovation, and shape the future with actionable insights.
          </p>
          <p>
            I’m always exploring cutting-edge technologies, solving complex problems, and working on impactful projects.
          </p>
        </div>
        <div className="about-animation" data-aos="fade-left">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default About;
