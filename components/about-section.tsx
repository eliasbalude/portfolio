"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Code2, Server, Database, Cloud } from 'lucide-react';

const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Firebase', category: 'Database' },
  { name: 'Google Cloud', category: 'Cloud' },
  { name: 'CI/CD', category: 'DevOps' },
  { name: 'GitHub Actions', category: 'DevOps' },
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto relative"
      >
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative aspect-square rounded-full overflow-hidden max-w-md mx-auto border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/images/profile/profile.jpg"
                  alt="Profile picture"
                  fill
                  className="object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg border border-primary/10">
                  <p className="text-sm font-medium">Available for Projects</p>
                </div>
              </div>
            </div>
          </motion.div>

          <Card className="p-8 bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Full Stack Developer crafting modern web experiences. Specializing in React, Next.js, and cloud technologies. 
                Currently focused on AI integration and scalable applications.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                  <Code2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Frontend Expert</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                  <Server className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Backend Developer</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                  <Database className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Software Engineer</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Cloud and AI enthusiast</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill.name} 
                      variant="secondary"
                      className="bg-background/50 backdrop-blur-sm"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
