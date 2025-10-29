import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Generative AI Specialist (Freelance)',
    company: 'Pareto.AI',
    period: 'June 2025 – October 2025',
    location: 'London, UK',
    achievements: [
      'Built and deployed LLM-based chatbots using LangChain, RAG, and vector databases',
      'Developed custom AI pipelines for automated content generation',
      'Integrated GPT-4 and Claude APIs into client applications',
      'Optimized prompt engineering for 40% improvement in response quality',
    ],
  },
  {
    title: 'Recruitment Data Specialist',
    company: 'Department for Work and Pensions (DWP)',
    period: 'October 2024 – Present',
    location: 'London, UK',
    achievements: [
      'Automated labour market reporting workflows using Python and SQL (20% faster)',
      'Designed and maintained Power BI dashboards tracking performance KPIs',
      'Produced actionable insights to inform policy and workforce planning',
      'Standardized data definitions across departments for improved accuracy',
    ],
  },
  {
    title: 'Junior ML Engineer',
    company: 'Mars Inno India',
    period: 'March 2020 – March 2022',
    location: 'Visakhapatnam, India',
    achievements: [
      'Built predictive models for customer churn and sales forecasting',
      'Created interactive dashboards in Power BI for stakeholder reporting',
      'Optimized SQL queries for large-scale data processing',
      'Collaborated with cross-functional teams on data-driven initiatives',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Time Warp</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional Journey Through AI & Data Science
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/50 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-[26px] top-8 w-5 h-5 rounded-full bg-primary border-4 border-background z-10 hidden md:block animate-glow-pulse" />

                <Card className="md:ml-20 glass-effect border-primary/20 hover:border-primary/50 transition-all hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl text-primary">{exp.title}</CardTitle>
                        <p className="text-xl font-semibold mt-2">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="h-4 w-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground/80">
                          <span className="text-accent mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
