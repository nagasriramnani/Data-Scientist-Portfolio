import { Experience } from '@/types';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface SeasonCardProps {
    experience: Experience;
    index: number;
}

export default function SeasonCard({ experience, index }: SeasonCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex-shrink-0 w-[300px] md:w-[400px] bg-[#181818] border border-white/10 rounded-md overflow-hidden hover:border-primary/50 transition-all group relative"
        >
            {/* Season Header */}
            <div className="bg-gradient-to-r from-black to-[#181818] p-4 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    Season {experience.id}
                </h3>
                <span className="text-xs font-bold text-gray-400 border border-gray-600 px-1.5 py-0.5 rounded">
                    {experience.period.split(' - ')[0]}
                </span>
            </div>

            <div className="p-5 space-y-4">
                <div>
                    <h4 className="text-xl font-bold text-white mb-1">{experience.role}</h4>
                    <p className="text-sm font-semibold text-gray-400">{experience.company}</p>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{experience.location}</span>
                    </div>
                </div>

                <div className="space-y-2 pt-2">
                    {experience.achievements.slice(0, 2).map((achievement, i) => (
                        <p key={i} className="text-sm text-gray-300 line-clamp-2 pl-3 border-l-2 border-primary/30 relative">
                            {achievement}
                        </p>
                    ))}
                    {experience.achievements.length > 2 && (
                        <p className="text-xs text-primary cursor-pointer hover:underline pl-3">
                            View all episodes...
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
