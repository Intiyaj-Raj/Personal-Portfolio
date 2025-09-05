import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <SectionWrapper
      id="skills"
      className="py-20 px-4"
      animationType="scale"
      animationDelay={0.3}
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
            {'>'} SKILLS
          </h2>
          <div className="w-32 h-1 bg-hacker-green mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-black/70 border border-hacker-green/30 p-6 rounded-lg backdrop-blur-sm hover:border-hacker-green/80 transition-all duration-300 group"
              whileHover={{
                boxShadow: '0 0 40px rgba(0, 255, 65, 0.3)',
                scale: 1.02,
                transition: { duration: 0.2, delay: 0 },
              }}
            >
              <h3 className="text-xl font-mono text-hacker-green mb-6 uppercase tracking-wider group-hover:text-hacker-green-light transition-colors">
                [{category}]
              </h3>

              <div className="space-y-5">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                      viewport={{ once: false, amount: 0.5 }}
                      className="group/skill"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-mono text-gray-300 group-hover/skill:text-hacker-green transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-mono text-hacker-green text-sm font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-hacker-green to-hacker-green-light rounded-full relative"
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                          transition={{ duration: 1.2, delay: (categoryIndex * 0.1) + (index * 0.05) + 0.3 }}
                          viewport={{ once: false, amount: 0.5 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/40 rounded-full"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 4,
                              ease: 'easeInOut',
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

        {/* Terminal Summary */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
          className="mt-16 bg-black/80 border border-hacker-green/30 rounded-lg p-6 backdrop-blur-sm"
        >
          <div className="font-mono text-hacker-green text-sm">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-hacker-green">$</span>
              <span className="text-white">grep -E "(Frontend|Backend|Database)" skills.json | wc -l</span>
            </div>
            <div className="text-hacker-green-light ml-4">
              {skills.length} technologies mastered
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-hacker-green">$</span>
              <span className="text-white">echo "Average proficiency: $(( $(sum levels) / $(count skills) ))%"</span>
            </div>
            <motion.div
              className="text-hacker-green-light ml-4"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Average proficiency: {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </SectionWrapper>
  );
};

export default Skills;