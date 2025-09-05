import { useState, useEffect } from 'react';

interface UseTypingAnimationOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const useTypingAnimation = (options: UseTypingAnimationOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const {
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
  } = options;

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex(prev => (prev + 1) % texts.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};