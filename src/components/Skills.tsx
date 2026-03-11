"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "AI / ML",
        color: "#00C8FF",
        items: ["LangChain", "LangGraph", "RAG", "ArcFace", "OpenCV", "HuggingFace", "TensorFlow", "PyTorch", "FAISS", "scikit-learn"]
    },
    {
        category: "Cloud",
        color: "#FF6B2B",
        items: ["Azure Synapse", "Data Factory", "Azure ML", "AWS S3", "Lambda", "Docker", "Kubernetes", "Terraform"]
    },
    {
        category: "Backend",
        color: "#00C8FF",
        items: ["Python", "FastAPI", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Redis"]
    },
    {
        category: "Data",
        color: "#FF6B2B",
        items: ["Spark", "Kafka", "Airflow", "dbt", "Pandas", "Power BI", "Elasticsearch"]
    },
    {
        category: "DevOps",
        color: "#00C8FF",
        items: ["GitHub Actions", "CI/CD", "Helm", "Power Platform"]
    }
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
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#FF6B2B]">Arsenal</span>
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                        Tools and technologies I use to turn ideas into intelligent systems.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-5">
                                <div
                                    className="w-3 h-3 rounded-full shrink-0"
                                    style={{ backgroundColor: skillGroup.color, boxShadow: `0 0 12px ${skillGroup.color}` }}
                                />
                                <h3 className="text-xl font-bold tracking-wide" style={{ color: skillGroup.color }}>
                                    {skillGroup.category}
                                </h3>
                                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                            </div>

                            {/* Skill Pills */}
                            <div className="flex flex-wrap gap-3 pl-7">
                                {skillGroup.items.map((item, i) => (
                                    <motion.span
                                        key={item}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.03 }}
                                        className="group relative px-5 py-2.5 rounded-xl text-sm font-medium
                               bg-white/[0.03] border border-white/[0.08] text-neutral-300
                               hover:text-white cursor-default transition-all duration-300
                               hover:border-opacity-50 hover:scale-105"
                                        style={{
                                            // @ts-expect-error CSS custom properties
                                            '--glow-color': skillGroup.color,
                                        }}
                                        onMouseEnter={(e) => {
                                            const el = e.currentTarget;
                                            el.style.borderColor = skillGroup.color;
                                            el.style.boxShadow = `0 0 20px ${skillGroup.color}30, inset 0 0 20px ${skillGroup.color}10`;
                                            el.style.background = `linear-gradient(135deg, ${skillGroup.color}15, transparent)`;
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.currentTarget;
                                            el.style.borderColor = 'rgba(255,255,255,0.08)';
                                            el.style.boxShadow = 'none';
                                            el.style.background = 'rgba(255,255,255,0.03)';
                                        }}
                                    >
                                        {item}
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
