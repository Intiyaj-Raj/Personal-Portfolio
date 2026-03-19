import React, { useRef, useEffect, useCallback } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    size: number;
}

const CursorTrail: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>(0);
    const timeoutRef = useRef<number | null>(null);

    const spawnParticles = () => {
        const count = 4;

        for (let i = 0; i < count; i++) {
            particlesRef.current.push({
                x: mouseRef.current.x,
                y: mouseRef.current.y,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                life: 1,
                size: 2 + Math.random() * 3
            });
        }
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
        spawnParticles();

        // clear previous timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // stop effect when mouse stops
        timeoutRef.current = window.setTimeout(() => {
            particlesRef.current = [];
        }, 50);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);
        document.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;

                p.vx *= 0.98;
                p.vy *= 0.98;

                p.life -= 0.02;

                if (p.life <= 0) {
                    particlesRef.current.splice(index, 1);
                    return;
                }

                ctx.beginPath();
                ctx.globalAlpha = p.life;
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

                const gradient = ctx.createRadialGradient(
                    p.x,
                    p.y,
                    0,
                    p.x,
                    p.y,
                    p.size * 4
                );

                gradient.addColorStop(0, "#00ffff");
                gradient.addColorStop(0.5, "#00FF00");
                gradient.addColorStop(1, "transparent");

                ctx.fillStyle = gradient;
                ctx.fill();
            });

            ctx.globalAlpha = 1;

            if (particlesRef.current.length > 120) {
                particlesRef.current = particlesRef.current.slice(-120);
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            document.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationRef.current);
        };
    }, [handleMouseMove]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-20"
            style={{
                mixBlendMode: "screen"
            }}
        />
    );
};

export default CursorTrail;