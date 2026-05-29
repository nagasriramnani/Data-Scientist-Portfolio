"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "DevVerse — The AI Metaverse",
        desc: "3D metaverse that converts GitHub profiles into virtual interactive worlds with VR, WebRTC voice, and AI-generated spatial assets. Fuses social networking, spatial computing, and generative AI.",
        tags: ["WebXR", "Three.js", "React Three Fiber", "Next.js 14", "LangChain", "Supabase"],
        github: "https://github.com/nagasriramnani",
    },
    {
        title: "Face Super-Resolution Identity Preservation",
        desc: "Empirical audit of facial identity preservation across SOTA super-resolution models on 3,000 FairFace samples. Quantified identity drift via ArcFace embedding cosine similarity.",
        tags: ["ArcFace", "GFPGAN", "CodeFormer", "RealESRGAN", "Computer Vision"],
    },
    {
        title: "QueenAI Enterprise",
        desc: "Multi-agent customer service system fusing LangGraph orchestration with ANT bio-inspired swarm intelligence for adaptive, self-healing enterprise AI workflows.",
        tags: ["LangGraph", "Multi-Agent Systems", "Swarm AI", "Python"],
        github: "https://github.com/nagasriramnani/Ant-Customer-Service-AI-Agent",
    },
    {
        title: "Digital Twin for Autonomous Driving",
        desc: "D2RL edge-case reinforcement learning simulation in CARLA for autonomous vehicle safety validation. Combines domain randomisation with deep RL for rare-scenario coverage. (MSc Dissertation)",
        tags: ["Reinforcement Learning", "CARLA", "D2RL", "Digital Twin"],
        github: "https://github.com/nagasriramnani/Reinforcement-learning-Validating-Safety-Autonomous-vehicles-Highway-env-D2RL",
    },
    {
        title: "RunFit",
        desc: "Gamified, social, map-based running app targeting Gen Z in India. Blends fitness tracking, social challenges, and interactive city maps into a habit-forming mobile experience.",
        tags: ["Mobile", "Gamification", "Maps API", "Social"],
        github: "https://github.com/nagasriramnani/RunFit",
    },
    {
        title: "Smart-Hire AI Recruiter",
        desc: "Local-first AI recruitment platform with custom ML candidate ranking. Privacy-preserving design runs entirely on-device with zero candidate data leaving the organisation.",
        tags: ["TypeScript", "ML Ranking", "FastAPI", "Privacy-First"],
        github: "https://github.com/nagasriramnani/Smart-Hire-AI-Recruiter",
    }
];

export default function Projects() {
    return (
        <section className="bg-transparent py-24 px-6 md:px-16 relative z-20">
            <div className="w-full max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Featured <span className="text-[#FF5A1F]">Work</span>
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Architecting intelligent platforms from research theory to scalable enterprise code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative flex flex-col justify-between h-full bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#FF5A1F]/50 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF5A1F]/0 to-transparent group-hover:via-[#FF5A1F]/50 transition-all duration-700" />

                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-10 h-10 rounded-full bg-[#FF5A1F]/20 flex items-center justify-center border border-[#FF5A1F]/30 group-hover:scale-110 transition-transform">
                                        <span className="text-[#FF5A1F] text-xl">
                                            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                        </span>
                                    </div>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                                                <Github className="w-6 h-6" />
                                            </a>
                                        )}
                                        <a href="#" className="text-neutral-400 hover:text-[#FF5A1F] transition-colors">
                                            <ExternalLink className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#FF5A1F] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-300 mb-8 leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs font-jetbrains-mono bg-white/10 text-neutral-300 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
