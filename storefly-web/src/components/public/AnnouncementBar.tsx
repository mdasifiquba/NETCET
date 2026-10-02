'use client';

import React, { useEffect, useState } from 'react';
import { Announcement } from '@/types';
import { publicApi } from '@/lib/api';
import { Megaphone, X, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const AnnouncementBar: React.FC = () => {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    publicApi.getAnnouncements()
      .then((res) => {
        if (res.success && res.data && res.data.length > 0) {
          setAnnouncement(res.data[0]);
        }
      })
      .catch(() => {
        // Fallback default announcement
        setAnnouncement({
          id: 1,
          title: 'Special Offer',
          message: 'Get 20% OFF on all CCTV installations and laptop servicing this month in Jamui!',
          badge_text: 'SPECIAL OFFER',
          link_url: '/services',
          link_text: 'Book Now',
          type: 'info',
          status: 1
        });
      });
  }, []);

  if (!announcement || dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-red-950 via-red-900 to-slate-950 text-white text-xs sm:text-sm py-2.5 px-4 relative z-40 border-b border-red-500/30 shadow-lg shadow-red-950/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 overflow-hidden flex-1 justify-center sm:justify-start">
          {announcement.badge_text && (
            <span className="bg-gradient-to-r from-red-600 to-rose-600 text-white uppercase text-[10px] font-black px-2.5 py-0.5 rounded-full tracking-wider shrink-0 border border-red-400/40 shadow-sm flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-amber-300" />
              {announcement.badge_text}
            </span>
          )}
          <span className="truncate font-semibold text-slate-200">
            {announcement.message}
          </span>
          {announcement.link_url && (
            <Link 
              href={announcement.link_url} 
              className="inline-flex items-center gap-1 font-bold text-red-300 underline underline-offset-2 hover:text-white shrink-0 ml-1 transition-colors"
            >
              {announcement.link_text || 'Learn more'}
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 hover:bg-white/10 rounded-lg transition-colors shrink-0 text-white/60 hover:text-white"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
