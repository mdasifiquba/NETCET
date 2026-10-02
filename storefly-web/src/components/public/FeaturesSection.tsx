'use client';

import React, { useEffect, useState } from 'react';
import { Feature } from '@/types';
import { publicApi } from '@/lib/api';
import { DynamicIcon } from '@/components/ui/IconHelper';
import { ShieldCheck, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';

export const FeaturesSection: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    publicApi.getFeatures()
      .then((res) => {
        if (res.success && res.data) setFeatures(res.data);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden section-glow-top">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 bg-grid-moving pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - slide up + 3D */}
        <ScrollReveal animation="reveal-3d" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 via-rose-500/10 to-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md neon-border">
            <Sparkles className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            <span>NETCET Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-amber-300">
              NETCET
            </span>{' '}
            In Jamui?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We deliver the highest standard of technical competence, genuine components, and transparent local support.
          </p>
        </ScrollReveal>

        {/* Staggered 3D Feature Cards */}
        <StaggerReveal
          animation="reveal-3d"
          staggerMs={130}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 perspective-1000"
        >
          {features.map((feature, idx) => (
            <div
              key={feature.id || idx}
              className="group relative rounded-3xl p-6 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-600/25 flex flex-col justify-between backdrop-blur-xl card-3d overflow-hidden hover-tilt"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent group-hover:via-red-400 transition-all" />

              <div>
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400 border border-red-400/30">
                    <DynamicIcon name={feature.icon || 'shield'} className="w-7 h-7" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center">
                    <Zap className="w-2.5 h-2.5 text-amber-400" />
                  </div>
                </div>

                {feature.badge && (
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider text-red-300 bg-red-950/80 border border-red-500/30 px-2.5 py-1 rounded-full mb-3">
                    {feature.badge}
                  </span>
                )}

                <h3 className="text-xl font-black text-white mb-2.5 group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-bold text-red-400">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>NETCET Verified</span>
                </div>
                <span className="text-slate-600 font-mono text-[11px]">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};
