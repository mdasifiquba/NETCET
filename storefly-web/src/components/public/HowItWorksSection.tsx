'use client';

import React, { useEffect, useState } from 'react';
import { HowItWorks } from '@/types';
import { publicApi } from '@/lib/api';
import { DynamicIcon } from '@/components/ui/IconHelper';
import { ArrowRight, Workflow, CheckCircle } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';

export const HowItWorksSection: React.FC = () => {
  const [steps, setSteps] = useState<HowItWorks[]>([]);

  useEffect(() => {
    publicApi.getHowItWorks()
      .then((res) => {
        if (res.success && res.data) setSteps(res.data);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden section-glow-top">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Header with 3D flip-in */}
        <ScrollReveal animation="reveal-3d" className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Workflow className="w-4 h-4 text-red-400" />
            <span>Seamless 3-Step Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            How{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-amber-300">
              NETCET
            </span>{' '}
            Works
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Getting your computer repaired or CCTV installed in Jamui has never been easier or faster.
          </p>
        </ScrollReveal>

        {/* 3D Stepped Pipeline with stagger */}
        <StaggerReveal
          animation="reveal-3d"
          staggerMs={180}
          className="grid md:grid-cols-3 gap-8 relative perspective-1000"
        >
          {steps.map((step, idx) => (
            <div
              key={step.id || idx}
              className="relative group rounded-3xl p-8 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-red-500/50 shadow-xl hover:shadow-2xl hover:shadow-red-600/25 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 card-3d flex flex-col justify-between overflow-hidden hover-tilt"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent group-hover:via-red-400 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white border border-red-400/40 flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
                    <DynamicIcon name={step.icon || 'wrench'} className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-black text-slate-800 group-hover:text-red-500/40 transition-colors font-mono tracking-tighter">
                    0{step.step_number || idx + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-red-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{step.description}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-red-300 transition-colors">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>Step 0{step.step_number || idx + 1} of 03</span>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950 border border-red-500/50 text-red-400 items-center justify-center shadow-lg shadow-red-600/30 neon-border">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};
