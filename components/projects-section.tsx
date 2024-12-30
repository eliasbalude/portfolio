"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Github, Globe, X, AlertTriangle } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const projects = [
  {
    title: 'Elmart - E-commerce Platform',
    description: 'A premium e-commerce platform built with Next.js and Tailwind CSS. Elmart offers a curated selection of high-quality products with advanced filtering and animated logo.',
    image: '/images/projects/ecommerce.png',
    technologies: ['Next.js', 'Tailwind CSS'],
    github: 'https://github.com/eliasbalude/elmart',
    demo: 'https://elmart-three.vercel.app/',
    isPrivate: false,
    details: {
      overview: 'Elmart is a sleek and user-friendly e-commerce platform designed to provide a seamless shopping experience, offering advanced filtering, smooth navigation, and an elegant, animated interface.',
      features: [
        'Product filtering by price and features',
        'Category-wise product browsing',
        'Animated logo and custom fonts',
        'Responsive and stylish UI'
      ],
      techStack: {
        frontend: ['Next.js', 'Tailwind CSS'],
        backend: ['Node.js'],
      },
      keyFeatures: [
        'High-quality product displays',
        'Advanced filtering options',
        'Modern design with animations',
        'Clean, user-friendly interface'
      ],
      deployment: ['Vercel'],
      myRole: 'I developed the entire frontend of Elmart, implementing the product filtering system, category browsing, and creating the animated logo. I also ensured the platform was fully responsive and optimized for various devices.',
    },
  },
  {
    title: 'Task Management WebApp',
    description: 'A well organized task management tool with real-time updates.',
    image: '/images/projects/quikeytask.png',
    technologies: ['React', 'Firebase', 'Next.js'],
    github: 'https://github.com/eliasbalude/taskmanagement',
    demo: 'https://taskly-three.vercel.app/',
    isPrivate: false,
    details: {
      overview: 'This app is a secure task management platform for personal and team projects. With Firebase for easy registration and sign-in, users can assign tasks low, medium, or high priority, each with distinct color codes. It features filtering options to sort tasks by priority or completion status, allowing users to create, delete, update, or mark tasks as complete. This streamlined approach enhances productivity and organization.',
      features: [
        'Real-time collaboration',
        'Task dependencies',
        'Time tracking',
        'Team analytics',
      ],
      techStack: {
        frontend: ['React', 'Next.js', 'TailwindCSS'],
        backend: ['Firebase', 'Rest API'],
      },
      myRole: 'In this project, I developed and worked on implementation of the task management platform. I integrated Firebase for secure user authentication, developed the task priority system with color coding, and implemented intuitive filtering options. My focus was on creating a seamless user experience while ensuring robust functionality, ultimately enhancing productivity for users.',
    },
  },
  {
    title: 'Enterprise Resource Planning (ERP)',
    description: 'A full-featured ERP platform with real-time inventory management, customer, supplier, product, and order management features.',
    image: '/images/projects/erp.png',
    technologies: ['React', 'Next.js', 'Node.js'],
    github: 'https://github.com/eliasbalude',
    demo: '',
    isPrivate: true,
    details: {
      overview: 'A full-featured ERP platform with real-time inventory management, customer, supplier, product, and order management features.',
      features: [
        'Real-time inventory tracking',
        'Advanced search and filtering',
        'Secure payment processing',
        'Admin dashboard',
      ],
      techStack: {
        frontend: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
        backend: ['Node.js', 'Express', 'PostgreSQL'],
      },
      myRole: 'Led the development of inventory management from the part of ERP and implemented the real-time inventory system using WebSocket.',
      keyFeatures: [
        'Customer and supplier management',
        'Product management',
        'Order tracking and management',
        'Payment tracking',
        'RESTful API integration',
        'Clean and efficient UI'
      ],
      deployment: ['Vercel'],
    },
  },
  {
    title: 'Eduopia',
    description: 'An e-learning platform enhancing educational access and streamlining course management.',
    image: '/images/projects/eduopia.png',
    technologies: ['React', 'Next.js', 'Node.js'],
    github: 'https://github.com/eliasbalude/',
    demo: 'https://ischool.et/en',
    isPrivate: false,
    details: {
      overview: 'An e-learning platform enhancing educational access and streamlining course management developed when I was intern at Ibex Tech.',
      features: [
        'Admin and super admin dashboards',
        'Role-based access control (RBAC)',
        'Course management system',
        'API integration',
        'Database optimization'
      ],
      techStack: {
        frontend: ['React', 'Next.js', 'Prisma', 'TailwindCSS'],
        backend: ['Node.js', 'Prisma', 'MySQL'],
      },
      myRole: 'My role involved working on both frontend and backend tasks using React, Next.js, Prisma, and MySQL. Key responsibilities included implementing admin and super admin dashboards, developing role-based access control (RBAC), and creating course management features for efficient content handling while working within an Agile team.',
    },
  },
];

const technologies = ['All', 'React', 'Next.js', 'Node.js', 'Firebase', 'MySQL', 'PostgreSQL'];

export function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showPrivateModal, setShowPrivateModal] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.technologies.includes(filter)
  );

  const handleProjectAction = (project: typeof projects[0], action: 'github' | 'demo') => {
    if (project.isPrivate) {
      setShowPrivateModal(true);
    } else {
      window.open(project[action], '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Some Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {technologies.map((tech) => (
            <Button
              key={tech}
              variant={filter === tech ? 'default' : 'outline'}
              onClick={() => setFilter(tech)}
              className="m-1"
            >
              {tech}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleProjectAction(project, 'github')}
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleProjectAction(project, 'demo')}
                    >
                      <Globe className="mr-2 h-4 w-4" /> Demo
                    </Button>
                  </div>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="w-full max-w-md mx-auto overflow-y-auto h-[90vh]">
            <div className="relative">
              <Button
                variant="outline"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 rounded-full p-2"
              >
                <X className="h-5 w-5" />
              </Button>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProject?.title}
                </DialogTitle>
              </DialogHeader>
              {selectedProject && (
                <div className="space-y-6">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Overview</h3>
                      <p>{selectedProject.details.overview}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedProject.details.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Technology Stack</h3>
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium">Frontend:</span> {selectedProject.details.techStack.frontend.join(', ')}
                        </div>
                        <div>
                          <span className="font-medium">Backend:</span> {selectedProject.details.techStack.backend.join(', ')}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">My Role</h3>
                      <p>{selectedProject.details.myRole}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={showPrivateModal} onOpenChange={setShowPrivateModal}>
          <DialogContent className="w-full max-w-md mx-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                Private Project
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p>
                This is a private project developed for a company client. Due to confidentiality agreements, I cannot disclose the details publicly.
              </p>
              <p>
                Please feel free to explore my other projects on my GitHub profile.
              </p>
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setShowPrivateModal(false)}>
                  Back
                </Button>
                <Button asChild>
                  <a href="https://github.com/uchuulaa" target="_blank" rel="noopener noreferrer">
                    Visit My GitHub
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  );
}
