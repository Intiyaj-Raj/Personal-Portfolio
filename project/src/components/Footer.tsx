import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = '>_ Made with 💻 by Intiyaj Ansari | 😍 Mr. Engineer';

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;

    const typeText = () => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else if (isDeleting && currentIndex >= 0) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex--;
      }

      if (currentIndex === fullText.length + 1) {
        setTimeout(() => {
          isDeleting = true;
        }, 4000);
      }

      if (isDeleting && currentIndex === 0) {
        setTimeout(() => {
          isDeleting = false;
          currentIndex = 0;
        }, 1000);
      }
    };

    const interval = setInterval(typeText, isDeleting ? 50 : 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-hacker-green/20 py-12 px-4 relative bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center"
        >
          <div className="bg-black/90 border border-hacker-green/40 rounded-lg p-8 inline-block backdrop-blur-sm max-w-2xl">
            <div className="flex items-center justify-center mb-4">
              <Terminal className="w-6 h-6 text-hacker-green mr-2" />
              <span className="font-mono text-hacker-green text-sm">SYSTEM_STATUS: ONLINE</span>
            </div>

            <div className="font-mono text-hacker-green text-lg mb-4 min-h-[2rem] flex items-center justify-center">
              <span>{displayText}</span>
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                _
              </span>
            </div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '100%', opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-hacker-green to-transparent mb-6"
            />

            <div className="space-y-2 text-gray-400 font-mono text-sm">
              <p>© 2025 Intiyaj Ansari. All rights reserved.</p>
              <motion.button
                onClick={scrollToTop}
                className="text-hacker-green hover:text-hacker-green-light transition-colors mt-4 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <span>[RETURN_TO_TOP]</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5 pointer-events-none" />
      </div>
    </footer>
  );
};

export default Footer;