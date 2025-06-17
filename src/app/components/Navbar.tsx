'use client';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const theme = 'dark';
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blogs', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <nav className="fixed w-full bg-dark/80 backdrop:blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Devfolio&trade;
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  className={`hover:text-primary transition-colors font-medium ${
                    isActive ? ' text-primary' : ''
                  }`}
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
            <button className="p-2 rounded-lg hover:bggray-100 dark:hover:bg-gray-800 transition-colors">
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
