// src/components/Experience.jsx
import React from "react";
import "./Experience.css";
import ParticlesBg from "particles-bg";
import DWPLogo from "./DWP.jpg";
import MarsLogo from "./mars.jpeg";
import Lottie from "lottie-react";
import businessAnalysis from "./businessanalysis.json";
import digitalAnalysis from "./digital.json";

const experiences = [
  {
    role: "Recruitment Data Analyst – Labour Market Insights",
    company: "Department for Work and Pensions (DWP)",
    location: "London, UK",
    icon: DWPLogo,
    duration: "Jun 2025 – Present (2 mos)",
    type: "Full-time, On-site",
    details: [
      "Designed automated workflows for labour market data processing to support policy reporting.",
      "Created dashboards to track recruitment KPIs, reducing turnaround time by 20%.",
      "Liaised with policy teams to troubleshoot data-related issues and validate reports.",
      "Integrated Excel + SQL systems to improve data accuracy for employment tracking.",
    ],
    skills: [
      "Cross-team collaboration",
      "Team management",
      "Strategic planning",
      "Data analysis",
      "Stakeholder engagement",
    ],
  },
  {
    role: "Universal Credit Claim Analyst",
    company: "Department for Work and Pensions (DWP)",
    location: "London, UK",
    icon: DWPLogo,
    duration: "Oct 2024 – Present (10 mos)",
    type: "",
    details: [
      "Conducted structured, work-focused interviews to assess claimant circumstances and collect data on barriers to employment.",
      "Analysed claimant data to identify patterns and recommend targeted interventions.",
      "Prepared reports summarising findings to support policy improvements and service delivery.",
      "Liaised with internal DevOps teams to support infrastructure for claim processing.",
    ],
    skills: [
      "Data Collection",
      "Reporting",
      "Policy Analytics",
      "Cross-functional Communication",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Mars Inno India Pvt Ltd",
    location: "Visakhapatnam",
    icon: MarsLogo,
    duration: "Mar 2020 – Mar 2022",
    type: "",
    details: [
      "Developed end-to-end predictive pipelines to forecast crop yields using regression and tree-based models.",
      "Delivered insight dashboards in Tableau/Power BI.",
      "Automated data cleaning and preprocessing using Python and SQL across large agricultural datasets.",
      "Engaged in remote processing of datasets and integration with internal systems.",
    ],
    skills: ["Machine Learning", "Data Engineering", "SQL", "Python", "Power BI"],
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <ParticlesBg type="cobweb" color="#ffffff" bg={true} />

      <h2 className="experience-title" data-aos="fade-up">Experience</h2>

      <div className="experience-wrapper">
        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="timeline-icon" />
              <div className="timeline-content">
                <div className="experience-header">
                  <img src={exp.icon} alt={`${exp.company} logo`} className="company-icon" />
                  <div>
                    <h3>{exp.role}</h3>
                    <h4>{exp.company} — <span>{exp.location}</span></h4>
                    <p className="duration">{exp.duration} {exp.type && `• ${exp.type}`}</p>
                  </div>
                </div>
                <ul>
                  {exp.details.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
                <div className="skills-tags">
                  {exp.skills.map((skill, i) => (
                    <span className="skill-tag" key={i}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lottie Animation */}
        <div className="experience-lottie" data-aos="zoom-in">
          <Lottie animationData={businessAnalysis} loop autoplay />
          <div className="spacer" />
          <Lottie animationData={digitalAnalysis} loop autoplay />
        </div>
      </div>
    </section>
  );
};

export default Experience;
