import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Cloud, Cpu, GitBranch, LineChart } from 'lucide-react';

const techStacks = [
  {
    icon: Code2,
    title: 'AI/ML',
    skills: ['PyTorch', 'TensorFlow', 'LangChain', 'Transformers', 'RAG Systems', 'LLMs'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    skills: ['SQL', 'Spark', 'Databricks', 'Airflow', 'ETL Pipelines'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    icon: Cpu,
    title: 'Deep Learning',
    skills: ['Computer Vision', 'NLP', 'Reinforcement Learning', 'Neural Networks'],
  },
  {
    icon: GitBranch,
    title: 'Software Engineering',
    skills: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'Git', 'Agile'],
  },
  {
    icon: LineChart,
    title: 'Analytics',
    skills: ['Power BI', 'Tableau', 'Statistical Modeling', 'A/B Testing'],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Meet the Architect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Analytical and results-driven Data Scientist & AI Engineer skilled in building LLMs,
            RAG systems, and intelligent data pipelines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl hover:bg-card/60 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <stack.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{stack.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-secondary/50 border-primary/30 hover:border-primary/60 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-8 glass-effect rounded-xl neon-border"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-4 text-foreground/80">
            <div>
              <p className="mb-2">
                ✦ End-to-end ML model development and deployment
              </p>
              <p className="mb-2">
                ✦ Scalable data pipelines and ETL architecture
              </p>
              <p className="mb-2">
                ✦ LLM fine-tuning and RAG system implementation
              </p>
            </div>
            <div>
              <p className="mb-2">
                ✦ Cloud infrastructure (AWS, Azure, GCP)
              </p>
              <p className="mb-2">
                ✦ Advanced analytics and predictive modeling
              </p>
              <p className="mb-2">
                ✦ Cross-functional collaboration and Agile methodologies
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
