import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import profileImage from '@/assets/naga-profile.jpg';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(190, 95%, 50% / 0.3), transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(220, 85%, 60% / 0.3), transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              AI INVASION INITIATED
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="gradient-text">Naga Sri Ram</span>
            <br />
            <span className="text-foreground">Kochetti</span>
          </motion.h1>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-2xl md:text-3xl text-primary font-semibold glow-text">
              AI Engineer × Data Scientist
            </p>
            <p className="text-lg text-muted-foreground">
              DevOps Innovator • ML Systems Architect
            </p>
          </motion.div>

          <motion.p
            className="text-lg text-foreground/80 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Transforming AI Vision into Reality. Building intelligent systems with LLMs, RAG
            pipelines, and cutting-edge ML infrastructure.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/50 transition-all"
              onClick={() => scrollToSection('projects')}
            >
              Explore AI Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-border hover:bg-primary/10"
              asChild
            >
              <a href="/NAGA_RAM_KOCHETTI_-_Resume_-_Data_Scientist.pdf" download>
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <a
              href="https://github.com/nagasriramnani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/naga-sri-ram-kochetti-72a464189/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:nagasriramkochetti@gmail.com"
              className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Profile image with 3D effect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative">
            {/* Animated rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-accent/30"
              animate={{
                scale: [1.15, 1, 1.15],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Profile image */}
            <motion.div
              className="relative z-10 w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden neon-border"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src={profileImage}
                alt="Naga Sri Ram Kochetti"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
