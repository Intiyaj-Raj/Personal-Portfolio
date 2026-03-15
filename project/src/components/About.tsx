import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SEOHead from './SEOHead';  // 👈 SEOHead ko import kiya
import fullStackDeveloperImg from '../assets/full_stack_developer.webp'

const About: React.FC = () => {
  const highlights = [
    { icon: Code, title: 'Frontend Mastery', desc: 'React, JavaScript, Modern CSS' },
    { icon: Server, title: 'Backend Architecture', desc: 'Node.js' },
    { icon: Database, title: 'Database Design', desc: 'PostgreSQL, MongoDB' },
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
              className="bg-black/70 border border-hacker-green/30 p-8 rounded-tr-[10px] rounded-bl-[10px]  backdrop-blur-sm hover:border-hacker-green/60 transition-all duration-300"
            >
              <h3 className="text-2xl font-mono text-hacker-green mb-6">
                personal_detail
              </h3>
              <div className="space-y-4 text-gray-300 font-mono text-sm leading-relaxed text-justify">
                <p>
                  Hi! I’m <strong>Intiyaj Ansari</strong> from a <strong>small village</strong> and a <strong>farmer family</strong>. Since childhood, I have been curious about <strong>computers and the internet</strong>. This curiosity led me to choose <strong>Computer Science Engineering</strong> in college so I could learn how websites and apps are built.
                </p>

                <p>
                  At the beginning, programming was difficult for me, but I kept learning step by step through practice and tutorials. I started with <strong>HTML, CSS, and JavaScript</strong> and slowly moved to the <strong>MERN Stack (MongoDB, Express.js, React, Node.js)</strong>.
                </p>

                <p>
                  To improve my skills, I built projects like a <strong>Netflix Clone</strong>, an <strong>Office Clone</strong>, and my <strong>Portfolio Website</strong>. These projects helped me learn problem-solving and gain confidence in development.
                </p>

                <p>
                  Coming from a farmer family taught me <strong>hard work, patience, and consistency</strong>. My goal is to grow as a <strong>MERN Stack Developer</strong> and build useful web applications that help people.
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
                  className="bg-black/50 border border-hacker-green/20 p-4 rounded-tr-[10px] rounded-bl-[10px]  backdrop-blur-sm hover:border-hacker-green/50 transition-all duration-300 group"
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
