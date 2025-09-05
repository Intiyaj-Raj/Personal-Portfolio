import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Building, CheckCircle, Image as ImageIcon } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { certifications } from '../data/portfolio';

const Certifications: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <SectionWrapper
      id="certifications"
      className="py-20 px-4"
      animationType="slideLeft"
      animationDelay={0.4}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-mono font-bold mb-6 glitch-text text-hacker-green">
            {'>'} CERTIFICATIONS
          </h2>
          <div className="w-32 h-1 bg-hacker-green mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="group"
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-black/80 border border-hacker-green/30 rounded-lg p-6 backdrop-blur-sm h-full hover:border-hacker-green/90 transition-all duration-300 relative overflow-hidden">

                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={hoveredCard === cert.id ? {
                    background: [
                      'radial-gradient(circle at 0% 0%, rgba(0,255,65,0.15) 0%, transparent 50%)',
                      'radial-gradient(circle at 100% 100%, rgba(0,255,65,0.15) 0%, transparent 50%)',
                      'radial-gradient(circle at 0% 100%, rgba(0,255,65,0.15) 0%, transparent 50%)',
                      'radial-gradient(circle at 100% 0%, rgba(0,255,65,0.15) 0%, transparent 50%)',
                    ]
                  } : {}}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Neon glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 50px rgba(0, 255, 65, 0.4), inset 0 0 50px rgba(0, 255, 65, 0.1)',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="w-10 h-10 text-hacker-green group-hover:text-hacker-green-light transition-colors" />
                    </motion.div>

                    {/* Image button to open certificate */}
                    <motion.a
                      href={cert.imageUrl} // image URL use hoga
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-hacker-green hover:text-hacker-green-light transition-colors opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ImageIcon className="w-5 h-5" />
                    </motion.a>
                  </div>

                  <h3 className="text-lg font-mono text-hacker-green mb-4 group-hover:text-hacker-green-light transition-colors leading-tight">
                    {cert.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-gray-400 font-mono text-sm">
                      <Building className="w-4 h-4 text-hacker-green" />
                      <span>{cert.platform}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 font-mono text-sm">
                      <Calendar className="w-4 h-4 text-hacker-green" />
                      <span>{cert.year}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 font-mono text-sm">
                      <CheckCircle className="w-4 h-4 text-hacker-green" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 font-mono text-xs leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-hacker-green/10 border border-hacker-green/40 rounded text-hacker-green font-mono text-xs">
                      VERIFIED
                    </span>
                  </div>
                </div>

                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-hacker-green/30 to-transparent h-8 opacity-0 group-hover:opacity-100"
                  animate={hoveredCard === cert.id ? { y: ['-2rem', '100%', '-2rem'] } : {}}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatDelay: 1
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
