"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import projectsData from '../data/projects.json';
import Image from 'next/image';

const ProjectCard: React.FC<{ project: any; index: number; expandedProject: number | null; toggleProjectDescription: (index: number) => void }> = ({ project, index, expandedProject, toggleProjectDescription }) => {
  const isExpanded = expandedProject === index;

  return (
    <motion.div
      key={project.id}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl flex flex-col h-full border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={project.title} 
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-semibold text-white text-center px-4">
            {project.title}
          </h3>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : '4.5rem' }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden mb-4"
        >
          <p className="text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
        </motion.div>
        {project.description.length > 100 && (
          <motion.button 
            onClick={() => toggleProjectDescription(index)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300 flex items-center justify-center mt-2 mb-4"
            initial={false}
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronDown className="ml-2" />
          </motion.button>
        )}
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span 
              key={techIndex} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 mt-auto border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 flex items-center"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 flex items-center"
          >
            <FaExternalLinkAlt className="mr-2" />
            Démo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProjectDescription = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-gray-800 dark:text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mes Projets
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              expandedProject={expandedProject}
              toggleProjectDescription={toggleProjectDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
