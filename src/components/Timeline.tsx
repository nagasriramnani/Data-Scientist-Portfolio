"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        year: "Jun 2026–Present",
        role: "KTP Associate — AI Product Engineer",
        company: "Ulster University & The Odyssey Trust",
        desc: "Knowledge Transfer Partnership bridging academic AI research with applied product development. Building LLM-powered and intelligent systems under university supervision in Belfast."
    },
    {
        year: "2025",
        role: "Freelance GenAI Specialist",
        company: "Pareto.AI",
        desc: "Built LLM-powered RAG APIs and generative AI pipelines for enterprise clients — vector search, document intelligence, and multi-modal workflows."
    },
    {
        year: "2024–Apr 2026",
        role: "Data & AI Support Associate",
        company: "DWP (UK Government)",
        desc: "Engineered Azure AI platforms serving millions of citizens: Azure OpenAI & Copilot Studio deployments, Power Automate pipelines, and Databricks data engineering at government scale."
    },
    {
        year: "2022–2024",
        role: "MSc Big Data & High Performance Computing",
        company: "University of Liverpool",
        desc: "Dissertation: Digital Twin for Autonomous Driving — D2RL edge-case reinforcement learning simulation in CARLA for safety validation."
    },
    {
        year: "~2020",
        role: "ML Consultant",
        company: "Mars Inno India",
        desc: "Machine learning consulting and model development for early-stage technology products."
    },
    {
        year: "2018–2022",
        role: "B.Tech Computer Science & Engineering",
        company: "GVP College of Engineering",
        desc: "Foundation in algorithms, data structures, software engineering, machine learning, and computer vision."
    }
];

export default function Timeline() {
    return (
        <section className="bg-transparent py-24 px-6 md:px-16 relative z-20">
            <div className="w-full max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Experience &amp; <span className="text-[#FF5A1F]">Education</span>
                    </h2>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0">
                    {/* Glowing line overlay */}
                    <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-[#FF5A1F] to-transparent opacity-50" />

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="mb-12 pl-8 md:pl-12 relative group"
                        >
                            {/* Timeline Connector Dot */}
                            <div className="absolute left-[-5px] top-1.5 w-[10px] h-[10px] rounded-full bg-[#070707] border-2 border-[#FF5A1F] group-hover:scale-150 group-hover:bg-[#FF5A1F] transition-all duration-300 shadow-[0_0_10px_#FF5A1F]" />

                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                                <span className="text-[#FF5A1F] font-jetbrains-mono font-bold tracking-wider shrink-0">
                                    {exp.year}
                                </span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-[#FF5A1F] transition-colors duration-300">
                                    {exp.role} <span className="text-neutral-500 font-normal">@ {exp.company}</span>
                                </h3>
                            </div>
                            <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
                                {exp.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
