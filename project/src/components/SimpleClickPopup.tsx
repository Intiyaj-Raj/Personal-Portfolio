import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

let clickCount = 0;

const texts = ["INTIYAJ", "MR.ENGINEER"];

interface Popup {
    id: number;
    x: number;
    y: number;
    text: string;
}

const SimpleClickPopup: React.FC = () => {
    const [popups, setPopups] = useState<Popup[]>([]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (
                target.closest(
                    "button, a, nav, header, footer, input, textarea, svg, path"
                )
            )
                return;

            // Earthquake effect
            document.body.animate(
                [
                    { transform: "translate(0,0)" },
                    { transform: "translate(-10px,6px)" },
                    { transform: "translate(10px,-6px)" },
                    { transform: "translate(-8px,4px)" },
                    { transform: "translate(8px,-4px)" },
                    { transform: "translate(0,0)" },
                ],
                { duration: 400 }
            );

            clickCount += 1;
            const text = texts[(clickCount - 1) % texts.length];

            const popup: Popup = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
                text,
            };

            setPopups((prev) => [...prev, popup]);

            setTimeout(() => {
                setPopups((prev) => prev.filter((p) => p.id !== popup.id));
            }, 1500);
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <AnimatePresence>
            {popups.map((popup) => (
                <motion.div
                    key={popup.id}
                    className="fixed z-[999] pointer-events-none font-mono font-black uppercase text-green-400 select-none"
                    style={{
                        left: `${popup.x}px`,
                        top: `${popup.y}px`,
                        transform: "translate(-50%, -50%)",
                        perspective: "1200px",
                        fontSize: "clamp(1.4rem,4vw,2.4rem)",
                    }}

                    /* SHOW animation (same style as hide but reverse) */
                    initial={{
                        opacity: 0,
                        y: 250,
                        rotateX: -160,
                        rotateY: 70,
                        scale: 0.2,
                        z: 300,
                        filter: "blur(14px)",
                    }}

                    animate={{
                        opacity: 1,
                        y: -60,
                        rotateX: 0,
                        rotateY: 0,
                        scale: [0.2, 1.5, 1],
                        z: 0,
                        filter: "blur(0px)",
                    }}

                    /* HIDE animation */
                    exit={{
                        opacity: 0,
                        y: -350,
                        rotateX: 160,
                        rotateY: -70,
                        scale: 0.2,
                        z: 400,
                        filter: "blur(14px)",
                    }}

                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    <motion.span
                        animate={{
                            textShadow: [
                                "0 0 10px #00ff41,0 0 20px #00e5ff",
                                "0 0 20px #39ff14,0 0 40px #00e5ff",
                                "0 0 30px #00e5ff,0 0 60px #39ff14",
                            ],
                            rotateZ: [0, 3, -3, 0],
                        }}
                        transition={{
                            duration: 0.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {popup.text}
                    </motion.span>
                </motion.div>
            ))}
        </AnimatePresence>
    );
};

export default SimpleClickPopup;