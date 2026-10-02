'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'reveal' | 'reveal-3d' | 'reveal-left' | 'reveal-right' | 'reveal-scale';
  delay?: number;
  threshold?: number;
  once?: boolean;
  as?: React.ElementType;
}

/**
 * Wraps children in a scroll-triggered reveal animation.
 * Uses CSS classes from globals.css for smooth hardware-accelerated transitions.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  animation = 'reveal',
  delay = 0,
  threshold = 0.12,
  once = true,
  as: Tag = 'div',
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.remove('visible');
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, once]);

  return (
    // @ts-ignore
    <Tag ref={ref} className={`${animation} ${className}`}>
      {children}
    </Tag>
  );
};

/**
 * Wraps a group of children and staggers their reveal animations.
 */
interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'reveal' | 'reveal-3d' | 'reveal-left' | 'reveal-right' | 'reveal-scale';
  staggerMs?: number;
  threshold?: number;
}

export const StaggerReveal: React.FC<StaggerRevealProps> = ({
  children,
  className = '',
  animation = 'reveal',
  staggerMs = 120,
  threshold = 0.1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    children.forEach((child) => {
      child.classList.add(animation);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, i * staggerMs);
          });
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [animation, staggerMs, threshold]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
