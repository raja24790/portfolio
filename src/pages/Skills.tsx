import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';

const skillGroups = [
  {
    category: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS', proficiency: 90 },
      { name: 'Terraform', proficiency: 85 },
      { name: 'CloudFormation', proficiency: 80 },
      { name: 'Azure', proficiency: 75 },
      { name: 'GCP', proficiency: 70 },
    ],
  },
  {
    category: 'DevOps & Automation',
    skills: [
      { name: 'Ansible', proficiency: 88 },
      { name: 'Jenkins', proficiency: 85 },
      { name: 'Docker', proficiency: 90 },
      { name: 'Kubernetes', proficiency: 82 },
      { name: 'GitOps', proficiency: 80 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', proficiency: 95 },
      { name: 'MySQL', proficiency: 85 },
      { name: 'MongoDB', proficiency: 80 },
      { name: 'Redis', proficiency: 75 },
      { name: 'Elasticsearch', proficiency: 70 },
    ],
  },
  {
    category: 'Programming & Scripting',
    skills: [
      { name: 'Python', proficiency: 88 },
      { name: 'Bash', proficiency: 85 },
      { name: 'Go', proficiency: 75 },
      { name: 'JavaScript', proficiency: 70 },
      { name: 'SQL', proficiency: 90 },
    ],
  },
  {
    category: 'Monitoring & Observability',
    skills: [
      { name: 'Prometheus', proficiency: 85 },
      { name: 'Grafana', proficiency: 85 },
      { name: 'ELK Stack', proficiency: 80 },
      { name: 'New Relic', proficiency: 75 },
      { name: 'Datadog', proficiency: 75 },
    ],
  },
  {
    category: 'Security & Compliance',
    skills: [
      { name: 'AWS Security', proficiency: 85 },
      { name: 'IAM', proficiency: 90 },
      { name: 'SSL/TLS', proficiency: 85 },
      { name: 'Security Groups', proficiency: 88 },
      { name: 'Compliance Frameworks', proficiency: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="heading mb-6">Skills & Expertise</h1>
          <p className="paragraph max-w-2xl mx-auto">
            With years of experience in DevOps and cloud technologies, I've
            developed expertise across a wide range of tools and technologies.
            Here's a comprehensive overview of my technical skills.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillCard {...group} />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-semibold mb-6">Continuous Learning</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Technology is constantly evolving, and I'm committed to staying
            up-to-date with the latest trends and best practices in cloud
            computing, DevOps, and database management.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-secondary/30 px-6 py-4 rounded-lg">
              <h3 className="font-semibold mb-2">Recent Focus Areas</h3>
              <ul className="text-dimWhite space-y-1">
                <li>Kubernetes Operators</li>
                <li>Service Mesh</li>
                <li>GitOps Practices</li>
                <li>Cloud Native Security</li>
              </ul>
            </div>
            <div className="bg-secondary/30 px-6 py-4 rounded-lg">
              <h3 className="font-semibold mb-2">Upcoming Learning Goals</h3>
              <ul className="text-dimWhite space-y-1">
                <li>FinOps</li>
                <li>AI/ML Operations</li>
                <li>Zero Trust Security</li>
                <li>Edge Computing</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 