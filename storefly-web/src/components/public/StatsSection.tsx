'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Statistic } from '@/types';
import { publicApi } from '@/lib/api';
import { DynamicIcon } from '@/components/ui/IconHelper';

interface StatsSectionProps {
  initialData?: Statistic[];
}

export const StatsSection: React.FC<StatsSectionProps> = ({ initialData }) => {
  const [stats, setStats] = useState<Statistic[]>(initialData || []);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!initialData || initialData.length === 0) {
      publicApi.getStatistics()
        .then((res) => {
          if (res.success && res.data) setStats(res.data);
        })
        .catch(() => {});
    }
  }, [initialData]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!stats || stats.length === 0) return null;

  return (
    <section className="relative -mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        ref={containerRef}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {stats.map((item, idx) => (
          <div
            key={item.id || idx}
            className="relative bg-slate-900/90 rounded-3xl p-6 border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/60 flex flex-col items-center text-center card-3d group overflow-hidden"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
              transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 130}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 130}ms`,
            }}
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-red-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none animate-pulse-glow" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent group-hover:via-red-400 transition-all" />

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-red-600/20 to-rose-600/10 text-red-400 flex items-center justify-center mb-4 group-hover:from-red-600 group-hover:to-rose-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-red-950/40 border border-red-500/20 group-hover:scale-110">
              <DynamicIcon name={item.icon || 'award'} className="w-7 h-7" />
            </div>

            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight group-hover:text-red-400 group-hover:scale-105 transition-all duration-300 text-glow">
              {item.value}
            </div>

            <div className="text-xs sm:text-sm font-bold text-slate-400 mt-1.5 uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
