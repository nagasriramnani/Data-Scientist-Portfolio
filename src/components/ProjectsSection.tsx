import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Ant-Customer-Service-AI-Agent',
    description:
      'Bio-inspired AI customer service platform using ANT (Artificial Neural Tissue) architecture. Specialized AI agents that work like an ant colony - self-healing, collective learning.',
    tech: ['Python', 'LangChain', 'RAG', 'AI Agents', 'NLP'],
    github: 'https://github.com/nagasriramnani/Ant-Customer-Service-AI-Agent',
    impact: 'Revolutionary swarm intelligence for customer service automation',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Wastewater Analytics Hybrid AI Platform',
    description:
      'Environmental AI platform combining ML with domain-specific modeling for wastewater treatment optimization and predictive analytics.',
    tech: ['PyTorch', 'Time Series', 'Domain AI', 'Analytics', 'IoT'],
    github: 'https://github.com/nagasriramnani/Wastewater-Analytics-Hybrid-AI-Demo-Platform',
    impact: 'AI-driven environmental sustainability solutions',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Pimberly DPP Sustainability Tracker',
    description:
      'AI-driven Digital Product Passport system for ESPR compliance and sustainable product data management with automated validation.',
    tech: ['FastAPI', 'React', 'AI Validation', 'Compliance', 'Sustainability'],
    github: 'https://github.com/nagasriramnani/Pimberly-DPP-Sustainability-Tracker_v1',
    impact: 'Enabling circular economy through intelligent product tracking',
    gradient: 'from-green-500/20 to-lime-500/20',
  },
  {
    title: 'Multi-Modal Diabetes Risk Prediction',
    description:
      'Fusion of biomedical and lifestyle data for Type 2 Diabetes risk modeling using advanced ML techniques and multi-modal analysis.',
    tech: ['TensorFlow', 'Multi-Modal ML', 'Healthcare AI', 'Predictive Analytics'],
    github:
      'https://github.com/nagasriramnani/Multi-Modal-Diabetes-Risk-Prediction-Project',
    impact: 'Early disease detection through AI-powered risk assessment',
    gradient: 'from-red-500/20 to-pink-500/20',
  },
  {
    title: 'Dense Deep RL for AV Safety',
    description:
      'Digital Twin Simulation for Autonomous Vehicle Safety using Dense Deep Reinforcement Learning in highway environments.',
    tech: ['Deep RL', 'PyTorch', 'Simulation', 'Safety Validation', 'Autonomous Systems'],
    github:
      'https://github.com/nagasriramnani/Dense-Deep-Reinforcement-learning-Validating-Safety-Autonomous-vehicles-Highway-env',
    impact: 'Advancing autonomous vehicle safety through AI simulation',
    gradient: 'from-purple-500/20 to-indigo-500/20',
  },
  {
    title: 'Reliant Windows ERP-CRM Prototype',
    description:
      'AI-augmented ERP/CRM platform for business automation with intelligent workflow optimization and customer management.',
    tech: ['Full-Stack', 'AI Integration', 'Business Intelligence', 'Automation'],
    github: 'https://github.com/nagasriramnani/Reliant-Windows-ERP-CRM-Prototype',
    impact: 'Streamlining business operations with intelligent automation',
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">The Neural Grid</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flagship AI projects spanning healthcare, sustainability, autonomous systems, and
            enterprise intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full glass-effect hover:bg-card/80 transition-all group hover:scale-105 hover:shadow-2xl border-primary/20 hover:border-primary/50 bg-gradient-to-br ${project.gradient}`}
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-accent font-medium italic">{project.impact}</p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full neon-border hover:bg-primary/20"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-primary/10"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
