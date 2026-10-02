'use client';

import React, { useEffect, useState } from 'react';
import { Founder } from '@/types';
import { publicApi } from '@/lib/api';
import { Award, Quote, CheckCircle2, Shield, Sparkles, MapPin } from 'lucide-react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const FounderSection: React.FC = () => {
  const [founder, setFounder] = useState<Founder | null>(null);

  useEffect(() => {
    publicApi.getFounder()
      .then((res) => {
        if (res.success && res.data) setFounder(res.data);
      })
      .catch(() => {});
  }, []);

  if (!founder) return null;

  const skillsList = founder.skills
    ? founder.skills.split(',').map((s) => s.trim())
    : [
        'Chip-level Motherboard Repair',
        'Enterprise CCTV Deployment',
        'Biometric Attendance Systems',
        'Network Architecture & LAN',
        'Custom High-End PC Builds',
      ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden section-glow-top">
      {/* Animated cyber bg */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-25" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main 3D Card */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-slate-900/95 border border-slate-800/90 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-red-950/50 backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left: Founder Avatar — slides in from left */}
            <ScrollReveal animation="reveal-left" className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-tr from-red-600 via-rose-500 to-amber-400 p-[3px] shadow-2xl shadow-red-600/30 group-hover:shadow-red-600/50 transition-all duration-500 group-hover:scale-105 animate-neon-pulse">
                  <div className="w-full h-full rounded-[21px] bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col items-center justify-center text-white overflow-hidden relative border border-slate-800">
                    <div className="relative w-28 h-28 mb-2">
                      <Image
                        src="/netcet-logo.png"
                        alt="NETCET COMPUTERS"
                        fill
                        className="object-contain filter drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]"
                      />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-red-400 font-mono">
                      NETCET ENGINEER
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-rose-600 text-white px-5 py-2.5 rounded-2xl shadow-xl shadow-red-600/40 flex items-center gap-2 text-xs sm:text-sm font-black border border-white/30 whitespace-nowrap animate-bounce-gentle">
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>{founder.experience_years || '8+ Years Exp'} in Jamui</span>
                </div>
              </div>

              <div className="mt-10 space-y-1">
                <h3 className="text-3xl font-black text-white text-glow">{founder.name}</h3>
                <p className="text-sm font-bold text-red-400 uppercase tracking-wide">{founder.title}</p>
                <p className="text-xs text-slate-400 flex items-center justify-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>Jamui, Bihar - 811307</span>
                </p>
              </div>
            </ScrollReveal>

            {/* Right: Bio — slides in from right */}
            <ScrollReveal animation="reveal-right" delay={150} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest">
                <Shield className="w-4 h-4 text-red-400" />
                <span>Founder &amp; Chief Hardware Architect</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Dedicated to Bringing{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-amber-300">
                  World-Class IT &amp; Security
                </span>{' '}
                Expertise to Jamui
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{founder.bio}</p>

              {founder.quote && (
                <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-900/60 to-slate-900/60 border-l-4 border-red-500 border border-slate-800 italic text-slate-200 text-sm sm:text-base relative flex items-start gap-4 shadow-inner">
                  <Quote className="w-7 h-7 text-red-500 shrink-0 opacity-60 mt-1" />
                  <p className="leading-relaxed">&ldquo;{founder.quote}&rdquo;</p>
                </div>
              )}

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-red-400" />
                  <span>Core Expertise &amp; Certifications</span>
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {skillsList.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 text-slate-200 text-xs font-medium border border-slate-800 hover:border-red-500/40 hover:bg-slate-850 transition-all duration-300 reveal reveal-delay-1 cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
