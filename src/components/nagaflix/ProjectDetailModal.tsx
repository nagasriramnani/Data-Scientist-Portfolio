import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/types';

interface ProjectDetailModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl bg-[#181818] rounded-xl overflow-hidden shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto hide-scrollbar"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* Hero Image / Gradient Area */}
                        <div className={`relative h-64 md:h-80 w-full bg-gradient-to-br ${project.gradient}`}>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 text-shadow-lg">
                                    {project.title}
                                </h2>
                                <p className="text-lg text-primary font-medium mb-4">
                                    {project.shortTagline}
                                </p>
                                <div className="flex gap-4">
                                    <Button className="bg-white text-black hover:bg-white/90 font-bold" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Play className="mr-2 h-4 w-4 fill-black" />
                                            View Code
                                        </a>
                                    </Button>
                                    {project.demoUrl && (
                                        <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white" asChild>
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Details Content */}
                        <div className="p-8 grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-green-400 font-bold">98% Match</span>
                                        <span className="text-muted-foreground">2024</span>
                                        <span className="border border-white/20 px-1 rounded text-xs text-muted-foreground">HD</span>
                                    </div>
                                    <p className="text-lg text-foreground/90 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Impact</h3>
                                    <p className="text-foreground/80 italic border-l-4 border-primary pl-4">
                                        {project.impact}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm text-muted-foreground mb-2">Cast (Tech Stack)</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <Badge key={tech} variant="outline" className="border-white/20 text-foreground/80 hover:bg-white/10">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm text-muted-foreground mb-2">Genre</h3>
                                    <span className="text-foreground/90">{project.category}</span>
                                </div>

                                <div>
                                    <h3 className="text-sm text-muted-foreground mb-2">Links</h3>
                                    <div className="flex flex-col gap-2">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                                        >
                                            <Github className="h-4 w-4" /> GitHub Repository
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
