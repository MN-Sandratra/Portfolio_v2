"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers } from 'react-icons/fa';

const SkillsSection: React.FC = () => {
  const technicalSkills = [
    "JavaScript", "React", "Node.js", "Python", "SQL", "Git"
  ];

  const softSkills = [
    "Gestion d'équipe", "Communication", "Résolution de problèmes", "Adaptabilité", "Leadership", "Gestion de projet"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Compétences
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
              <FaCode className="mr-3" /> Compétences Techniques
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
              <FaUsers className="mr-3" /> Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
