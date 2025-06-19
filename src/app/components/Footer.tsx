import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Devfolio&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Devfolio. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/anivnssb"
              target="_blank"
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/anvinps"
              target="_blank"
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/anvinps"
              target="_blank"
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
