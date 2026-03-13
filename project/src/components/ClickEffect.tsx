import React from 'react';
import { motion } from 'framer-motion';
import { useClickPopup } from '../hooks/useClickPopup';

const ClickEffect: React.FC = () => {
    const { popups } = useClickPopup();

    return (
        <>
            {popups.map((popup) => (
                <motion.div
                    key={popup.id}
                    className="popup-text absolute z-[70] pointer-events-none font-mono text-5xl font-black uppercase tracking-widest text-green-200 drop-shadow-[0_0_50px_#00ff41] select-none brightness-150 saturate-150 animate-pulse"
                    style={{
                        left: `${popup.x}px`,
                        top: `${popup.y}px`,
                        transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ scale: 0, opacity: 0, rotate: -360 }}
                    animate={{
                        scale: [2, 1.3, 1],
                        opacity: 1,
                        rotate: 0,
                    }}
                    exit={{
                        scale: 0,
                        opacity: 0,
                        rotate: 360,
                        y: -60,
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeOut',
                    }}
                >
                    {popup.text}
                </motion.div>
            ))}
        </>
    );
};

export default ClickEffect;
