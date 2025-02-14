import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2023',
    title: 'Senior DevOps Engineer',
    company: 'Tech Company',
    description: 'Leading cloud infrastructure and automation initiatives, implementing CI/CD pipelines, and managing multi-cloud environments.',
  },
  {
    year: '2021',
    title: 'Cloud Infrastructure Engineer',
    company: 'Cloud Solutions Inc.',
    description: 'Designed and implemented scalable AWS architectures, automated deployment processes, and managed PostgreSQL databases.',
  },
  {
    year: '2019',
    title: 'Database Administrator',
    company: 'Data Systems Ltd.',
    description: 'Managed large-scale PostgreSQL clusters, implemented backup and recovery solutions, and optimized database performance.',
  },
  {
    year: '2017',
    title: 'Systems Engineer',
    company: 'IT Solutions Corp.',
    description: 'Handled system administration, automation scripting, and infrastructure maintenance.',
  },
];

const certifications = [
  {
    name: 'AWS Solutions Architect Professional',
    issuer: 'Amazon Web Services',
    date: '2023',
    image: '/images/certifications/aws-sap.png',
    url: 'https://www.credly.com/badges/your-badge-id',
  },
  {
    name: 'OCI Architect Professional',
    issuer: 'Oracle',
    date: '2022',
    image: '/images/certifications/oci-arch.png',
    url: 'https://catalog-education.oracle.com/certification-badge',
  },
  {
    name: 'ITIL Foundation',
    issuer: 'Axelos',
    date: '2021',
    image: '/images/certifications/itil.png',
    url: 'https://candidate.peoplecert.org/badge',
  },
];

const About = () => {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container-padding mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="heading mb-6">About Me</h1>
          <p className="paragraph mb-8">
            I'm a passionate DevOps Engineer and Cloud Architect with over 6 years
            of experience in building and maintaining scalable infrastructure.
            Specializing in AWS, PostgreSQL, and automation, I help companies
            streamline their operations and achieve technical excellence.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 btn-primary px-6 py-3 text-base"
          >
            Download Resume
          </a>
        </motion.div>
      </section>

      {/* Career Timeline */}
      <section className="container-padding mb-20">
        <h2 className="heading text-3xl mb-12 text-center">Career Journey</h2>
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="bg-secondary/30 rounded-lg p-6 ml-4">
                <span className="text-primary font-semibold">{item.year}</span>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                <p className="text-dimWhite">{item.company}</p>
                <p className="mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="container-padding">
        <h2 className="heading text-3xl mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-secondary/30 rounded-lg p-6 hover:bg-secondary/50 transition-colors duration-300">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-dimWhite text-sm">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About; 