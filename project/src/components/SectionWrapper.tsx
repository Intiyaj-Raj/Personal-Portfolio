import { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  animationDelay?: number;
  animationType?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = '',
  animationDelay = 0,
  animationType = 'fade'
}) => {
  const ref = useRef<HTMLElement>(null);

  // 👇 Mobile ke liye rootMargin ko 0px kar diya
  const { isVisible, setElement } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px'
  });

  useEffect(() => {
    if (ref.current) {
      setElement(ref.current);
    }
  }, [setElement]);

  const getAnimationVariants = (): Variants => {
    const easeCurve: [number, number, number, number] = [0.42, 0, 0.58, 1];

    switch (animationType) {
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 80, transition: { duration: 0.6, ease: easeCurve } },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: animationDelay, ease: easeCurve } }
        };
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: -80, transition: { duration: 0.6, ease: easeCurve } },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: animationDelay, ease: easeCurve } }
        };
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: 80, transition: { duration: 0.6, ease: easeCurve } },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: animationDelay, ease: easeCurve } }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.9, transition: { duration: 0.6, ease: easeCurve } },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: animationDelay, ease: easeCurve } }
        };
      default: // fade
        return {
          hidden: { opacity: 0, transition: { duration: 0.6, ease: easeCurve } },
          visible: { opacity: 1, transition: { duration: 0.8, delay: animationDelay, ease: easeCurve } }
        };
    }
  };

  const variants: Variants = getAnimationVariants();

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative ${className}`}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
