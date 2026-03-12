import { useState, useCallback } from 'react';

export interface Popup {
    id: number;
    x: number;
    y: number;
    text: string;
}

interface UseClickPopupReturn {
    popups: Popup[];
    createPopup: (x: number, y: number) => void;
}

export const useClickPopup = (): UseClickPopupReturn => {
    const [popups, setPopups] = useState<Popup[]>([]);
    const [clickCount, setClickCount] = useState(0);

    const texts = ['INTIYAJ', 'DEBUGGING', 'MR.ENGINEER'];

    const createPopup = useCallback((x: number, y: number) => {
        const newClickCount = clickCount + 1;
        const textIndex = (clickCount % texts.length);
        const text = texts[textIndex];
        const popup: Popup = {
            id: Date.now() + Math.random(),
            x,
            y,
            text,
        };

        setPopups((prev) => [...prev, popup]);
        setClickCount(newClickCount);

        setTimeout(() => {
            setPopups((prev) => prev.filter((p) => p.id !== popup.id));
        }, 2000);
    }, [clickCount]);

    return { popups, createPopup };
};
