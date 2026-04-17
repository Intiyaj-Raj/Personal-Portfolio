import { useEffect, useCallback } from 'react';

interface FireBurstClickProps {
    className?: string;
}

const FireBurstClick: React.FC<FireBurstClickProps> = ({ className = '' }) => {
    const createFireBurst = useCallback((x: number, y: number) => {
        const burst = document.createElement('div');
        burst.className = 'fire-burst fixed pointer-events-none z-[9999]';
        burst.style.left = `${x - 30}px`;
        burst.style.top = `${y - 30}px`;

        // Center fire
        // const centerFire = document.createElement('div');
        // centerFire.className = 'fire-center absolute top-1/2 left-1/2 w-[20px] h-[20px] bg-gradient-radial from-yellow-400 via-orange-500 to-red-500 rounded-full -translate-x-1/2 -translate-y-1/2 animate-fire-center shadow-[0_0_20px_#ff6600,0_0_40px_#ff4400,0_0_60px_#ff0000]';
        // burst.appendChild(centerFire);

        // Particles
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'fire-particle absolute w-[8px] h-[8px] bg-gradient-radial from-red-400 via-orange-500 to-red-600 animate-fire-particle shadow-[0_0_10px_#ff6600,0_0_20px_#ff4400]';
            particle.style.left = '50%';
            particle.style.top = '50%';
            const angle = (i * 30) * Math.PI / 180;
            const distance = 25 + Math.random() * 15;
            particle.style.transform = `translate(-50%, -50%) rotate(${angle * 180 / Math.PI}deg) translateX(${distance}px)`;
            particle.style.animationDelay = `${i * 0.03}s`;
            burst.appendChild(particle);
        }

        document.body.appendChild(burst);

        // Screen shake
        document.body.classList.add('animate-screen-shake');
        setTimeout(() => document.body.classList.remove('animate-screen-shake'), 300);

        setTimeout(() => burst.remove(), 1200);
    }, []);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            createFireBurst(e.clientX, e.clientY);
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [createFireBurst]);

    return <div className={className} />;
};

export default FireBurstClick;

