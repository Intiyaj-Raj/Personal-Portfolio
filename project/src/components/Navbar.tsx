import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Menu, X, Wifi } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "about",
        "skills",
        "certifications",
        "projects",
        "contact",
      ];

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const navbarHeight = 64;
    const element = document.getElementById(sectionId);

    if (element) {
      const offsetTop = element.offsetTop - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }

    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certs" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 ${isScrolled
        ? "bg-black border-b border-hacker-green/30"
        : "bg-black"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <Terminal className="w-8 h-8 text-hacker-green" />

            <div className="flex flex-col">
              <span className="text-xl font-bold text-hacker-green font-mono">
                Mr.Engineer
              </span>

              <div className="flex items-center space-x-1">
                <Wifi className="w-3 h-3 text-hacker-green" />
                <span className="text-xs font-mono text-hacker-green">
                  ONLINE
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`font-mono px-3 py-1 rounded-md transition-all duration-300
                ${activeSection === item.id
                    ? "text-hacker-green-light border-b border-hacker-green"
                    : "text-hacker-green hover:text-hacker-green-light hover:bg-hacker-green/10 hover:shadow-[0_0_10px_#00ff9c]"
                  }`}
              >
                [{item.label}]
              </motion.button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-hacker-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        ref={mobileMenuRef}
        initial={{ x: "-100%" }}
        animate={{ x: isMobileMenuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-16 left-0 w-[50%] h-[calc(100vh-64px)] bg-black border-r border-hacker-green/30"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-full text-left px-4 py-4 font-mono transition-all duration-300
            ${activeSection === item.id
                ? "text-hacker-green-light bg-hacker-green/10 border-l-4 border-hacker-green"
                : "text-hacker-green hover:bg-hacker-green/10 hover:pl-6"
              }`}
          >
            [{item.label}]
          </button>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
