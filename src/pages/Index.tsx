import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/nagaflix/NavBar';
import HeroFeatured from '@/components/nagaflix/HeroFeatured';
import RowSection from '@/components/nagaflix/RowSection';
import ProjectCard from '@/components/nagaflix/ProjectCard';
import SeasonCard from '@/components/nagaflix/SeasonCard';
import EducationCard from '@/components/nagaflix/EducationCard';
import ProjectDetailModal from '@/components/nagaflix/ProjectDetailModal';
import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import { education, certifications } from '@/data/education';
import { skillCategories } from '@/data/skills';
import { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, CheckCircle2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 overflow-x-hidden">
      <NavBar />

      <main className="pb-24">
        <HeroFeatured />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Projects Rows */}
          <motion.div variants={sectionVariants} id="projects" className="relative z-30 space-y-2 md:space-y-6 mt-10 md:-mt-48 pb-12">
            <RowSection title="Project Series">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
              ))}
            </RowSection>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={sectionVariants} id="experience" className="mt-12 px-4 md:px-12 max-w-[100vw] overflow-hidden">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-primary/50">Seasons of Experience</h2>
            <div className="flex overflow-x-auto space-x-4 md:space-x-6 pb-8 hide-scrollbar -ml-4 pl-4 md:pl-0">
              {experience.map((exp, index) => (
                <SeasonCard key={exp.id} experience={exp} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications Section */}
          <motion.div variants={sectionVariants} id="education" className="mt-16 px-4 md:px-12 max-w-[100vw] overflow-hidden">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-primary/50">Origin Story (Education & Certifications)</h2>
            <div className="flex overflow-x-auto space-x-4 md:space-x-6 pb-8 hide-scrollbar -ml-4 pl-4 md:pl-0 items-stretch">
              {education.map((edu) => (
                <EducationCard key={edu.id} education={edu} />
              ))}

              {/* Certifications as cards in the same row */}
              {certifications.map((cert) => (
                <div key={cert.id} className="flex-shrink-0 w-[280px] bg-[#181818] p-6 rounded-md border border-white/10 flex flex-col justify-center gap-3 hover:bg-[#252525] transition-colors group cursor-default relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                    <CheckCircle2 className="h-20 w-20 text-white" />
                  </div>
                  <div className="p-3 bg-white/5 rounded-full w-fit group-hover:bg-primary/20 transition-colors z-10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="z-10">
                    <p className="font-bold text-base text-white group-hover:text-primary transition-colors leading-tight mb-1">{cert.title}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Galaxy Section */}
          <motion.div variants={sectionVariants} id="skills" className="mt-16 px-4 md:px-12 max-w-[100vw] overflow-hidden">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-primary/50">Skills Galaxy</h2>
            <div className="flex overflow-x-auto space-x-4 md:space-x-6 pb-8 hide-scrollbar -ml-4 pl-4 md:pl-0">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="flex-shrink-0 w-[300px] md:w-[350px] bg-[#181818]/50 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:bg-[#181818] group relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} opacity-5 rounded-full blur-3xl -mr-10 -mt-10`} />

                  <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left`}>
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {cat.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-black/40 border-white/10 text-gray-300 hover:text-white hover:border-primary/50 transition-colors py-1 px-2 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact / Footer */}
          <motion.footer variants={sectionVariants} className="mt-32 border-t border-white/10 bg-black py-20 px-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] to-black pointer-events-none" />
            <div className="max-w-4xl mx-auto space-y-10 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Ready for the Next Episode?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Let's collaborate on building the future of AI.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-6 pt-8">
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto w-full md:w-auto" asChild>
                  <a href="mailto:nagasriramkochetti@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white font-bold text-lg px-8 py-6 h-auto w-full md:w-auto" asChild>
                  <a href="https://www.linkedin.com/in/naga-sri-ram-kochetti-72a464189/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white font-bold text-lg px-8 py-6 h-auto w-full md:w-auto" asChild>
                  <a href="https://github.com/nagasriramnani" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>

              <div className="pt-16 border-t border-white/5 mt-16">
                <p className="text-sm text-gray-500">
                  © 2025 NagaFlix - The AI Series Library. All rights reserved. <br />
                  Designed by Naga Sri Ram Kochetti.
                </p>
              </div>
            </div>
          </motion.footer>
        </motion.div>
      </main>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Index;
