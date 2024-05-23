'use client'
import { useEffect, useRef, useState } from 'react';

type FadeInSectionProps = {
  children: React.ReactNode;
  animation?: 'fade-in-top' | 'fade-in-left';
};

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, animation = 'fade-in-top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cb = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(cb);
    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  const animationClass = animation === 'fade-in-left' ? 'appearLeft' : 'appear';

  return (
    <div ref={domRef} className={`${animationClass} ${isVisible ? 'inview' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
