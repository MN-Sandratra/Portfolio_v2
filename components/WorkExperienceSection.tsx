"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import experiencesData from '../data/experiences.json';

const WorkExperienceSection: React.FC = () => {
  const [activeCompany, setActiveCompany] = useState(experiencesData[0].company);
  const [lineHeight, setLineHeight] = useState(0);
  const companiesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const calculateLineHeight = () => {
      if (companiesRef.current.length > 0) {
        const firstCompany = companiesRef.current[0];
        const lastCompany = companiesRef.current[companiesRef.current.length - 1];
        if (firstCompany && lastCompany) {
          const { top: firstTop } = firstCompany.getBoundingClientRect();
          const { bottom: lastBottom } = lastCompany.getBoundingClientRect();
          setLineHeight(lastBottom - firstTop);
        }
      }
    };

    calculateLineHeight();
    window.addEventListener('resize', calculateLineHeight);
    return () => window.removeEventListener('resize', calculateLineHeight);
  }, []);

  const formatDate = (dateString: string) => {
    const months = [
      'JANV.', 'FÉV.', 'MARS', 'AVR.', 'MAI', 'JUIN',
      'JUIL.', 'AOÛT', 'SEPT.', 'OCT.', 'NOV.', 'DÉC.'
    ];
    const [month, year] = dateString.split('.');
    const monthIndex = parseInt(month) - 1;
    return `${months[monthIndex]} ${year}`;
  };

  return (
    <section id="experience" className="py-20 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-gray-800 dark:text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Expériences Professionnelles
        </motion.h2>
        <div className="flex flex-col md:flex-row md:space-x-16">
          <motion.div 
            className="md:w-1/3 mb-8 md:mb-0 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div 
              className="absolute top-0 left-0 w-0.5 bg-gray-200 dark:bg-gray-700" 
              style={{ height: `${lineHeight}px` }}
            ></div>
            {experiencesData.map((exp, index) => (
              <motion.div 
                key={exp.company} 
                className="relative mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                ref={(el) => (companiesRef.current[index] = el)}
              >
                <button
                  className={`w-full text-left py-2 pr-4 pl-6 transition-colors duration-300 ${
                    activeCompany === exp.company
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={() => setActiveCompany(exp.company)}
                >
                  <span className="relative z-10">{exp.company}</span>
                </button>
                {activeCompany === exp.company && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {experiencesData.map((exp) => (
                exp.company === activeCompany && (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 mb-2 flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {`${formatDate(exp.period.split(' - ')[0])} - ${formatDate(exp.period.split(' - ')[1])}`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      {exp.location}
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {exp.description.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <FaChevronRight className="mr-2 mt-1 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
