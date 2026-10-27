import React from 'react';
import { ArrowUpRight, MessageSquare, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <a href="#" className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-white text-neutral-950 flex items-center justify-center font-bold text-sm">
                TA
              </span>
              <span>TWIN ATHENA</span>
            </a>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed">
              Bespoke websites and intelligent WhatsApp sales funnels crafted specifically for small businesses. Stop lost leads, boost repeat sales, and operate with modern digital speed.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Meta WhatsApp Cloud API Implementation</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services & Architecture</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Client Case Studies</a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-white transition-colors">Interactive WhatsApp Simulator</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Transparent Pricing & Calculator</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Verified Outcomes</a>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Have a custom project or need immediate advice on WhatsApp automation?
            </p>
            <a
              href="https://wa.me/?text=Hello%20TWIN%20ATHENA!%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Message on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} TWIN ATHENA Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Client Data Privacy</span>
            <span aria-hidden="true">·</span>
            <span>Meta API Terms</span>
            <span aria-hidden="true">·</span>
            <span>Fixed-Price Sprint SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
