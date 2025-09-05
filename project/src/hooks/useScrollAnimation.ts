import { useEffect, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Always update visibility based on intersection
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.2,
        rootMargin: options.rootMargin || '-50px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [element, options.threshold, options.rootMargin]);

  return { isVisible, setElement };
};