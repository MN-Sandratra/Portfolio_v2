"use client";

import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`bg-gray-100 dark:bg-gray-700 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} fixed left-0 h-full`}>
      <button 
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-gray-600 dark:text-gray-300"
      >
        {isCollapsed ? '→' : '←'}
      </button>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500">
              <FaLinkedin className="mr-2" />
              {!isCollapsed && 'LinkedIn'}
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800">
              <FaGithub className="mr-2" />
              {!isCollapsed && 'GitHub'}
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-400">
              <FaTwitter className="mr-2" />
              {!isCollapsed && 'Twitter'}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
