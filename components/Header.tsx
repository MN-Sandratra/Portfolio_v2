"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = ["Développeur Full Stack", "Futur Chef de Projet"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullText[textIndex].length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 150); // Augmenté de 100 à 150 ms pour ralentir l'animation
      return () => clearTimeout(timeout);
    } else if (textIndex < fullText.length - 1) {
      const timeout = setTimeout(() => {
        setTextIndex(textIndex + 1);
        setCharIndex(0);
        setText('');
      }, 2000); // Augmenté de 1000 à 2000 ms pour une pause plus longue entre les textes
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTextIndex(0);
        setCharIndex(0);
        setText('');
      }, 2000); // Augmenté de 1000 à 2000 ms pour une pause plus longue avant de recommencer
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

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
        className="text-2xl md:text-4xl mb-8 font-bold bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 text-transparent bg-clip-text animate-gradient h-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {text}
      </motion.h3>
      <motion.p 
        className="text-base md:text-lg mb-12 max-w-2xl text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Passionné par la création d&apos;applications web innovantes, 
        je transforme des idées en solutions digitales efficaces. 
        Actuellement en formation pour devenir chef de projet, 
        je combine expertise technique et vision stratégique pour mener des projets ambitieux.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a
          href="/files/CV_Sandratra_MBELO_NDRIAMANAMPY.pdf"
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
