"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, Code2, Database, Globe, Server, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const upcomingProjects = [
  {
    title: 'Multi-tenant E-commerce Platform',
    status: 'In Progress',
    description: 'A comprehensive multi-tenant e-commerce solution with merchant portal and customer-facing storefronts.',
    role: 'Full Stack Developer',
    responsibilities: [
      'Developing merchant portal for order and customer management',
      'Building customizable storefront templates',
      'Implementing multi-tenant architecture',
      'Creating RESTful APIs for backend services'
    ],
    technologies: ['Next.js', 'TypeScript', 'REST API', 'PostgreSQL'],
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'E-commerce Website',
    status: 'In Progress',
    description: 'A full-stack e-commerce platform with modern UI and robust backend services.',
    role: 'Full Stack Developer',
    responsibilities: [
      'Building responsive frontend with Next.js',
      'Developing REST API endpoints',
      'Implementing secure authentication',
      'Creating product management system'
    ],
    technologies: ['Next.js', 'REST API', 'TypeScript', 'PostgreSQL'],
    icon: Code2,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Backend Platform',
    status: 'Coming Soon',
    description: 'A scalable backend platform for managing multiple services and applications.',
    role: 'Backend Developer',
    responsibilities: [
      'Designing microservices architecture',
      'Implementing API gateway',
      'Setting up database infrastructure',
      'Creating service monitoring system'
    ],
    technologies: ['Node.js', 'Microservices', 'Docker', 'Kubernetes'],
    icon: Server,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Google Cloud Project',
    status: 'Coming Soon',
    description: 'A cloud-native application leveraging Google Cloud Platform services.',
    role: 'Cloud Engineer',
    responsibilities: [
      'Designing cloud architecture',
      'Implementing serverless functions',
      'Setting up CI/CD pipelines',
      'Managing cloud resources'
    ],
    technologies: ['Google Cloud', 'Cloud Functions', 'Firebase', 'CI/CD'],
    icon: Database,
    gradient: 'from-orange-500 to-red-500',
  },
];

export function UpcomingProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="upcoming-projects" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Projects in Progress
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Exciting projects I'm currently working on and upcoming initiatives that showcase my growing expertise in full-stack development and cloud technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {upcomingProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-2 border-primary/10">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="p-6 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                        <project.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <Badge 
                      variant={project.status === 'In Progress' ? 'default' : 'secondary'}
                      className="flex items-center gap-1 px-3 py-1"
                    >
                      <Clock className="h-3 w-3" />
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        My Role
                      </h4>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {project.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline"
                            className="bg-background/50 backdrop-blur-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 