"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col justify-center min-h-screen px-4 md:px-12 max-w-5xl mx-auto" id='home'>
      <motion.h1 
        className="text-lg md:text-xl font-medium mb-2 text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bonjour, je suis
      </motion.h1>
      <motion.h2 
        className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Sandratra MBELO NDRIAMANAMPY
      </motion.h2>
      <motion.h3 
        className="text-2xl md:text-4xl mb-8 font-bold bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 text-transparent bg-clip-text animate-gradient"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Développeur Full Stack
      </motion.h3>
      <motion.p 
        className="text-base md:text-lg mb-12 max-w-2xl text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Passionné par la création d&apos;applications web innovantes et performantes, 
        je transforme des idées en solutions digitales élégantes et efficaces. 
        Mon expertise couvre l&apos;ensemble du processus de développement, de la conception à la mise en production.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a
          href="/path-to-your-cv.pdf"
          download
          className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 text-white hover:shadow-lg hover:scale-105"
        >
          Télécharger CV
          <span className="ml-2 inline-block transition-transform duration-200">→</span>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
