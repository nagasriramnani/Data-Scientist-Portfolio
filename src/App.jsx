// src/App.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticlesBg from "particles-bg";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from './components/Certifications';
import Contact from "./components/Contact";

// (Upcoming: Experience, Education, Contact)

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Certifications/>
      <Contact/>
      {/* Experience, Education, Contact (upcoming) */}
    </>
  );
}

export default App;
