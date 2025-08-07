// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import resume from "../assets/Naga_Sri_Ram_Kochetti_Resume.pdf";
import heroImage from "../assets/hero-illustration.png";
import ParticlesBg from "particles-bg";

const techIcons = [
  "/icons/python.svg",
  "/icons/docker.svg",
  "/icons/aws.svg",
  "/icons/linux.png",
  "/icons/git.png",
  "/icons/tensorflow.png",
  "/icons/pandas.png",
  "/icons/hugging-face.png",
  "/icons/jenkins.png",
  "/icons/nelify.png",
  "/icons/postgresql.png",
  "/icons/mysql.png",
  "/icons/powerbi.png"
];

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <ParticlesBg type="cobweb" color="#ffffff" bg={true} />

      <div className="hero-content">
        <h1 data-aos="fade-down">
          Hi, I'm <span>Naga Sri Ram Kochetti</span>
        </h1>

        <h2 data-aos="fade-up" className="typewriter">
          Turning Data into Decisions
        </h2>

        <p data-aos="fade-left" className="subtitle">
          Data Scientist • Data Engineer • DevOps Enthusiast
        </p>

        <div className="hero-buttons" data-aos="zoom-in">
          <a href="https://github.com/nagasriramnani/Data-Scientist-Portfolio" className="btn">View Portfolio</a>
          <a href={resume} download className="btn-outline">Download CV</a>
        </div>

        {/* Tech Stack with animation */}
        <div className="tech-scroll" data-aos="fade-up">
          <p>Tech Stack:</p>
          <div className="scroll-wrapper">
            <div className="scroll-content">
              {[...techIcons, ...techIcons].map((src, i) => (
                <img key={i} src={src} alt={`tech-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-image pulse-hover" data-aos="zoom-in-up">
        <img src={heroImage} alt="Hero Avatar" />
        <div className="social-links-under-avatar">
          <a href="https://www.linkedin.com/in/naga-sri-ram-kochetti-72a464189/" target="_blank">
            <img src="/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/nagasriramnani" target="_blank">
            <img src="/icons/github.png" alt="GitHub" />
          </a>
          <a href="https://leetcode.com/RexDrw/" target="_blank">
            <img src="/icons/leetcode.png" alt="LeetCode" />
          </a>
          <a href="https://instagram.com/" target="_blank">
            <img src="/icons/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
