import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Eye, Code2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardClick = (projectId: number) => {
    setFlippedCard(flippedCard === projectId ? null : projectId);
  };

  return (
    <SectionWrapper
      id="projects"
      className="py-20 px-4"
      animationType="slideRight"
      animationDelay={0.5}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-mono font-bold mb-6 glitch-text text-hacker-green">
            {'>'} PROJECTS
          </h2>
          <div className="w-32 h-1 bg-hacker-green mx-auto" />
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative h-96 cursor-pointer"
              style={{ perspective: 1000 }}
              onClick={() => handleCardClick(project.id)}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ rotateY: flippedCard === project.id ? 180 : 0 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 w-full h-full bg-black/80 border border-hacker-green/30 rounded-lg overflow-hidden group"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <motion.div
                    className="h-full flex flex-col"
                    whileHover={{ boxShadow: '0 0 40px rgba(0, 255, 65, 0.4)' }}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} - Project Screenshot`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <motion.div
                        className="absolute inset-0 bg-hacker-green/20"
                        animate={
                          hoveredCard === project.id
                            ? { opacity: [0, 0.3, 0] }
                            : {}
                        }
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      {project.featured && (
                        <div className="absolute top-4 right-4 px-2 py-1 bg-hacker-green text-black font-mono text-xs rounded">
                          FEATURED
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-mono text-hacker-green mb-3 group-hover:text-hacker-green-light transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 font-mono text-sm flex-grow leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4 mb-4">
                        {project.technologies.slice(0, 4).map((tech: string) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-hacker-green/10 border border-hacker-green/30 rounded text-hacker-green font-mono text-xs hover:bg-hacker-green/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-hacker-green/10 border border-hacker-green/30 rounded text-hacker-green font-mono text-xs">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="text-center">
                        <motion.span
                          className="text-hacker-green font-mono text-sm"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          [CLICK_TO_EXPLORE]
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 w-full h-full bg-black/95 border border-hacker-green/60 rounded-lg p-6 backdrop-blur-sm overflow-hidden"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="flex flex-col h-full min-h-0">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-mono text-hacker-green">
                        {project.title}
                      </h3>
                      <Code2 className="w-6 h-6 text-hacker-green" />
                    </div>

                    {/* Long Description */}
                    <div className="flex-grow overflow-y-auto mb-6 pr-1">
                      <p
                        className="text-gray-300 font-mono text-xs leading-relaxed"
                        style={{ textAlign: 'justify' }}
                      >
                        {project.longDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-hacker-green/15 border border-hacker-green/40 rounded text-hacker-green font-mono text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-auto w-full">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-hacker-green hover:text-hacker-green-light 
                        transition-colors font-mono text-sm w-1/2 sm:w-40 md:w-48 lg:w-56 
                        justify-center py-2 md:py-3 md:px-6 border border-hacker-green/50 rounded 
                        hover:border-hacker-green transition-all"
                        whileHover={{ scale: 1.05 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Eye className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="md:text-base">DEMO</span>
                      </motion.a>

                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-hacker-green hover:text-hacker-green-light 
                        transition-colors font-mono text-sm w-1/2 sm:w-40 md:w-48 lg:w-56 
                        justify-center py-2 md:py-3 md:px-6 border border-hacker-green/50 rounded 
                        hover:border-hacker-green transition-all"
                        whileHover={{ scale: 1.05 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="md:text-base">CODE</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 🔹 View All Projects Button */}
        <div className="flex justify-center mt-12">
          <motion.a
            href="https://github.com/Intiyaj-Raj?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 md:px-8 md:py-4 border border-hacker-green text-hacker-green font-mono rounded-lg 
            hover:bg-hacker-green/20 transition-colors flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base">View All Projects</span>
          </motion.a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
