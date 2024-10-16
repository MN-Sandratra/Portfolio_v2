"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const email = 'mn.sandratra@gmail.com';

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contactez-moi
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            Vous avez un projet en tête ou vous souhaitez simplement discuter ? N&apos;hésitez pas à me contacter !
          </p>
          <div className="flex justify-center">
            <a
              href={`mailto:${email}`}
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 rounded-md overflow-hidden transition-all duration-300 ease-out shadow-md hover:shadow-lg"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out transform group-hover:scale-105"></span>
              <span className="relative flex items-center z-10">
                <FaEnvelope className="mr-2" />
                Contactez-moi
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
