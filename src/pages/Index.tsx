import Background3D from '@/components/Background3D';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Background3D />
      
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
