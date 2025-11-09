import Background3D from '@/components/Background3D';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import { Button } from '@/components/ui/button';
import { Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Background3D />
      
      {/* Presentation Button - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed top-6 left-6 z-50"
      >
        <Button
          size="lg"
          className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all backdrop-blur-sm"
          asChild
        >
          <Link to="/presentation">
            <Presentation className="mr-2 h-5 w-5" />
            Presentation
          </Link>
        </Button>
      </motion.div>
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 py-8 px-4 border-t border-primary/20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">
            © 2025 Naga Sri Ram Kochetti. Designed with AI Innovation.
          </p>
          <p className="text-sm text-accent">
            "This isn't just a portfolio — it's an AI invasion."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
