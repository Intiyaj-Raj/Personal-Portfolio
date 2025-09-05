import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import type { ContactForm } from '../types';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xeokyana", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Intiyaj-Raj', label: 'GitHub', username: '@intiyaj' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/intiyaj-ansari/', label: 'LinkedIn', username: '/in/intiyaj' },
    { icon: Twitter, href: 'https://x.com/intiyaj_91', label: 'Twitter', username: '@intiyaj' },
    {
      icon: Mail,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=intiyajraj786@gmail.com',
      label: 'Email',
      username: 'intiyajraj786@gmail.com'
    },
  ];

  return (
    <SectionWrapper
      id="contact"
      className="py-20 px-4"
      animationType="slideUp"
      animationDelay={0.6}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-mono font-bold mb-6 glitch-text text-hacker-green">
            {'>'} CONTACT
          </h2>
          <div className="w-32 h-1 bg-hacker-green mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="bg-black/80 border border-hacker-green/30 rounded-lg p-8 backdrop-blur-sm hover:border-hacker-green/60 transition-all duration-300">
              <h3 className="text-2xl font-mono text-hacker-green mb-6">
                🤝 Get in Touch
              </h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-hacker-green/10 border border-hacker-green/50 rounded flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-hacker-green" />
                  <span className="text-hacker-green font-mono text-sm">The form was submitted successfully!</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded flex items-center space-x-2"
                >
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-500 font-mono text-sm">Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-hacker-green font-mono text-sm mb-2">
                    --name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-black border rounded px-4 py-3 text-hacker-green font-mono focus:outline-none focus:ring-2 transition-all ${errors.name
                      ? 'border-red-500 focus:ring-red-500/20'
                      : 'border-hacker-green/50 focus:border-hacker-green focus:ring-hacker-green/20'
                      }`}
                    placeholder="Enter your name..."
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-red-500 font-mono text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-hacker-green font-mono text-sm mb-2">
                    --email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-black border rounded px-4 py-3 text-hacker-green font-mono focus:outline-none focus:ring-2 transition-all ${errors.email
                      ? 'border-red-500 focus:ring-red-500/20'
                      : 'border-hacker-green/50 focus:border-hacker-green focus:ring-hacker-green/20'
                      }`}
                    placeholder="your.email@domain.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-500 font-mono text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-hacker-green font-mono text-sm mb-2">
                    --message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full bg-black border rounded px-4 py-3 text-hacker-green font-mono focus:outline-none focus:ring-2 transition-all resize-none ${errors.message
                      ? 'border-red-500 focus:ring-red-500/20'
                      : 'border-hacker-green/50 focus:border-hacker-green focus:ring-hacker-green/20'
                      }`}
                    placeholder="Type your message here..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-red-500 font-mono text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-2 border-hacker-green text-hacker-green font-mono py-3 px-6 rounded hover:bg-hacker-green hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      <span>Sending your message..."...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>{'[SEND_MESSAGE]'}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/*Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-black/80 border border-hacker-green/30 rounded-lg p-8 backdrop-blur-sm hover:border-hacker-green/60 transition-all duration-300">
              <h3 className="text-xl font-mono text-hacker-green mb-6">
                📱 Follow Me On
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border border-hacker-green/30 rounded hover:border-hacker-green/70 hover:bg-hacker-green/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 + 0.6 }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <div className="flex items-center space-x-4">
                      <social.icon className="w-6 h-6 text-hacker-green group-hover:text-hacker-green-light transition-colors" />
                      <div>
                        <span className="font-mono text-sm text-gray-300 group-hover:text-hacker-green transition-colors block">
                          {social.label}
                        </span>
                        <span className="font-mono text-xs text-gray-500 group-hover:text-hacker-green-light transition-colors">
                          {social.username}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      className="text-hacker-green opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;


