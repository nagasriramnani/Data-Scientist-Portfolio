"use client";

import { motion } from "framer-motion";

export default function Currently() {
    return (
        <section className="relative z-20 bg-[#070707] border-t border-white/5 py-24 px-6 md:px-16">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-5xl mx-auto"
            >
                <div className="flex items-center gap-3 mb-8">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF5A1F] opacity-60 animate-ping" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5A1F]" />
                    </span>
                    <span className="font-jetbrains-mono text-xs tracking-[0.25em] uppercase text-[#FF5A1F]">
                        Currently
                    </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div>
                        <h2
                            className="font-bold text-white leading-[0.95]"
                            style={{
                                fontFamily: "'Clash Display', var(--font-display), sans-serif",
                                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            KTP Associate — AI Product Engineer
                        </h2>
                        <p className="mt-4 text-lg md:text-xl text-neutral-300">
                            Ulster University &amp; The Odyssey Trust · Belfast, UK
                        </p>
                        <p className="mt-2 font-jetbrains-mono text-sm text-neutral-500">
                            June 2026 – Present
                        </p>
                    </div>
                    <p className="max-w-md text-neutral-400 leading-relaxed">
                        A Knowledge Transfer Partnership bridging academic AI research at Ulster
                        University with real-world AI product development at The Odyssey Trust.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
