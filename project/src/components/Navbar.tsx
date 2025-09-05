import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Menu, X, Wifi } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Scroll + Active Section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['hero', 'about', 'skills', 'certifications', 'projects', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside mobile menu to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Scroll to section with mobile menu fix
  const scrollToSection = (sectionId: string) => {
    const navbarHeight = 64; // h-16 = 64px
    if (isMobileMenuOpen) {
      // Close menu first
      setIsMobileMenuOpen(false);

      // Delay activeSection update until after scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - navbarHeight;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }

        // Set active section AFTER scroll
        setActiveSection(sectionId);
      }, 310); // wait for menu animation
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }

      // Set active section immediately for desktop
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certs' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-black/95 backdrop-blur-md border-b border-hacker-green/30 shadow-lg shadow-hacker-green/10'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Terminal className="w-8 h-8 text-hacker-green group-hover:text-hacker-green-light transition-colors" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-hacker-green font-mono group-hover:text-hacker-green-light transition-colors">
                Mr.Enginयर
              </span>
              <div className="flex items-center space-x-1">
                <Wifi className="w-3 h-3 text-hacker-green" />
                <span className="text-xs font-mono text-hacker-green">ONLINE</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-mono text-sm tracking-wider transition-all duration-300 group ${activeSection === item.id
                  ? 'text-hacker-green-light'
                  : 'text-hacker-green hover:text-hacker-green-light'
                  }`}
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">[{item.label}]</span>
                <motion.div
                  className={`absolute inset-0 border rounded transition-all duration-300 ${activeSection === item.id
                    ? 'border-hacker-green/70 bg-hacker-green/10'
                    : 'border-hacker-green/0 group-hover:border-hacker-green/50'
                    }`}
                  whileHover={{
                    boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
                  }}
                />
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-hacker-green"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-hacker-green p-2"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          ref={mobileMenuRef}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/95 border-t border-hacker-green/20"
        >
          <div className="py-4 space-y-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 font-mono transition-all duration-300 ${activeSection === item.id
                  ? 'text-hacker-green-light bg-hacker-green/10 border-l-4 border-hacker-green'
                  : 'text-hacker-green hover:bg-hacker-green/10 hover:text-hacker-green-light'
                  }`}
                initial={{ opacity: 0, x: -20 }}
                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                [{item.label}]
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;