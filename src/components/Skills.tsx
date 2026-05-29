"use client";

import { motion } from "framer-motion";

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

interface BentoCategory {
    index: string;
    category: string;
    skills: string[];
    span: string;
    flagship?: boolean;
}

const bento: BentoCategory[] = [
    {
        index: "01",
        category: "AI / LLM & Agentic",
        skills: [
            "OpenAI", "Azure OpenAI", "AWS Bedrock", "LangChain", "LangGraph",
            "RAG", "FAISS", "pgvector", "Copilot Studio", "MCP", "HuggingFace",
            "Multi-Agent Systems", "Prompt Engineering",
        ],
        span: "md:col-span-2 md:row-span-2",
        flagship: true,
    },
    {
        index: "02",
        category: "Languages",
        skills: ["Python", "JavaScript", "TypeScript", "SQL", "Bash", "Java"],
        span: "md:col-span-2",
    },
    {
        index: "03",
        category: "ML Frameworks",
        skills: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV"],
        span: "",
    },
    {
        index: "04",
        category: "Backend & APIs",
        skills: ["FastAPI", "Flask", "Node.js", "Express", "REST APIs", "Microservices", "JWT Auth"],
        span: "",
    },
    {
        index: "05",
        category: "Cloud & DevOps",
        skills: [
            "Azure", "Data Factory", "Databricks", "Azure SQL", "Key Vault",
            "Azure DevOps", "CI/CD", "Docker", "Kubernetes", "Terraform", "AWS",
        ],
        span: "md:col-span-2",
    },
    {
        index: "06",
        category: "Data & Governance",
        skills: [
            "PySpark", "Pandas", "PostgreSQL", "MySQL", "MongoDB", "Redis",
            "Vector Databases", "Kafka", "Airflow", "Elasticsearch", "Power BI", "Tableau",
        ],
        span: "md:col-span-2",
    },
    {
        index: "07",
        category: "Microsoft Power Platform",
        skills: ["Power Platform", "Power Automate", "Dataverse", "API Connectors", "Copilot Studio"],
        span: "",
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
                    className="mb-16 flex items-end justify-between"
                >
                    <h2
                        className="text-4xl md:text-6xl font-bold"
                        style={{ fontFamily: "'Clash Display', var(--font-display), sans-serif" }}
                    >
                        Tech <span className="text-[#FF5A1F]">Arsenal</span>
                    </h2>
                    <p className="hidden md:block font-jetbrains-mono text-xs tracking-[0.2em] uppercase text-neutral-500">
                        7 domains · 50+ tools
                    </p>
                </motion.div>

                {/* Infinite Scrolling Logo Marquee */}
                <div className="relative mb-16 overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#070707]/80 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#070707]/80 to-transparent pointer-events-none" />

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

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(150px,auto)] gap-4">
                    {bento.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.06 }}
                            className={`group flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 ${group.span} ${
                                group.flagship
                                    ? "bg-white/[0.06] border-white/15 hover:border-[#FF5A1F]"
                                    : "bg-white/[0.03] border-white/10 hover:border-[#FF5A1F] hover:bg-white/[0.05]"
                            }`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className="font-jetbrains-mono text-xs text-[#FF5A1F]">{group.index}</span>
                            </div>
                            <div className="mt-auto">
                                <h3
                                    className={`font-bold mb-4 ${group.flagship ? "text-2xl md:text-3xl" : "text-xl"}`}
                                    style={{ fontFamily: "'Clash Display', var(--font-display), sans-serif" }}
                                >
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={`${group.category}-${skill}`}
                                            className="font-jetbrains-mono text-[0.72rem] text-neutral-300 border border-white/10 rounded-lg px-2.5 py-1 group-hover:border-white/20 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
