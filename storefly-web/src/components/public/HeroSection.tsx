'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeroData } from '@/types';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Camera, 
  Laptop, 
  Sparkles,
  PhoneCall,
  Zap,
  Activity,
  Award,
  Cpu
} from 'lucide-react';

interface HeroSectionProps {
  heroData?: HeroData | null;
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ heroData, onOpenBooking }) => {
  const title = heroData?.title || 'Professional IT, Computer & CCTV Security Solutions';
  const subtitle = heroData?.subtitle || 'From chip-level laptop repairs and high-performance PC builds to 4K Ultra-HD CCTV installations and biometric security systems. NETCET delivers reliable, affordable, and expert technology services across Jamui.';
  const buttonText = heroData?.button_text || 'Book a Service';

  return (
    <section className="relative overflow-hidden bg-[#070a12] text-white pt-12 pb-24 lg:pt-20 lg:pb-32 bg-grid-cyber">
      {/* 3D Radiant Ambient Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left relative z-10">
            {/* 3D Glass Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/15 via-rose-500/10 to-transparent border border-red-500/30 text-red-400 text-xs sm:text-sm font-bold backdrop-blur-xl shadow-lg shadow-red-950/40">
              <Sparkles className="w-4 h-4 text-red-400 animate-pulse" />
              <span>Jamui&apos;s #1 Certified IT, Computer &amp; CCTV Center</span>
            </div>

            {/* Main 3D Bold Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
              Empowering Jamui With <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                Next-Gen IT &amp; Security
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>

            {/* 3D Assurance Floating Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-200 font-semibold justify-center lg:justify-start">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md shadow-md">
                <div className="p-1 rounded-lg bg-red-500/20 text-red-400">
                  <Zap className="w-4 h-4" />
                </div>
                <span>Doorstep Visit in 60 Mins</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md shadow-md">
                <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>100% Genuine Parts</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md shadow-md">
                <div className="p-1 rounded-lg bg-blue-500/20 text-blue-400">
                  <Award className="w-4 h-4" />
                </div>
                <span>Certified Engineers</span>
              </div>
            </div>

            {/* 3D Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 via-rose-600 to-red-500 hover:from-red-500 hover:to-rose-500 text-white font-black rounded-2xl shadow-xl shadow-red-600/35 hover:shadow-2xl hover:shadow-red-500/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 text-base border border-red-400/30"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-bold rounded-2xl border border-slate-700/80 backdrop-blur-xl transition-all duration-300 flex items-center justify-center gap-2 text-base hover:border-slate-500 hover:-translate-y-1 shadow-lg shadow-black/40"
              >
                <span>Explore 15+ Services</span>
              </Link>
            </div>
          </div>

          {/* Right Visual 3D Showcase Card */}
          <div className="lg:col-span-5 relative perspective-1000 mt-6 lg:mt-0">
            {/* Floating Top 3D Metric Badge */}
            <div className="hidden sm:flex absolute -top-8 -left-6 z-20 items-center gap-3 bg-slate-900/95 border border-red-500/40 px-4 py-2.5 rounded-2xl shadow-2xl shadow-red-950/50 backdrop-blur-xl animate-float">
              <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/40">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Fast Turnaround</p>
                <p className="text-xs font-black text-white">99.8% Issue Resolution</p>
              </div>
            </div>

            {/* Floating Bottom 3D Metric Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 z-20 items-center gap-3 bg-slate-900/95 border border-blue-500/40 px-4 py-2.5 rounded-2xl shadow-2xl shadow-blue-950/50 backdrop-blur-xl animate-float-delayed">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/40">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Chip Level Lab</p>
                <p className="text-xs font-black text-white">Advanced Diagnostics</p>
              </div>
            </div>

            {/* Main 3D Card Container with isometric rotation */}
            <div className="relative transform lg:rotate-y-[-8deg] lg:rotate-x-[4deg] transition-all duration-500 hover:rotate-y-0 hover:rotate-x-0 group">
              {/* Glowing Outline */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-red-600 via-rose-500 to-blue-600 rounded-[28px] blur-xl opacity-40 group-hover:opacity-75 transition duration-500" />
              
              {/* Glass Card */}
              <div className="relative bg-slate-900/90 border border-white/15 rounded-[26px] p-6 sm:p-7 backdrop-blur-2xl shadow-2xl shadow-black/80 space-y-5">
                
                {/* Card Top Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-black border border-slate-700 shadow-md">
                      <Image src="/netcet-logo.png" alt="NETCET Logo" width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-white tracking-tight">NETCET Services</h3>
                      <p className="text-[11px] text-slate-400">Near Luv Kush Gas Agency, Jamui</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold rounded-full flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Open Now
                  </span>
                </div>

                {/* 3D Service Cards */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-800/80 to-slate-900/90 border border-slate-700/60 flex items-center gap-3.5 hover:border-red-500/50 hover:bg-slate-800 transition-all duration-300 hover:translate-x-1 cursor-pointer">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-red-600 to-rose-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-600/30">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white text-sm truncate">Laptop &amp; PC Repairs</h4>
                        <span className="text-xs font-black text-red-400 shrink-0 ml-2">From ₹299</span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">Motherboard chip repair, display, hinge &amp; SSD</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-800/80 to-slate-900/90 border border-slate-700/60 flex items-center gap-3.5 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 hover:translate-x-1 cursor-pointer">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/30">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white text-sm truncate">CCTV &amp; Surveillance</h4>
                        <span className="text-xs font-black text-blue-400 shrink-0 ml-2">From ₹1,500</span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">Night Vision, 4K IP camera &amp; mobile live view</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-800/80 to-slate-900/90 border border-slate-700/60 flex items-center gap-3.5 hover:border-rose-500/50 hover:bg-slate-800 transition-all duration-300 hover:translate-x-1 cursor-pointer">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-rose-600/30">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white text-sm truncate">Biometrics &amp; PA Sound</h4>
                        <span className="text-xs font-black text-rose-400 shrink-0 ml-2">From ₹2,000</span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">Fingerprint &amp; face attendance machine setup</p>
                    </div>
                  </div>
                </div>

                {/* 3D Hotline Banner */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-red-950/70 via-slate-900/80 to-slate-900 border border-red-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-red-600 text-white shadow-md shadow-red-600/40 animate-pulse">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Immediate Assistance</p>
                      <p className="text-xs font-black text-white">+91 821 010 1223</p>
                    </div>
                  </div>
                  <a
                    href="tel:+918210101223"
                    className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-md shadow-red-600/30 transition-all active:scale-95"
                  >
                    Call Now
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

