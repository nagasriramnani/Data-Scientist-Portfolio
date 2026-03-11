"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
    progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
    // Section 1: 0% to 20% (fades out at 20%)
    const opacity1 = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
    const y1 = useTransform(progress, [0, 0.25], [0, -100]);

    // Section 2: 25% to 45%
    const opacity2 = useTransform(progress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(progress, [0.2, 0.3, 0.4, 0.5], [100, 0, 0, -100]);

    // Section 3: 50% to 75%
    const opacity3 = useTransform(progress, [0.45, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
    const y3 = useTransform(progress, [0.45, 0.6, 0.7, 0.8], [100, 0, 0, -100]);

    // Section 4: 80% to 100%
    const opacity4 = useTransform(progress, [0.75, 0.85, 1], [0, 1, 1]);
    const y4 = useTransform(progress, [0.75, 0.85, 1], [100, 0, 0]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none text-white">
            {/* SOCIAL LINKS — Top Right (Always visible during hero) */}
            <motion.div
                style={{ opacity: opacity1 }}
                className="absolute top-8 right-8 md:right-12 z-20 flex flex-col gap-4 pointer-events-auto"
            >
                <a href="https://www.linkedin.com/in/naga-sri-ram-kochetti-72a464189/" target="_blank" rel="noreferrer" className="p-3 bg-white/10 hover:bg-[#00C8FF]/20 border border-white/20 hover:border-[#00C8FF] rounded-full backdrop-blur transition-all duration-300 group" title="LinkedIn">
                    <svg className="w-5 h-5 text-white group-hover:text-[#00C8FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="https://leetcode.com/u/RexDrw/" target="_blank" rel="noreferrer" className="p-3 bg-white/10 hover:bg-[#FF6B2B]/20 border border-white/20 hover:border-[#FF6B2B] rounded-full backdrop-blur transition-all duration-300 group flex items-center justify-center" title="LeetCode">
                    <span className="text-xs font-bold text-white group-hover:text-[#FF6B2B] font-mono leading-none">LC</span>
                </a>
                <a href="https://github.com/nagasriramnani" target="_blank" rel="noreferrer" className="p-3 bg-white/10 hover:bg-[#00C8FF]/20 border border-white/20 hover:border-[#00C8FF] rounded-full backdrop-blur transition-all duration-300 group" title="GitHub">
                    <svg className="w-5 h-5 text-white group-hover:text-[#00C8FF]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
            </motion.div>

            {/* SECTION 1: Bottom Center Aligned */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-20 md:pb-28"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                    Naga Sri Ram Kochetti
                </h1>
                <h2 className="text-2xl md:text-4xl text-[#00C8FF] mb-6 font-medium tracking-wide">
                    AI Systems Architect · Researcher
                </h2>
                <p className="max-w-2xl text-lg md:text-xl text-neutral-300 font-light">
                    I build intelligent systems that reason, scale, and perform under pressure.
                </p>
            </motion.div>

            {/* SECTION 2: Left Aligned */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
            >
                <h2 className="max-w-4xl text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00C8FF] to-[#FF6B2B]">
                    Turning research papers into production systems — that&apos;s my thing.
                </h2>
                <p className="max-w-2xl text-xl md:text-2xl text-neutral-300">
                    Currently engineering Azure AI platforms at DWP & building LLM-powered RAG APIs at Pareto.AI.
                </p>
            </motion.div>

            {/* SECTION 3: Right Aligned */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:px-24"
            >
                <h2 className="max-w-3xl text-4xl md:text-6xl font-bold mb-6">
                    Bridging AI Research & Enterprise Engineering
                </h2>
                <p className="max-w-xl text-xl md:text-2xl text-[#FF6B2B]">
                    MSc Big Data & HPC · Looking for PhD in AI/ML<br />
                    <span className="text-neutral-300 text-lg md:text-xl mt-4 block">Open to Senior AI Engineer roles</span>
                </p>
            </motion.div>

            {/* SECTION 4: Center Aligned Final CTA */}
            <motion.div
                style={{ opacity: opacity4, y: y4 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-auto"
            >
                <h2 className="text-5xl md:text-7xl font-bold mb-12">
                    Let&apos;s build something extraordinary.
                </h2>
                <div className="flex gap-6 z-20">
                    <a href="https://github.com/nagasriramnani" target="_blank" rel="noreferrer" className="p-3 bg-white/10 hover:bg-[#00C8FF]/20 border border-white/20 hover:border-[#00C8FF] rounded-full backdrop-blur transition-all duration-300 group">
                        <svg className="w-6 h-6 text-white group-hover:text-[#00C8FF]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/naga-sri-ram-kochetti-72a464189/" target="_blank" rel="noreferrer" className="p-3 bg-white/10 hover:bg-[#00C8FF]/20 border border-white/20 hover:border-[#00C8FF] rounded-full backdrop-blur transition-all duration-300 group">
                        <svg className="w-6 h-6 text-white group-hover:text-[#00C8FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                    <a href="mailto:nagasriramkochetti@gmail.com" className="p-3 bg-white/10 hover:bg-[#FF6B2B]/20 border border-white/20 hover:border-[#FF6B2B] rounded-full backdrop-blur transition-all duration-300 group">
                        <svg className="w-6 h-6 text-white group-hover:text-[#FF6B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
