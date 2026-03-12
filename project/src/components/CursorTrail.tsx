import React, { useRef, useCallback, useEffect } from 'react';

interface TrailChar {
    x: number;
    y: number;
    char: string;
    life: number;
    vx: number;
    vy: number;
}

const CursorTrail: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const mousePosRef = useRef({ x: 0, y: 0 });
    const trailsRef = useRef<TrailChar[]>([]);
    const lastSpawnRef = useRef(0);
    const mouseMovedRef = useRef(false);

    const chars = '01#@$%';

    const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)]!;

    const initializeTrail = useCallback(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        let lastTime = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const updateTrails = (currentTime: number) => {
            // STRICTLY spawn only on recent mouse movement
            if (mouseMovedRef.current && currentTime - lastSpawnRef.current > 50) { // Throttle 50ms
                lastSpawnRef.current = currentTime;
                mouseMovedRef.current = false; // Reset flag

                // Spawn 2-4 chars ONLY at current mouse position
                const count = 2 + Math.floor(Math.random() * 3);
                for (let i = 0; i < count; i++) {
                    trailsRef.current.push({
                        x: mousePosRef.current.x + (Math.random() - 0.5) * 30,
                        y: mousePosRef.current.y + (Math.random() - 0.5) * 30,
                        char: getRandomChar(),
                        life: 1.0,
                        vx: (Math.random() - 0.5) * 80,
                        vy: Math.random() * -40 - 10, // Always upward
                    });
                }
            }

            // Update & fade existing trails
            trailsRef.current = trailsRef.current.filter(trail => {
                trail.x += trail.vx * 0.016;
                trail.y += trail.vy * 0.016;
                trail.life -= 0.02;
                return trail.life > 0;
            });
        };

        const render = (time: number) => {
            const dt = Math.min((time - lastTime) / 16.67, 0.1);
            lastTime = time;

            // Fade background
            ctx.fillStyle = 'rgba(6, 6, 6, 0.25)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Setup glow text
            ctx.font = 'bold 16px "JetBrains Mono", monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#FF0000';
            ctx.shadowBlur = 0;

            // Draw trails with glow effect
            trailsRef.current.forEach(trail => {
                ctx.save();
                ctx.globalAlpha = Math.pow(trail.life, 2); // Quadratic fade
                ctx.shadowBlur = 20 * trail.life;
                ctx.fillStyle = trail.life > 0.5 ? '#39f' : '#FF0';
                ctx.fillText(trail.char, trail.x, trail.y);
                ctx.shadowBlur = 8 * trail.life;
                ctx.fillStyle = 'rgba(0, 255, 65, 0.4)';
                ctx.fillText(trail.char, trail.x, trail.y);
                ctx.restore();
            });

            updateTrails(time);

            // Limit trails to 50 max for perf
            if (trailsRef.current.length > 50) {
                trailsRef.current = trailsRef.current.slice(-50);
            }

            animationRef.current = requestAnimationFrame(render);
        };

        animationRef.current = requestAnimationFrame(render);
        return () => {
            window.removeEventListener('resize', resize);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        mousePosRef.current = { x: e.clientX, y: e.clientY };
        mouseMovedRef.current = true; // SET flag only on actual move
    }, []);

    useEffect(() => {
        const cleanup = initializeTrail();
        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            cleanup();
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [initializeTrail, handleMouseMove]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-20 pointer-events-none select-none"
            style={{
                mixBlendMode: 'screen',
                filter: 'brightness(1.3) contrast(1.2) saturate(1.4)'
            }}
        />
    );
};

export default CursorTrail;
