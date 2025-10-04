import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  UserIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  LightBulbIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      // Use getBoundingClientRect().top for a more accurate scroll position
      const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });

      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-80px 0px -40% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <HomeIcon className="w-5 h-5" /> },
    { id: 'about', label: 'About', icon: <UserIcon className="w-5 h-5" /> },
    { id: 'education', label: 'Education', icon: <AcademicCapIcon className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <LightBulbIcon className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <CodeBracketIcon className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <EnvelopeIcon className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-lime-400 tracking-wide"
        >
          Avneesh
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'border-2 border-lime-400 text-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.6)]'
                  : 'border-2 border-transparent hover:border-lime-400 hover:shadow-[0_0_8px_rgba(163,230,53,0.5)] hover:text-lime-300'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          className="md:hidden bg-gray-800 flex flex-col items-center py-4 space-y-4"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`flex items-center gap-2 text-lg px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'border-2 border-lime-400 text-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.6)]'
                  : 'border-2 border-transparent hover:border-lime-400 hover:text-lime-300'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;