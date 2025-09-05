import React from 'react';
import { motion } from 'framer-motion';
import type { ParticleConfig } from '../types';


interface ParticleEffectProps {
  x: number;
  y: number;
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({ x, y }) => {
  const particles: ParticleConfig[] = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 0,
    y: 0,
    angle: (i / 12) * Math.PI * 2,
    speed: Math.random() * 120 + 60,
    life: 1000,
  }));

  return (
    <div className="fixed pointer-events-none z-30" style={{ left: x, top: y }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-hacker-green rounded-full"
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1
          }}
          animate={{
            x: Math.cos(particle.angle) * particle.speed,
            y: Math.sin(particle.angle) * particle.speed,
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Central flash */}
      <motion.div
        className="absolute w-6 h-6 bg-hacker-green rounded-full -translate-x-3 -translate-y-3"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 4, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Ring expansion */}
      <motion.div
        className="absolute w-4 h-4 border-2 border-hacker-green rounded-full -translate-x-2 -translate-y-2"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 8, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      />
    </div>
  );
};

export default ParticleEffect;