"use client";

import { motion } from "framer-motion";

interface SkillCategory {
    category: string;
    color: string;
    skills: string[];
}

// Maps display names to Simple Icons slugs
function logoSlug(name: string): string {
    const map: Record<string, string> = {
        "Python": "python",
        "JavaScript": "javascript",
        "TypeScript": "typescript",
        "Bash": "gnubash",
        "TensorFlow": "tensorflow",
        "PyTorch": "pytorch",
        "Docker": "docker",
        "Kubernetes": "kubernetes",
        "Azure": "microsoftazure",
        "AWS": "amazonaws",
        "FastAPI": "fastapi",
        "Node.js": "nodedotjs",
        "PostgreSQL": "postgresql",
        "MongoDB": "mongodb",
        "Redis": "redis",
        "LangChain": "langchain",
        "OpenAI": "openai",
        "HuggingFace": "huggingface",
        "Spark": "apachespark",
        "Kafka": "apachekafka",
        "Airflow": "apacheairflow",
        "Pandas": "pandas",
        "Terraform": "terraform",
        "Flask": "flask",
        "Express": "express",
        "Databricks": "databricks",
        "Power BI": "powerbi",
        "Elasticsearch": "elasticsearch",
        "scikit-learn": "scikitlearn",
        "OpenCV": "opencv",
        "Tableau": "tableau",
        "Copilot Studio": "microsoft",
        "MySQL": "mysql",
    };
    return map[name] || name.toLowerCase().replace(/[\s.]/g, "");
}

const skillCategories: SkillCategory[] = [
    {
        category: "Languages",
        color: "#00C8FF",
        skills: ["Python", "JavaScript", "TypeScript", "Bash", "SQL"],
    },
    {
        category: "AI / LLM & Agentic",
        color: "#FF6B2B",
        skills: [
            "OpenAI", "Azure OpenAI", "AWS Bedrock", "LangChain", "LangGraph",
            "RAG", "FAISS", "pgvector", "Copilot Studio", "Prompt Engineering",
            "Multi-Agent Systems", "MCP", "HuggingFace", "TensorFlow", "PyTorch",
            "scikit-learn", "OpenCV",
        ],
    },
    {
        category: "Microsoft Power Platform",
        color: "#00C8FF",
        skills: ["Power Platform", "Power Automate", "Dataverse", "API Connectors", "Power BI"],
    },
    {
        category: "Cloud / DevOps / ALM",
        color: "#FF6B2B",
        skills: [
            "Azure", "Data Factory", "Databricks", "Azure SQL", "Key Vault",
            "Azure DevOps", "CI/CD", "Docker", "Kubernetes", "AWS", "S3",
            "Lambda", "SageMaker", "CloudWatch", "Terraform",
        ],
    },
    {
        category: "Backend / Integration",
        color: "#00C8FF",
        skills: [
            "FastAPI", "Flask", "Node.js", "Express", "REST APIs",
            "Microservices", "Event-Driven", "JWT Auth", "MongoDB", "Redis",
        ],
    },
    {
        category: "Data / Governance",
        color: "#FF6B2B",
        skills: [
            "PySpark", "Pandas", "PostgreSQL", "MySQL", "NoSQL", "Vector Databases",
            "Power BI", "Tableau", "Kafka", "Airflow", "Elasticsearch",
            "Data Lineage", "Feature Stores",
        ],
    },
];

export default function Skills() {
    return (
        <section className="min-h-screen bg-transparent py-32 px-6 md:px-16 flex items-center justify-center relative z-20">
            <div className="w-full max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2
                        className="text-4xl md:text-6xl font-bold mb-4"
                        style={{ fontFamily: "'Clash Display', var(--font-display), sans-serif" }}
                    >
                        Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#FF6B2B]">Arsenal</span>
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                        Tools and technologies I use to turn ideas into intelligent systems.
                    </p>
                </motion.div>

                {/* Infinite Scrolling Logo Marquee */}
                <div className="relative mb-20 overflow-hidden">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0A0A0A]/80 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0A0A0A]/80 to-transparent pointer-events-none" />

                    {/* Row 1 — scrolls left */}
                    <div className="flex mb-4 marquee-row">
                        <div className="flex shrink-0 animate-marquee gap-6 pr-6">
                            {["Python", "JavaScript", "TypeScript", "TensorFlow", "PyTorch", "Docker", "Kubernetes", "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Redis", "LangChain", "HuggingFace"].map((name) => (
                                <span key={name} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.06] text-neutral-400 text-sm whitespace-nowrap">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={`https://cdn.simpleicons.org/${logoSlug(name)}/ffffff`} alt={name} className="w-4 h-4 opacity-60" />
                                    {name}
                                </span>
                            ))}
                        </div>
                        <div className="flex shrink-0 animate-marquee gap-6 pr-6" aria-hidden>
                            {["Python", "JavaScript", "TypeScript", "TensorFlow", "PyTorch", "Docker", "Kubernetes", "Azure", "AWS", "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Redis", "LangChain", "OpenAI", "HuggingFace"].map((name) => (
                                <span key={name} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.06] text-neutral-400 text-sm whitespace-nowrap">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={`https://cdn.simpleicons.org/${logoSlug(name)}/ffffff`} alt={name} className="w-4 h-4 opacity-60" />
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 — scrolls right */}
                    <div className="flex marquee-row">
                        <div className="flex shrink-0 animate-marquee-reverse gap-6 pr-6">
                            {["Spark", "Kafka", "Airflow", "Pandas", "Terraform", "Flask", "Express", "Databricks", "Elasticsearch", "scikit-learn", "OpenCV", "Bash", "MySQL"].map((name) => (
                                <span key={name} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.06] text-neutral-400 text-sm whitespace-nowrap">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={`https://cdn.simpleicons.org/${logoSlug(name)}/ffffff`} alt={name} className="w-4 h-4 opacity-60" />
                                    {name}
                                </span>
                            ))}
                        </div>
                        <div className="flex shrink-0 animate-marquee-reverse gap-6 pr-6" aria-hidden>
                            {["Spark", "Kafka", "Airflow", "Pandas", "Terraform", "Flask", "Express", "Databricks", "Power BI", "Elasticsearch", "scikit-learn", "OpenCV", "Tableau", "Copilot Studio", "Bash", "MySQL"].map((name) => (
                                <span key={name} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.06] text-neutral-400 text-sm whitespace-nowrap">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={`https://cdn.simpleicons.org/${logoSlug(name)}/ffffff`} alt={name} className="w-4 h-4 opacity-60" />
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-14">
                    {skillCategories.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-3 h-3 rounded-full shrink-0"
                                    style={{ backgroundColor: group.color, boxShadow: `0 0 12px ${group.color}` }}
                                />
                                <h3 className="text-lg md:text-xl font-bold tracking-wide" style={{ color: group.color }}>
                                    {group.category}
                                </h3>
                                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                            </div>

                            {/* Skill Pills — Text Only */}
                            <div className="flex flex-wrap gap-3 pl-7">
                                {group.skills.map((skill, i) => (
                                    <motion.span
                                        key={`${group.category}-${skill}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.02 }}
                                        className="px-5 py-2.5 rounded-xl text-sm font-medium
                               bg-white/[0.04] border border-white/[0.08] text-neutral-300
                               hover:text-white cursor-default transition-all duration-300
                               hover:scale-105"
                                        onMouseEnter={(e) => {
                                            const el = e.currentTarget;
                                            el.style.borderColor = group.color;
                                            el.style.boxShadow = `0 0 20px ${group.color}25, inset 0 0 15px ${group.color}08`;
                                            el.style.background = `linear-gradient(135deg, ${group.color}12, transparent)`;
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.currentTarget;
                                            el.style.borderColor = "rgba(255,255,255,0.08)";
                                            el.style.boxShadow = "none";
                                            el.style.background = "rgba(255,255,255,0.04)";
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
