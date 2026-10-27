import React from 'react';
import { WhatsAppSimulator } from './WhatsAppSimulator';
import { ArrowRight, Calculator, MessageSquare, Check, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenContact }) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#09090b]">
      {/* Subtle Background Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-4">
              <span>TWIN ATHENA</span>
              <span aria-hidden="true">·</span>
              <span>Websites & WhatsApp Automation Studio</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-[1.1] mb-6 text-balance">
              Turn Casual Visitors Into Paying Customers on Autopilot.
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8">
              I build bespoke, lightning-fast websites and custom WhatsApp conversational sales engines for small businesses. Capture inquiries 24/7, book appointments automatically, and close sales without losing leads to slow replies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#simulator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-sm hover:shadow-emerald-500/20 hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Test Interactive Chat Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-800 dark:text-neutral-100 bg-white dark:bg-neutral-800/80 hover:bg-neutral-100 dark:hover:bg-neutral-700/80 border border-neutral-200 dark:border-neutral-700 rounded-xl transition-all"
              >
                <Calculator className="w-4 h-4 text-emerald-500" />
                <span>Calculate Your Project Quote</span>
              </button>
            </div>

            {/* Small Business Trust Markers */}
            <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Meta Official API Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Code & Data Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>7–14 Day Turnaround Sprint</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Phone Simulator */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div id="simulator" className="w-full scroll-mt-24">
              <WhatsAppSimulator onSelectBuildBot={onOpenQuote} />
            </div>
          </div>
        </div>

        {/* 4-Column Proof Metric Strip below the Split */}
        <div className="mt-16 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tabular-nums tracking-tight">
                +185%
              </div>
              <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Average Inbound Booking Surge
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tabular-nums tracking-tight">
                &lt; 20s
              </div>
              <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Instant Chat Response Time
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tabular-nums tracking-tight">
                24/7
              </div>
              <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Automated Lead Capture & Triage
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tabular-nums tracking-tight">
                100%
              </div>
              <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Transparent Fixed-Price Deliveries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
