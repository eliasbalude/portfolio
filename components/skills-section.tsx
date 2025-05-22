"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from './ui/card';
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Smartphone,
  Terminal,
  Palette,
} from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    technologies: [
      { name: 'React', icon: Globe },
      { name: 'Next.js', icon: Code2 },
      { name: 'TypeScript', icon: Terminal },
      { name: 'Tailwind CSS', icon: Palette },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: [
      { name: 'Node.js', icon: Terminal },
      { name: 'Django', icon: Code2 },
      { name: 'Laravel', icon: Code2 },
      { name: 'PostgreSQL', icon: Database },
      { name: 'Firebase', icon: Database },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: Terminal,
    technologies: [
      { name: 'Google Cloud', icon: Server },
      { name: 'Firebase', icon: Server },
      { name: 'CI/CD', icon: Terminal },
      { name: 'GitHub Actions', icon: Terminal },
    ],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    technologies: [
      { name: 'Flutter', icon: Smartphone },
      { name: 'React Native', icon: Smartphone },
    ],
  },
];

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  {<skillCategory.icon className="h-6 w-6 text-primary" />}
                  <h3 className="text-xl font-semibold">{skillCategory.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {skillCategory.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-accent transition-colors"
                    >
                      <tech.icon className="h-8 w-8 text-primary" />
                      <span className="text-sm font-medium text-center">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}