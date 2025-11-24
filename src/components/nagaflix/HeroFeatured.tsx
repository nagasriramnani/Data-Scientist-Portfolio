import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Info } from 'lucide-react';
import profileImage from '@/assets/naga-profile.jpg';

export default function HeroFeatured() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden">
            {/* Background Image / Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                {/* Cinematic Background Image */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
            </div>

            <div className="relative z-20 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 md:px-12 max-w-7xl mx-auto pt-24 lg:pt-0 gap-8 lg:gap-0">
                <div className="w-full lg:max-w-2xl space-y-6 z-20 text-center lg:text-left order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                            <span className="text-primary font-bold tracking-cinematic text-sm uppercase drop-shadow-md">
                                N E W &nbsp; S E R I E S
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-shadow-lg tracking-tight">
                            Naga Sri Ram <br />
                            <span className="text-primary">Kochetti</span>
                        </h1>

                        {/* Meta Info Row */}
                        <div className="flex items-center justify-center lg:justify-start gap-4 text-xs md:text-base text-gray-300 font-medium mb-6 drop-shadow-md">
                            <span className="text-green-400 font-bold">98% Match</span>
                            <span>2025</span>
                            <span className="border border-gray-400 px-1 rounded text-[10px] md:text-xs">U/A 16+</span>
                            <span>3 Seasons</span>
                            <span className="border border-white/40 px-2 py-0.5 rounded text-[10px] md:text-xs bg-white/10">HD</span>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-base md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed text-shadow drop-shadow-md font-medium"
                    >
                        AI Engineer × Data Scientist. Transforming visionary concepts into intelligent reality.
                        Building scalable ML systems, RAG pipelines, and next-gen AI infrastructure.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6"
                    >
                        <Button
                            size="lg"
                            onClick={scrollToProjects}
                            className="bg-white text-black hover:bg-white/90 font-bold text-base md:text-lg px-6 md:px-8 py-6 h-auto rounded flex items-center gap-3 transition-transform hover:scale-105"
                        >
                            <Play className="h-5 w-5 md:h-6 md:w-6 fill-black" />
                            Play Trailer
                        </Button>
                        <Button
                            size="lg"
                            variant="secondary"
                            className="bg-gray-500/40 text-white hover:bg-gray-500/50 font-bold text-base md:text-lg px-6 md:px-8 py-6 h-auto backdrop-blur-sm rounded flex items-center gap-3 transition-transform hover:scale-105"
                            onClick={scrollToProjects}
                        >
                            <Info className="h-5 w-5 md:h-6 md:w-6" />
                            More Info
                        </Button>
                    </motion.div>
                </div>

                {/* Right side profile circle - Stacked on mobile, aligned right on desktop */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="relative z-10 order-1 lg:order-2 lg:absolute lg:right-12 lg:top-[40%] lg:-translate-y-1/2"
                >
                    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_50px_rgba(0,255,255,0.2)] mx-auto">
                        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
