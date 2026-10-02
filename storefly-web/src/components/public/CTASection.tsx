'use client';

import React from 'react';
import { Phone, Calendar, ArrowRight, Zap } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface CTASectionProps {
  onOpenBooking?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden section-glow-top">
      {/* Moving cyber grid */}
      <div className="absolute inset-0 bg-grid-moving pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-red-600/15 via-rose-600/20 to-red-600/15 rounded-full blur-[180px] pointer-events-none animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <ScrollReveal animation="reveal-3d">
          <div className="bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-900/90 border border-red-500/40 rounded-3xl p-8 sm:p-14 lg:p-20 text-center space-y-8 backdrop-blur-2xl shadow-2xl shadow-red-950/60 relative overflow-hidden card-3d scanline-fx">

            {/* Top neon beam */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

            {/* Floating particles */}
            <div className="absolute top-4 left-10 w-1.5 h-1.5 rounded-full bg-red-500/60 animate-float" />
            <div className="absolute top-8 right-20 w-1 h-1 rounded-full bg-rose-400/60 animate-float-delayed" />
            <div className="absolute bottom-10 left-1/4 w-1 h-1 rounded-full bg-amber-400/50 animate-float" />
            <div className="absolute bottom-6 right-1/3 w-1.5 h-1.5 rounded-full bg-red-400/50 animate-float-delayed" />

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-500/40 text-red-300 text-xs sm:text-sm font-black uppercase tracking-widest shadow-lg shadow-red-500/20 backdrop-blur-md neon-border">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Fast Emergency Support Across Jamui</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight text-white text-glow-white">
              Ready To Upgrade Your IT Systems Or Secure Your Premises?
            </h2>

            <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Book an expert NETCET engineer visit today or call us for instant consultation, transparent quotation, and reliable doorstep service.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
              <button
                onClick={onOpenBooking}
                className="btn-shine w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:via-rose-500 hover:to-red-500 text-white font-black rounded-2xl shadow-2xl shadow-red-600/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg border border-red-400/40 group glow-red"
              >
                <Calendar className="w-5 h-5 text-amber-300" />
                <span>Book A Service Visit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+918210101223"
                className="btn-shine w-full sm:w-auto px-9 py-4 bg-slate-900/90 hover:bg-slate-800 text-white font-black rounded-2xl border border-slate-700/80 hover:border-red-500/50 transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg shadow-xl hover:shadow-red-600/20 hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5 text-red-400" />
                <span>Call: +91 821 010 1223</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
