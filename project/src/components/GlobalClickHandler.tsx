import React, { useEffect } from 'react';
import { useClickPopup } from '../hooks/useClickPopup';

interface GlobalClickHandlerProps {
    onShake: () => void;
}

const GlobalClickHandler: React.FC<GlobalClickHandlerProps> = ({ onShake }) => {
    const { createPopup } = useClickPopup();

    useEffect(() => {
        const handleGlobalClick = (e: MouseEvent) => {
            console.log('Global click detected', e.target);
            const target = e.target as HTMLElement;
            if (target.closest('button, a, [role="button"], nav, header, footer, input, textarea, select, .btn-glitch, svg, path')) {
                console.log('Skipped interactive element', target.tagName);
                return;
            }

            console.log('Creating popup');
            const rect = document.body.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            createPopup(x, y);
            onShake();
        };

        document.addEventListener('click', handleGlobalClick);
        return () => {
            document.removeEventListener('click', handleGlobalClick);
        };
    }, [createPopup, onShake]);

    return null;
};

export default GlobalClickHandler;
