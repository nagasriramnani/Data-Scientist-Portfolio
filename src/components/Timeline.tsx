"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        year: "2024–Present",
        role: "Data & AI Support Associate",
        company: "DWP",
        desc: "Engineering Azure-based AI data platforms for UK government."
    },
    {
        year: "2025",
        role: "Freelance GenAI Specialist",
        company: "Pareto.AI",
        desc: "Building LLM-powered RAG APIs and secure vector search solutions."
    },
    {
        year: "2022–2024",
        role: "MSc Big Data & HPC",
        company: "University of Liverpool",
        desc: "D2RL Digital Twin Dissertation."
    },
    {
        year: "~2020",
        role: "ML Consultant",
        company: "Mars Inno India",
        desc: "Predictive models and ETL pipelines for supply-chain intelligence."
    },
    {
        year: "2018–2022",
        role: "B.Tech CSE",
        company: "GVP College",
        desc: "OpenPose + 3D-CNNs Research."
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
                        Experience & <span className="text-[#00C8FF]">Education</span>
                    </h2>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0">
                    {/* Glowing line overlay */}
                    <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-[#00C8FF] via-[#FF6B2B] to-transparent opacity-50" />

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
                            <div className="absolute left-[-5px] top-1.5 w-[10px] h-[10px] rounded-full bg-[#0A0A0A] border-2 border-[#00C8FF] group-hover:scale-150 group-hover:bg-[#00C8FF] transition-all duration-300 shadow-[0_0_10px_#00c8ff]" />

                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                                <span className="text-[#FF6B2B] font-jetbrains-mono font-bold tracking-wider shrink-0">
                                    {exp.year}
                                </span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-[#00C8FF] transition-colors duration-300">
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
