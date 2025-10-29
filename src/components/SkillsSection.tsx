import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    category: 'AI & Machine Learning',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Transformers',
      'BERT',
      'LLMs',
      'RAG Pipelines',
      'LangChain',
      'Computer Vision',
      'NLP',
      'Reinforcement Learning',
      'Generative AI',
    ],
  },
  {
    category: 'Data Engineering',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      'SQL',
      'Databricks',
      'Apache Spark',
      'Airflow',
      'Hadoop',
      'Snowflake',
      'Data Lakes',
      'ETL Pipelines',
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: 'from-purple-500 to-indigo-500',
    skills: [
      'AWS (EC2, S3, Lambda)',
      'Azure Data Factory',
      'Google Cloud Platform',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Git',
    ],
  },
  {
    category: 'Programming & Tools',
    color: 'from-orange-500 to-amber-500',
    skills: [
      'Python',
      'R',
      'Java',
      'C++',
      'FastAPI',
      'Flask',
      'REST APIs',
      'React',
      'Bash',
    ],
  },
  {
    category: 'Analytics & Visualization',
    color: 'from-pink-500 to-rose-500',
    skills: [
      'Power BI',
      'Tableau',
      'Excel Advanced',
      'Plotly',
      'Statistical Modeling',
      'A/B Testing',
      'KPI Dashboards',
    ],
  },
  {
    category: 'Mathematics & Statistics',
    color: 'from-blue-500 to-violet-500',
    skills: [
      'Linear Algebra',
      'Probability',
      'Hypothesis Testing',
      'Bayesian Inference',
      'Optimization',
      'Experimental Design',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills Galaxy</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive Technology Stack & Expertise
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-effect p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-all"
            >
              <h3
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-base px-4 py-2 bg-gradient-to-r from-secondary/50 to-secondary/30 border-primary/40 hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
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
          className="mt-12 p-8 glass-effect rounded-xl neon-border text-center"
        >
          <p className="text-lg text-foreground/80">
            <span className="text-primary font-semibold">Soft Skills:</span> Analytical Thinking •
            Problem Solving • Cross-Functional Collaboration • Research Mindset • Continuous
            Learning • Technical Documentation • Stakeholder Engagement • Agile Methodologies
          </p>
        </motion.div>
      </div>
    </section>
  );
}
