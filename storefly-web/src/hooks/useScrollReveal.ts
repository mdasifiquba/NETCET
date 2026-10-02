'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -60px 0px', once = true } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const setRef = useCallback((node: HTMLElement | null) => {
    ref.current = node;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref: setRef, isVisible };
}

/**
 * Hook to observe multiple children and reveal them with staggered delay.
 * Returns a ref to attach to the container.
 */
export function useStaggerReveal(childClass = 'stagger-child', delay = 120) {
  const containerRef = useRef<HTMLElement | null>(null);

  const setRef = useCallback((node: HTMLElement | null) => {
    containerRef.current = node;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.querySelectorAll(`.${childClass}`)) as HTMLElement[];

    // Initially hide children
    children.forEach((child) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(40px)';
      child.style.transition = 'none';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => {
              child.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
              child.style.opacity = '1';
              child.style.transform = 'translateY(0px)';
            }, i * delay);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [childClass, delay]);

  return { containerRef: setRef };
}
