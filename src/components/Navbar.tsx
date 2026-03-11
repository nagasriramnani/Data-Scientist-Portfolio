"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        // Hide navbar on scroll down, show on scroll up
        if (previous !== undefined && latest > previous && latest > 300) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const links = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 inset-x-0 z-50 flex items-center justify-center pt-6 px-4 pb-4 transition-colors duration-300 ${scrolled ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
                }`}
        >
            <nav className="flex items-center gap-6 md:gap-10 border border-white/10 rounded-full px-8 py-3 bg-white/5 backdrop-blur-md">
                {links.map(link => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-jetbrains-mono font-medium text-neutral-300 hover:text-[#00C8FF] transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
        </motion.header>
    );
}
