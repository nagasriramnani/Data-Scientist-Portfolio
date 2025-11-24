import { Education } from '@/types';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface EducationCardProps {
    education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0 w-[280px] md:w-[320px] bg-[#181818] border border-white/10 rounded-md p-6 hover:bg-[#202020] transition-colors relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="h-24 w-24 text-white" />
            </div>

            <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full text-primary border border-primary/20">
                        <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white leading-tight mb-1 text-lg">{education.degree}</h3>
                        <p className="text-sm text-primary font-medium">{education.institution}</p>
                    </div>
                </div>
                <p className="text-xs text-gray-400 mb-4 font-mono">
                    {education.period} • {education.location}
                </p>
                <div className="flex flex-wrap gap-2">
                    {education.highlights.map((highlight) => (
                        <span key={highlight} className="text-[10px] px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/10 group-hover:border-primary/30 transition-colors">
                            {highlight}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
