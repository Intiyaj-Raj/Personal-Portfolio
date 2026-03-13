import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, CheckCircle, AlertCircle, Phone, MessageCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import type { ContactForm } from '../types';

const Contact: React.FC = () => {

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
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
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

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

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

      } else {
        setSubmitStatus("error");
      }

      setTimeout(() => setSubmitStatus("idle"), 3000);

    } catch {

      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);

    } finally {
      setIsSubmitting(false);
    }

  };

  const socialLinks = [

    { icon: Github, href: 'https://github.com/Intiyaj-Raj', label: 'GitHub', username: '@intiyaj' },

    { icon: Linkedin, href: 'https://www.linkedin.com/in/intiyaj-ansari/', label: 'LinkedIn', username: '/in/intiyaj' },

    { icon: Instagram, href: 'https://www.instagram.com/inti_0786/', label: 'Instagram', username: '@inti_0786' },

    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=intiyajraj786@gmail.com', label: 'Email', username: 'intiyajraj786@gmail.com' },

    { icon: Phone, href: 'tel:9117392461', label: 'Contact', username: '+91 9117392461' },

    { icon: MessageCircle, href: 'https://wa.me/919117392461', label: 'WhatsApp', username: '+91 9117392461' }

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
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-7xl font-mono font-bold mb-6 text-green-400">
            {'>'} CONTACT
          </h2>

          <div className="w-32 h-1 bg-green-400 mx-auto" />

        </motion.div>


        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* CONTACT FORM */}

          <div className="bg-black border border-green-400/30 rounded-tr-[10px] rounded-bl-[10px] p-8">

            <h3 className="text-2xl font-mono text-green-400 mb-6">
              Get in Touch
            </h3>


            {submitStatus === 'success' && (

              <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-tr-[10px] rounded-bl-[10px] flex items-center space-x-2">

                <CheckCircle className="w-5 h-5 text-green-500" />

                <span className="text-green-500 font-bold font-mono text-sm">
                  The form was submitted successfully!
                </span>

              </div>

            )}


            {submitStatus === 'error' && (

              <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-tr-[10px] rounded-bl-[10px] flex items-center space-x-2">

                <AlertCircle className="w-5 h-5 text-red-500" />

                <span className="text-red-500 font-mono text-sm">
                  Something went wrong. Try again.
                </span>

              </div>

            )}


            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={`w-full bg-black border border-green-400/30 rounded-tr-[10px] rounded-bl-[10px] px-4 py-3 text-green-400 font-mono \${errors.name ? 'border-red-500 focus:border-red-500' : 'border-green-400/50 focus:border-green-400'}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 font-mono">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className={`w-full bg-black border border-green-400/30 rounded-tr-[10px] rounded-bl-[10px] px-4 py-3 text-green-400 font-mono \${errors.email ? 'border-red-500 focus:border-red-500' : 'border-green-400/50 focus:border-green-400'}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 font-mono">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className={`w-full bg-black border border-green-400/30 rounded-tr-[10px] rounded-bl-[10px] px-4 py-3 text-green-400 font-mono \${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-green-400/50 focus:border-green-400'}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 font-mono">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Your Message"
                  className={`w-full bg-black border border-green-400/30 rounded-tr-[10px] rounded-bl-[10px] px-4 py-3 text-green-400 font-mono \${errors.message ? 'border-red-500 focus:border-red-500' : 'border-green-400/50 focus:border-green-400'}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 font-mono">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full border-2 border-green-400 text-green-400 font-mono py-3 rounded-tr-[10px] rounded-bl-[10px] hover:bg-green-400 hover:text-black transition"
              >

                {isSubmitting ? "Sending..." : "SEND MESSAGE"}

              </button>

            </form>

          </div>



          {/* SOCIAL LINKS */}

          <div className="flex flex-col justify-center space-y-4">

            {socialLinks.map((social) => (

              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-green-400/30 rounded-tr-[10px] rounded-bl-[10px] hover:bg-green-400/10 transition"
              >

                <div className="flex items-center gap-3">

                  <social.icon className="text-green-400" size={20} />

                  <div>
                    <p className="text-gray-300 text-sm">{social.label}</p>
                    <p className="text-gray-500 text-xs">{social.username}</p>
                  </div>

                </div>

              </a>

            ))}

          </div>

        </div>

      </div>

    </SectionWrapper>

  );

};

export default Contact;
