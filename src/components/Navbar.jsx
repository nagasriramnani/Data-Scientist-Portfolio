// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand-name">Naga</span>
        </div>

        <div className="navbar-center">
          <span className="portfolio-title">Portfolio</span>
        </div>

        <nav className="navbar-right">
          <a href="#hero">Home</a>
          <a href="#about">About Me</a>
          <a href="#contact">Connect</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
