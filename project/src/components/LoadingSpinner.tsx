import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen bg-hacker-dark flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-hacker-green/30 border-t-hacker-green rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.p
          className="text-hacker-green font-mono text-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {'>'} Initializing system...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingSpinner;