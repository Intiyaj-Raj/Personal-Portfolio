import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal } from 'lucide-react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import SectionWrapper from './SectionWrapper';
import intiayjImg from '../assets/intiyaj_ansari_hero.webp';


const Hero: React.FC = () => {
  const taglines = [
    'Building Web Apps',
    'Frontend Developer',
    'Back-end Developer',
    'Web Developer'
  ];

  const displayText = useTypingAnimation({
    texts: taglines,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 1000,
  });

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionWrapper
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      animationType="fade"
      animationDelay={0}
    >
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        {/* Professional Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.3, type: 'spring', stiffness: 100 }}
          className="mb-7 flex justify-center"
        >
          <div className="relative mt-20">
            <motion.div
              className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-hacker-green relative"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(0, 255, 65, 0.6)',
                  '0 0 60px rgba(0, 255, 65, 1)',
                  '0 0 30px rgba(0, 255, 65, 0.6)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 80px rgba(0, 255, 65, 1)',
              }}
            >
              <img
                src={intiayjImg}
                alt="Intiyaj - Full Stack Developer and Cybersecurity Expert"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-hacker-green/20 via-transparent to-hacker-green/20"
                animate={{ opacity: [0, 0.7, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>

            {/* Rotating outer rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent"
              style={{
                background: 'linear-gradient(45deg, rgba(0,255,65,0.3), transparent, transparent)',
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent"
              style={{
                background: 'linear-gradient(45deg, rgba(0,255,65,0.3), transparent, transparent)',
              }}
              animate={{
                rotate: 360
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12"
        >
          <motion.h1
            className="text-5xl md:text-8xl font-bold font-mono mb-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-hacker-green relative inline-block glitch-text" data-text="INTIYAJ">
              INTIYAJ
              <motion.span
                className="absolute inset-0 text-red-500"
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, -3, 3, 0],
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              >
                INTIYAJ
              </motion.span>
              <motion.span
                className="absolute inset-0 text-cyan-400"
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  repeatDelay: 4,
                  delay: 0.1,
                }}
              >
                INTIYAJ
              </motion.span>
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-mono text-hacker-green-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            Full Stack Developer & WebApp Developer
          </motion.h2>

          <div className="text-xl md:text-2xl font-mono h-12 flex justify-center items-center">
            <Terminal className="w-6 h-6 text-hacker-green mr-3" />
            <span className="text-hacker-green">{'>'} </span>
            <span className="text-white ml-2">{displayText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-hacker-green ml-1"
            >
              _
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="space-y-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 border-2 border-hacker-green text-hacker-green font-mono text-lg hover:bg-hacker-green hover:text-black transition-all duration-300 relative group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
            >
              <span className="relative z-10">{'[EXPLORE_PORTFOLIO]'}</span>
              <motion.div
                className="absolute inset-0 bg-hacker-green/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>

            <motion.a
              href="#contact"
              className="px-8 py-4 bg-hacker-green text-black font-mono text-lg hover:bg-hacker-green-light transition-all duration-300 relative group"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 65, 0.8)' }}
              whileTap={{ scale: 0.95 }}
            >
              {'[INITIATE_CONTACT]'}
            </motion.a>
          </div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex justify-center mt-16"
          >
            <ChevronDown
              className="w-10 h-10 text-hacker-green cursor-pointer hover:text-hacker-green-light transition-colors"
              onClick={scrollToAbout}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-hacker-green/10 to-transparent h-1 opacity-50"
        animate={{ y: ['-100%', '100vh'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
    </SectionWrapper>
  );
};

export default Hero;