"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';

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

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  const hireTextVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative"
            variants={profileVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="relative aspect-square rounded-full overflow-hidden max-w-md mx-auto border-4 border-primary/20">
              <Image
                src="/images/profile/profile.jpg"
                alt="Profile picture"
                fill
                className="object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <motion.div
                className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg"
                variants={hireTextVariants}
                initial="initial"
                animate="animate"
              >
                Hire Me!
              </motion.div>
            </div>
            
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-background/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
                <p className="text-sm font-medium">Available for Projects</p>
              </div>
            </motion.div>
          </motion.div>

          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-lg">
                Hi there! I'm Elias, a passionate Full Stack Developer with a keen eye for creating elegant, user-friendly applications. My journey in tech began with hands-on experience in internships and coursework projects, where I developed features that impact thousands of users daily.
              </p>
              
              <p className="text-lg">
                I specialize in building modern web applications using React, Next.js, and various backend technologies. What sets me apart is my ability to bridge the gap between frontend aesthetics and backend functionality, creating seamless user experiences while ensuring robust system architecture.
              </p>

              <p className="text-lg">
                Currently, I'm diving deep into cloud technologies and AI integration, working on exciting projects that combine my full-stack expertise with cutting-edge solutions. I'm particularly proud of my recent work on an AI-powered fitness platform that demonstrates my ability to integrate advanced technologies into practical applications.
              </p>

              <p className="text-lg">
                When I'm not coding, I'm constantly learning new technologies and contributing to the developer community. I believe in writing clean, maintainable code and creating solutions that make a real impact.
              </p>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary">
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