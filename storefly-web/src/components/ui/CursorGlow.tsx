'use client';

import { useEffect, useRef } from 'react';

/**
 * Renders a subtle glowing orb that follows the mouse cursor.
 * Creates a sense of 3D depth and ambient lighting.
 */
export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let animFrame: number;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(() => {
        if (glow) {
          glow.style.left = `${e.clientX}px`;
          glow.style.top = `${e.clientY}px`;
        }
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow opacity-0 transition-opacity duration-300"
      style={{ pointerEvents: 'none', zIndex: 0 }}
      onMouseEnter={(e) => {
        (e.target as HTMLDivElement).style.opacity = '1';
      }}
    />
  );
};

import React from 'react';
