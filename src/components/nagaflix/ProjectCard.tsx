import { motion } from 'framer-motion';
import { Project } from '@/types';
import { Play, Info, ThumbsUp, Plus } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative flex-shrink-0 w-[220px] h-[330px] rounded-md overflow-hidden cursor-pointer group bg-card border border-white/5 shadow-lg hover:z-50"
            onClick={() => onClick(project)}
        >
            {/* Poster Image / Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-110`} />

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight mb-2 drop-shadow-md">
                    {project.title}
                </h3>

                {/* Categories / Genre */}
                <div className="flex flex-wrap gap-1 mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-300 font-medium px-2 py-0.5 bg-black/40 rounded backdrop-blur-sm border border-white/10">
                        {project.category}
                    </span>
                </div>

                {/* Hover Actions & Meta */}
                <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full bg-white text-black hover:bg-white/90 transition-colors">
                            <Play className="h-4 w-4 fill-black" />
                        </button>
                        <button className="p-2 rounded-full border-2 border-gray-400 text-white hover:border-white hover:bg-white/10 transition-colors">
                            <Plus className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-full border-2 border-gray-400 text-white hover:border-white hover:bg-white/10 transition-colors">
                            <ThumbsUp className="h-4 w-4" />
                        </button>
                        <button className="ml-auto p-2 rounded-full border-2 border-gray-400 text-white hover:border-white hover:bg-white/10 transition-colors">
                            <Info className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                        <span className="text-green-400">98% Match</span>
                        <span className="border border-gray-500 px-1 rounded">16+</span>
                        <span>3 Seasons</span>
                        <span className="border border-white/40 px-1 rounded text-[10px]">HD</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                        {project.techStack.slice(0, 3).map(tech => (
                            <span key={tech} className="text-[10px] text-gray-400">• {tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
