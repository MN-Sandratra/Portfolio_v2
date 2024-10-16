"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDocker, FaUsers, FaPhp, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiMysql, SiPostgresql, SiNestjs, SiSpringboot, SiSymfony } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: FaJs, category: 'Langages', color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Langages', color: '#3178C6' },
  { name: 'Python', icon: FaPython, category: 'Langages', color: '#3776AB' },
  { name: 'Java', icon: FaJava, category: 'Langages', color: '#007396' },
  { name: 'PHP', icon: FaPhp, category: 'Langages', color: '#777BB4' },
  { name: 'React', icon: FaReact, category: 'Frameworks', color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, category: 'Frameworks', color: '#339933' },
  { name: 'NestJS', icon: SiNestjs, category: 'Frameworks', color: '#E0234E' },
  { name: 'Spring Boot', icon: SiSpringboot, category: 'Frameworks', color: '#6DB33F' },
  { name: 'Symfony', icon: SiSymfony, category: 'Frameworks', color: '#000000' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Bases de données', color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, category: 'Bases de données', color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Bases de données', color: '#336791' },
  { name: 'Git', icon: FaGitAlt, category: 'Outils', color: '#F05032' },
  { name: 'Docker', icon: FaDocker, category: 'Outils', color: '#2496ED' },
  { name: 'Angular', icon: FaAngular, category: 'Frameworks', color: '#DD0031' },
];

const languages = [
  { name: 'Français', level: 'Natif' },
  { name: 'Malgache', level: 'Natif' },
  { name: 'Anglais', level: 'Courant' },
];

const otherSkills = [
  "Gestion d'équipe",
  "Résolution de problèmes",
  "Adaptabilité",
  "Leadership",
  "Gestion de projet",
];

const AboutSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'skills' | 'languages' | 'otherSkills'>('skills');
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const categories = ['Tous', ...Array.from(new Set(skills.map(skill => skill.category)))];

  const filteredSkills = activeCategory === 'Tous' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          À Propos de Moi
        </motion.h2>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
            Diplômé d'un Master en informatique avec une spécialisation en génie logiciel, je suis passionné par le développement de solutions innovantes et efficaces. </p>
            <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
            Actuellement, je poursuis une double diplomation en management et gestion d'entreprise, avec une spécialisation en gestion de projet. Ce parcours me permet d’allier mes compétences techniques et mes connaissances en gestion, afin de devenir un chef de projet capable de piloter des équipes vers l’atteinte d’objectifs ambitieux.</p>
            <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
              Ma passion pour l'apprentissage continu et mon désir de rester à la pointe de la technologie me poussent à explorer constamment de nouvelles technologies et méthodologies.
            </p>
          </motion.div>
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/path-to-your-image.jpg"
                alt="Sandratra MBELO NDRIAMANAMPY"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 border-2 border-blue-500 dark:border-blue-400 rounded-lg -m-4 z-[-1]"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveSection('skills')}
              className={`py-2 px-4 font-medium text-sm focus:outline-none ${
                activeSection === 'skills'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              Compétences
            </button>
            <button
              onClick={() => setActiveSection('languages')}
              className={`py-2 px-4 font-medium text-sm focus:outline-none ${
                activeSection === 'languages'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              Langues
            </button>
            <button
              onClick={() => setActiveSection('otherSkills')}
              className={`py-2 px-4 font-medium text-sm focus:outline-none ${
                activeSection === 'otherSkills'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              Autres compétences
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeSection === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap gap-4 mt-6 mb-8">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <skill.icon className="mr-3" size={24} style={{ color: skill.color }} />
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {activeSection === 'languages' && (
              <motion.div
                key="languages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
              >
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-semibold">{language.name}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">- {language.level}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeSection === 'otherSkills' && (
              <motion.div
                key="otherSkills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6"
              >
                {otherSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <FaUsers className="mr-3 text-blue-500" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
