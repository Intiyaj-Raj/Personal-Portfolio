import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <SectionWrapper
      id="skills"
      className="py-16 sm:py-20 px-4"
      animationType="scale"
      animationDelay={0.3}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-mono font-bold mb-6 glitch-text text-hacker-green">
            {'>'} SKILLS
          </h2>
          <div className="w-28 h-1 bg-hacker-green mx-auto" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`
                bg-black/70 border border-hacker-green/30 p-5 sm:p-6 
                rounded-tr-[10px] rounded-bl-[10px] backdrop-blur-sm
                hover:border-hacker-green/80 transition-all duration-300 group

                ${category === "Tools"
                  ? "md:col-span-1 xl:col-span-3 xl:w-[85%] xl:mx-auto"
                  : ""
                }
              `}
              whileHover={{
                boxShadow: '0 0 30px rgba(0, 255, 65, 0.3)',
                scale: 1.02,
              }}
            >

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-mono text-hacker-green mb-5 uppercase tracking-wider group-hover:text-hacker-green-light transition-colors">
                [{category}]
              </h3>

              {/* Skills */}
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + index * 0.05,
                      }}
                    >

                      {/* Name */}
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <span>{skill.icon}</span>
                          <span className="font-mono text-sm sm:text-base text-gray-300 group-hover:text-hacker-green transition">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-hacker-green text-xs sm:text-sm font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress */}
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-hacker-green to-hacker-green-light rounded-full relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + index * 0.05 + 0.2,
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                            }}
                          />
                        </motion.div>
                      </div>

                    </motion.div>
                  ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;