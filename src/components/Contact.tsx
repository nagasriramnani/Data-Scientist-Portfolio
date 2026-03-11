"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <footer className="bg-transparent pt-24 pb-12 px-6 md:px-16 relative z-20 border-t border-white/5 overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#00C8FF] opacity-[0.03] blur-[120px] pointer-events-none rounded-full" />

            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#FF6B2B]">collaborate?</span>
                    </h2>
                    <div className="space-y-4 mb-8">
                        <p className="text-neutral-300 font-medium">Currently looking for:</p>
                        <ul className="text-neutral-400 space-y-2 font-jetbrains-mono text-sm leading-relaxed">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00C8FF]" /> PhD opportunities in AI/ML</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B]" /> Senior AI Engineer roles</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white" /> Open-source collaborators</li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {["Gov AI", "Healthcare", "Enterprise Systems", "Self-Evolving Intelligent Systems"].map((domain) => (
                            <span key={domain} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-400">
                                {domain}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-start md:items-end gap-6"
                >
                    <a
                        href="mailto:nagasriramkochetti@gmail.com"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00C8FF] rounded-full text-white font-medium transition-all duration-300 backdrop-blur-md overflow-hidden"
                    >
                        <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-[200%] group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-[#00C8FF]" />
                        Say Hello
                    </a>

                    <div className="flex gap-4 mt-2">
                        <a href="https://github.com/nagasriramnani" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#FF6B2B] hover:bg-[#FF6B2B]/10 text-neutral-400 hover:text-white transition-all duration-300">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/naga-sri-ram-kochetti-72a464189" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#00C8FF] hover:bg-[#00C8FF]/10 text-neutral-400 hover:text-white transition-all duration-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://leetcode.com/RexDrw" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white hover:bg-white/10 text-neutral-400 hover:text-white transition-all duration-300 group font-bold tracking-tighter">
                            LC
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="w-full max-w-6xl mx-auto mt-20 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-jetbrains-mono border-t border-white/5 pt-8">
                <p>© {new Date().getFullYear()} Naga Sri Ram Kochetti. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Designed & engineered with Next.js & Framer Motion.</p>
            </div>
        </footer>
    );
}
