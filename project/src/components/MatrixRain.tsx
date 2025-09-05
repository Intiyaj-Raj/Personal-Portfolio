import React, { useEffect, useRef, useCallback } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animationRef = useRef<number | null>(null);


  const initializeMatrix = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    // Matrix characters - mix of Japanese katakana, numbers, and symbols
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);
    const speeds: number[] = new Array(columns).fill(0).map(() => Math.random() * 0.5 + 0.5);

    let lastTime = 0;
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;

    const draw = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      lastTime = currentTime;

      // Semi-transparent black background for fade effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Create gradient effect - brighter at the front
        const gradient = ctx.createLinearGradient(0, y - fontSize * 10, 0, y);
        gradient.addColorStop(0, 'rgba(0, 255, 65, 0)');
        gradient.addColorStop(0.8, 'rgba(0, 255, 65, 0.8)');
        gradient.addColorStop(1, 'rgba(0, 255, 65, 1)');

        ctx.fillStyle = gradient;
        ctx.fillText(char, x, y);

        // Reset drop when it goes off screen or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speeds[i];
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      resizeCanvas();
      // Recalculate columns and drops array
      const newColumns = Math.floor(canvas.width / fontSize);
      drops.length = newColumns;
      speeds.length = newColumns;
      for (let i = 0; i < newColumns; i++) {
        if (drops[i] === undefined) drops[i] = Math.random() * -100;
        if (speeds[i] === undefined) speeds[i] = Math.random() * 0.5 + 0.5;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = initializeMatrix();
    return cleanup;
  }, [initializeMatrix]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-15"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default MatrixRain;