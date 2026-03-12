import React from 'react';
import { motion } from 'framer-motion';
import type { Popup } from '../hooks/useClickPopup';
import { useClickPopup } from '../hooks/useClickPopup';

interface ClickEffectProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ClickEffect: React.FC<ClickEffectProps> = ({ onClick }) => {
    const { popups, createPopup } = useClickPopup();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        createPopup(x, y);
        onClick(e);
    };

    return (
        <div
            onClick={handleClick}
            className="fixed inset-0 z-40 pointer-events-auto cursor-crosshair bg-transparent"
        >
            {popups.map((popup: Popup) => (
                <motion.div
                    key={popup.id}
                    className="popup-text absolute z-[60] font-mono text-4xl font-black uppercase tracking-widest text-green-300 drop-shadow-[0_0_40px_#00ff41] select-none brightness-200 animate-ping"
                    style={{
                        left: `${popup.x}px`,
                        top: `${popup.y}px`,
                        transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ scale: 0, opacity: 0, rotate: -180 }}
                    animate={{
                        scale: [1.5, 1.1, 1],
                        opacity: 1,
                        rotate: 0,
                    }}
                    exit={{
                        scale: 0,
                        opacity: 0,
                        rotate: 180,
                        y: -50,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                >
                    {popup.text}
                </motion.div>
            ))}
        </div>
    );
};

export default ClickEffect;
