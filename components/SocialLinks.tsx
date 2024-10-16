"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const SocialLinks: React.FC<{ className?: string, isFooter?: boolean }> = ({ className = '', isFooter = false }) => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/MN-Sandratra', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sandratra-mbelo-ndriamanampy-b2249b239/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:mn.sandratra@gmail.com', label: 'Email' },
  ];

  return (
    <div className={`flex ${isFooter ? 'flex-row' : 'flex-col'} items-center ${className}`}>
      {socialLinks.map((link, index) => (
        <React.Fragment key={link.label}>
          <motion.a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <link.icon size={24} strokeWidth={2} />
            <span className="sr-only">{link.label}</span>
          </motion.a>
          {index < socialLinks.length - 1 && (
            isFooter ? (
              <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-2" />
            ) : (
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 my-2" />
            )
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SocialLinks;
