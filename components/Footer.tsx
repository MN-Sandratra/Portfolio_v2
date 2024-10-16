import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center space-y-4">
          <div className="md:hidden">
            <SocialLinks isFooter={true} />
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
            © {new Date().getFullYear()} Sandratra MBELO NDRIAMANAMPY. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
