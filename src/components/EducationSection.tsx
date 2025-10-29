import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'MSc Big Data Science and High-Performance Computing',
    institution: 'University of Liverpool',
    period: '2022 - 2023',
    location: 'Liverpool, UK',
    highlights: ['Machine Learning', 'Distributed Computing', 'Advanced Analytics'],
  },
  {
    degree: 'B.Tech Computer Science and Engineering',
    institution: 'GVP College of Engineering for Women',
    period: '2016 - 2020',
    location: 'India',
    highlights: ['Software Engineering', 'Data Structures', 'AI Fundamentals'],
  },
];

const certifications = [
  {
    title: 'Microsoft Certified: Azure Data Analyst Associate',
    issuer: 'Microsoft',
    icon: '☁️',
  },
  {
    title: 'IBM Applied AI Professional Certificate',
    issuer: 'IBM',
    icon: '🤖',
  },
  {
    title: 'AWS Certified Data Analytics - Specialty',
    issuer: 'Amazon Web Services',
    icon: '📊',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    icon: '🧠',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Knowledge Core</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic Excellence & Professional Certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass-effect border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <p className="text-primary font-semibold">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {edu.period} • {edu.location}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <Badge
                        key={highlight}
                        variant="outline"
                        className="bg-secondary/50 border-primary/30"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="glass-effect border-primary/20 hover:border-accent/50 transition-all hover:scale-105 text-center h-full">
                  <CardHeader>
                    <div className="text-5xl mb-4">{cert.icon}</div>
                    <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center gap-2 text-accent">
                      <Award className="h-4 w-4" />
                      <span className="text-sm">{cert.issuer}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
