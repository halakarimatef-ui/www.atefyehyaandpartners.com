
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Firm Overview', path: '/' },
    { name: 'Our Team', path: '/team' },
    { name: 'Practice Areas', path: '/practice-areas' },
  
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 border-b border-slate-200 dark:border-slate-800 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <Logo variant="monogram" className="h-14 group-hover:scale-105 transition-transform duration-300" />
          <div className="ml-6 hidden sm:block">
            <span className="block text-sm font-display font-bold tracking-[0.1em] uppercase text-primary dark:text-white">Atef Yehya</span>
            <span className="block text-[9px] tracking-[0.2em] uppercase text-accent">&amp; Partners</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold tracking-[0.2em] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors hover:text-accent ${
                isActive(link.path) ? 'text-primary dark:text-white border-b border-primary dark:border-white' : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-primary dark:text-white"
          >
            <span className="material-symbols-outlined">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2">
            <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button className="text-primary dark:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
