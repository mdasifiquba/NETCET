'use client';

import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';
import { DynamicIcon } from '@/components/ui/IconHelper';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onBook?: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBook }) => {
  return (
    <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between card-3d group overflow-hidden shadow-xl shadow-black/60 hover:border-red-500/50">
      {/* 3D Top Ambient Glow on Hover */}
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-red-600/15 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Header with 3D Icon & Category Pill */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-600 text-white flex items-center justify-center p-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-red-600/30 border border-red-400/30">
            <DynamicIcon name={service.icon || 'wrench'} className="w-6 h-6" />
          </div>
          {service.category_name && (
            <span className="text-[10px] font-black text-red-400 bg-red-500/10 px-3 py-1.5 rounded-full uppercase tracking-wider border border-red-500/25 shadow-sm">
              {service.category_name}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-white group-hover:text-red-400 transition-colors mb-1.5 tracking-tight">
          {service.name}
        </h3>

        {/* Price Tag with 3D Pill */}
        <div className="inline-flex items-center gap-1.5 text-base font-black text-red-400 mb-3 bg-red-950/40 px-3 py-1 rounded-xl border border-red-500/20">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{service.price ? (service.price.startsWith('₹') || service.price.startsWith('Rs') ? service.price : `₹${service.price.replace(/[^0-9,]/g, '')}`) : 'Price on request'}</span>
        </div>

        {/* Short description */}
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6 font-normal">
          {service.short_description || 'Professional and reliable IT & security support services in Jamui.'}
        </p>
      </div>

      {/* Bottom Bar with Status & Actions */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] text-slate-300 font-semibold">Live in Jamui</span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/services/${service.slug}`}
            className="px-3.5 py-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold rounded-xl transition-all border border-slate-700/80 flex items-center gap-1 hover:border-slate-500 active:scale-95"
          >
            <span>Details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            onClick={() => onBook && onBook(service)}
            className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-black rounded-xl shadow-md shadow-red-600/30 hover:shadow-lg hover:shadow-red-600/40 transition-all flex items-center gap-1.5 active:scale-95 border border-red-400/20"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>
        </div>
      </div>
    </div>
  );
};
