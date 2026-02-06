import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SEOHead from './SEOHead';  // 👈 SEOHead ko import kiya
import fullStackDeveloperImg from '../assets/full_stack_developer.webp'

const About: React.FC = () => {
  const highlights = [
    { icon: Code, title: 'Frontend Mastery', desc: 'React, JavaScript, Modern CSS' },
    { icon: Server, title: 'Backend Architecture', desc: 'Node.js, Python, Microservices' },
    { icon: Database, title: 'Database Design', desc: 'PostgreSQL, MongoDB, Redis' },
    { icon: Globe, title: 'Full-Stack Solutions', desc: 'End-to-end Development' },
  ];

  return (
    <SectionWrapper
      id="about"
      className="py-20 px-4"
      animationType="slideUp"
      animationDelay={0.2}
    >
      <SEOHead
        title="Intiyaj Ansari | Full Stack Developer - Mr. Engineer"
        description="Learn more about Intiyaj Ansari, also known as Mr. Engineer. A full stack developer skilled in frontend, backend, and database solutions, building scalable and secure web applications."
        url="https://intiyajansarifullstackdeveloper.netlify.app"
        image="https://intiyajansarifullstackdeveloper.netlify.app/full-stack-developer-intiyaj-og.png"
        keywords="Intiyaj Ansari, full stack developer, Mr. Engineer portfolio, frontend backend developer, Intiyaj"
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-mono font-bold mb-5 glitch-text text-hacker-green">
            {'>'} ABOUT_ME
          </h2>
          <div className="w-32 h-1 bg-hacker-green mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center lg:order-2"
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-hacker-green relative"
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(0, 255, 65, 0.6)',
                    '0 0 80px rgba(0, 255, 65, 1)',
                    '0 0 40px rgba(0, 255, 65, 0.6)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 100px rgba(0, 255, 65, 1)',
                }}
              >
                <img
                  src={fullStackDeveloperImg}
                  alt="Intiyaj - Full Stack Developer and Cybersecurity Expert"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-hacker-green/20 via-transparent to-hacker-green/20"
                  animate={{ opacity: [0, 0.7, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>

              {/* Rotating outer rings */}
              <motion.div
                className="absolute inset-0 w-full h-full rounded-full border-2 border-transparent"
                style={{
                  background: 'linear-gradient(45deg, rgba(0,255,65,0.1), transparent, transparent)',
                  backgroundSize: '200% 200%',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-2 w-full h-full rounded-full border border-transparent"
                style={{
                  background: 'linear-gradient(45deg, rgba(0,255,65,0.1), transparent, transparent)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:order-1 space-y-8"
          >
            {/* About text block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-black/70 border border-hacker-green/30 p-8 rounded-lg backdrop-blur-sm hover:border-hacker-green/60 transition-all duration-300"
            >
              <h3 className="text-2xl font-mono text-hacker-green mb-6">
                personal_detail
              </h3>
              <div className="space-y-4 text-gray-300 font-mono text-sm leading-relaxed text-justify">
                <p>
                  Hello, I am INTIYAJ Ansari also known as Mr. Engineer, a Full Stack Developer.
                  I enjoy making websites and apps that are modern, sharp and user friendly.
                  As a full stack developer, I work on both front-end and back-end to convert ideas into real projects.
                </p>
                <p>
                  My focus is on clean design, smooth performance and reliable solutions that help businesses grow online.
                  Obtain user-friendly web solutions that support the expansion of your company.
                </p>
              </div>
            </motion.div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-black/50 border border-hacker-green/20 p-4 rounded-lg backdrop-blur-sm hover:border-hacker-green/50 transition-all duration-300 group"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 25px rgba(0, 255, 65, 0.3)',
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-6 h-6 text-hacker-green group-hover:text-hacker-green-light transition-colors" />
                    <div>
                      <h4 className="text-sm font-mono text-hacker-green mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-xs font-mono">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
