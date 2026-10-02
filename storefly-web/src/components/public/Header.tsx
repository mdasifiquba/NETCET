'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Calendar,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { publicApi } from '@/lib/api';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settings, setSettings] = useState<Record<string, string>>({
    site_name: 'NETCET',
    site_tagline: 'NETCET COMPUTERS - CCTV IT AND COMPUTER',
    contact_phone: '+91 821 010 1223',
    contact_email: 'info@netcet.in',
    contact_address: 'Near Luv Kush Gas Agency, Jamui Khaira Kawakol Rd, Jamui, Bihar - 811307',
    working_hours: 'Mon - Sat: 9:00 AM - 8:00 PM'
  });

  useEffect(() => {
    publicApi.getSettings()
      .then((res) => {
        if (res.success && res.data) {
          setSettings(prev => ({ ...prev, ...res.data }));
        }
      })
      .catch(() => {});
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Coming Soon', href: '/coming-soon' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl transition-all">
      {/* Top info bar */}
      <div className="hidden lg:block bg-slate-900/90 text-slate-300 text-xs py-2 px-6 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href="https://www.google.com/maps/place/NETCET+COMPUTERS+-+CCTV+IT+AND+COMPUTER,+luv+kush+gas+agency,+near,+Jamui+Khaira+Kawakol+Rd,+Jamui,+Bihar+811307/data=!4m2!3m1!1s0x899dbc934d196d2d:0x9ff4ff75a4af9869!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjM3LjUYACDXggMqnwEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTU2MjUsOTQyODA1NzYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksMTAwODM1NzA0LDEwMDgyNTAyMSwxMDA4MjI0OTRCAklO&skid=b32864e2-db1e-43b0-8981-ae44038f98c1&g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>{settings.contact_address || 'Near Luv Kush Gas Agency, Jamui Khaira Kawakol Rd, Jamui, Bihar - 811307'}</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-red-500" />
              <span>{settings.working_hours || 'Mon - Sat: 9:00 AM - 8:00 PM'}</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${settings.contact_phone || '+918210101223'}`} 
              className="flex items-center gap-1.5 text-slate-200 hover:text-red-400 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{settings.contact_phone || '+91 821 010 1223'}</span>
            </a>
            <a 
              href={`mailto:${settings.contact_email || 'info@netcet.in'}`} 
              className="flex items-center gap-1.5 text-slate-200 hover:text-red-400 font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-red-500" />
              <span>{settings.contact_email || 'info@netcet.in'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 3D Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center shadow-xl shadow-red-600/10 group-hover:scale-105 group-hover:border-red-500/60 transition-all duration-300 border border-slate-800 p-1">
              <Image 
                src="/netcet-logo.png" 
                alt="NETCET Logo" 
                width={48} 
                height={48} 
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-red-400 transition-colors">
                  NET<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">CET</span>
                </span>
              </div>
              <span className="text-[9px] uppercase font-black tracking-wider text-slate-400 block -mt-1 truncate max-w-[210px] sm:max-w-none">
                CCTV &amp; COMPUTER • JAMUI
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-red-600/20 border border-red-500/40 font-bold shadow-lg shadow-red-600/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${settings.contact_phone}`}
              className="px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl transition-all flex items-center gap-2 border border-slate-800"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call Us</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-red-400/30"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Service</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="p-2 bg-red-600/20 border border-red-500/40 text-red-400 rounded-xl font-bold text-xs flex items-center gap-1 shadow-md shadow-red-600/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl transition-colors border border-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                    isActive
                      ? 'bg-red-600/20 border border-red-500/40 text-white font-bold'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 border border-red-400/30"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Service Now</span>
            </button>
            <a
              href={`tel:${settings.contact_phone}`}
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-850 text-slate-200 font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors border border-slate-800"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call: {settings.contact_phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
