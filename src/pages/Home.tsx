import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';

const featuredProjects = [
  {
    title: 'AWS Disaster Recovery Automation',
    description: 'Automated DR solution using AWS services and Ansible for seamless failover and recovery.',
    technologies: ['AWS', 'Ansible', 'Python', 'Terraform'],
    imageUrl: '/images/projects/dr-automation.jpg',
    githubUrl: 'https://github.com/rampattanaik/dr-automation',
  },
  {
    title: 'PostgreSQL High Availability Cluster',
    description: 'Implemented a highly available PostgreSQL cluster with automated failover and monitoring.',
    technologies: ['PostgreSQL', 'Docker', 'Kubernetes', 'Prometheus'],
    imageUrl: '/images/projects/postgres-ha.jpg',
    githubUrl: 'https://github.com/rampattanaik/postgres-ha',
  },
];

const featuredSkills = [
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', proficiency: 90 },
      { name: 'Terraform', proficiency: 85 },
      { name: 'Ansible', proficiency: 88 },
      { name: 'Kubernetes', proficiency: 82 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', proficiency: 95 },
      { name: 'MySQL', proficiency: 85 },
      { name: 'MongoDB', proficiency: 80 },
    ],
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          </div>
          <div className="absolute right-0 top-0 -z-10 h-16 w-16 rounded-full bg-primary opacity-50 blur-2xl" />
          <div className="absolute left-0 top-0 -z-10 h-16 w-16 rounded-full bg-primary opacity-50 blur-2xl" />
        </div>

        <div className="container-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading mb-6">
              Hi, I'm <span className="text-gradient">Ram</span> <br />
              AWS & DevOps Engineer
            </h1>
            <p className="paragraph max-w-2xl mx-auto mb-8">
              Specializing in cloud architecture, automation, and building scalable
              infrastructure. With expertise in AWS, PostgreSQL, and DevOps practices.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button as={Link} to="/projects">
                View My Work
              </Button>
              <Button as={Link} to="/contact" variant="outline">
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-secondary/50">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading text-3xl mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button as={Link} to="/projects" variant="outline">
                View All Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="section-padding">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading text-3xl mb-12">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredSkills.map((skillGroup) => (
                <SkillCard key={skillGroup.category} {...skillGroup} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button as={Link} to="/skills" variant="outline">
                View All Skills
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading text-3xl mb-6">Let's Work Together</h2>
            <p className="paragraph max-w-2xl mx-auto mb-8">
              Looking for a DevOps engineer or cloud architect? Let's discuss how I
              can help bring your projects to life.
            </p>
            <Button as={Link} to="/contact">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 