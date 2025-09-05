import { useState, useCallback } from 'react';
import type { ParticleConfig } from '../types';


export const useParticleEffect = () => {
  const [particles, setParticles] = useState<ParticleConfig[]>([]);

  const createParticles = useCallback((x: number, y: number) => {
    const newParticles: ParticleConfig[] = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: (i / 12) * Math.PI * 2,
      speed: Math.random() * 150 + 50,
      life: 1000,
    }));

    setParticles(prev => [...prev, ...newParticles]);

    // Remove particles after animation
    setTimeout(() => {
      setParticles(prev =>
        prev.filter(p => !newParticles.some(np => np.id === p.id))
      );
    }, 1000);
  }, []);

  return { particles, createParticles };
};