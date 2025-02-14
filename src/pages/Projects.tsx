import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'AWS Disaster Recovery Automation',
    description: 'Automated DR solution using AWS services and Ansible for seamless failover and recovery.',
    technologies: ['AWS', 'Ansible', 'Python', 'Terraform'],
    imageUrl: '/images/projects/dr-automation.jpg',
    githubUrl: 'https://github.com/yourusername/dr-automation',
    category: 'Cloud',
  },
  {
    title: 'PostgreSQL High Availability Cluster',
    description: 'Implemented a highly available PostgreSQL cluster with automated failover and monitoring.',
    technologies: ['PostgreSQL', 'Docker', 'Kubernetes', 'Prometheus'],
    imageUrl: '/images/projects/postgres-ha.jpg',
    githubUrl: 'https://github.com/yourusername/postgres-ha',
    category: 'Database',
  },
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Built a comprehensive CI/CD pipeline using Jenkins, Docker, and Kubernetes.',
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'GitOps'],
    imageUrl: '/images/projects/cicd-pipeline.jpg',
    githubUrl: 'https://github.com/yourusername/cicd-pipeline',
    category: 'DevOps',
  },
  {
    title: 'Infrastructure as Code Framework',
    description: 'Developed a custom IaC framework for managing multi-cloud infrastructure.',
    technologies: ['Terraform', 'AWS', 'Azure', 'Python'],
    imageUrl: '/images/projects/iac-framework.jpg',
    githubUrl: 'https://github.com/yourusername/iac-framework',
    category: 'Cloud',
  },
  {
    title: 'Database Monitoring Solution',
    description: 'Created a comprehensive monitoring solution for PostgreSQL databases.',
    technologies: ['PostgreSQL', 'Prometheus', 'Grafana', 'Python'],
    imageUrl: '/images/projects/db-monitoring.jpg',
    githubUrl: 'https://github.com/yourusername/db-monitoring',
    category: 'Database',
  },
  {
    title: 'Kubernetes Auto-scaling System',
    description: 'Implemented an intelligent auto-scaling system for Kubernetes clusters.',
    technologies: ['Kubernetes', 'Go', 'Prometheus', 'Custom Metrics'],
    imageUrl: '/images/projects/k8s-autoscaling.jpg',
    githubUrl: 'https://github.com/yourusername/k8s-autoscaling',
    category: 'DevOps',
  },
];

const categories = ['All', 'Cloud', 'Database', 'DevOps'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="heading mb-6">My Projects</h1>
          <p className="paragraph max-w-2xl mx-auto">
            A collection of my work in cloud architecture, database management,
            and DevOps automation. Each project demonstrates my expertise in
            building scalable and efficient solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-secondary/30 text-dimWhite hover:bg-secondary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 bg-secondary/30 rounded-lg text-white placeholder-dimWhite focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <p className="text-dimWhite text-lg">
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects; 