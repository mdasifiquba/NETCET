'use client';

import React, { useEffect, useState } from 'react';
import { Testimonial } from '@/types';
import { publicApi } from '@/lib/api';
import { Star, MessageSquare, MapPin, Quote } from 'lucide-react';
import { ScrollReveal, StaggerReveal } from '@/components/ui/ScrollReveal';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    publicApi.getTestimonials()
      .then((res) => {
        if (res.success && res.data) setTestimonials(res.data);
      })
      .catch(() => {});
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden section-glow-top">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-25" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none animate-float-delayed" />
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-rose-600/8 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <ScrollReveal animation="reveal-3d" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <MessageSquare className="w-4 h-4 text-red-400" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            What Our Clients In Jamui Say
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real feedback from local businesses, schools, shops, and residents who trust NETCET.
          </p>
        </ScrollReveal>

        {/* Staggered testimonial cards */}
        <StaggerReveal
          animation="reveal-scale"
          staggerMs={100}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 perspective-1000"
        >
          {testimonials.map((t, idx) => (
            <div
              key={t.id || idx}
              className="group relative rounded-3xl p-6 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-600/20 backdrop-blur-xl card-3d flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent group-hover:via-red-400 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 transition-all duration-300 ${
                          i < (t.rating || 5)
                            ? 'fill-amber-400 text-amber-400 filter drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]'
                            : 'text-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-red-500/40 group-hover:text-red-400/70 transition-colors" />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                    {t.customer_name}
                  </h4>
                  {t.customer_role && <p className="text-xs text-slate-400">{t.customer_role}</p>}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-300 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                  <MapPin className="w-3 h-3 text-red-500" />
                  {t.location || 'Jamui'}
                </span>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};
