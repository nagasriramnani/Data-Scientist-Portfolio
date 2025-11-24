import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Series', href: '#projects' },
        { name: 'Episodes', href: '#experience' },
        { name: 'Knowledge', href: '#education' },
        { name: 'Skills', href: '#skills' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-12 py-4',
                isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'
            )}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('#hero')}>
                    <span className="text-3xl font-bold text-primary tracking-tighter glow-text">NAGAFLIX</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                        asChild
                    >
                        <a href="/NAGA_SRI_RAM__KOCHETTI_-_AI_Experience_Analyst__Conversational_Analytics__Customer_Insight__NLP_&_LLM_Evaluation.pdf" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download CV
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground">
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-left text-lg font-medium text-foreground/80 hover:text-primary py-2"
                            >
                                {link.name}
                            </button>
                        ))}
                        <Button
                            size="sm"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold w-full"
                            asChild
                        >
                            <a href="/NAGA_SRI_RAM__KOCHETTI_-_AI_Experience_Analyst__Conversational_Analytics__Customer_Insight__NLP_&_LLM_Evaluation.pdf" download>
                                <Download className="mr-2 h-4 w-4" />
                                Download CV
                            </a>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
