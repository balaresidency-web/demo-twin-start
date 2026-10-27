import React from 'react';
import { ArrowUpRight, Code, MessageCircle, HeartHandshake, Shield } from 'lucide-react';

interface AboutFounderProps {
  onOpenContact: () => void;
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0c0c0e] border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-4/5 sm:aspect-square lg:aspect-4/5 bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl">
              <img
                src="/src/assets/images/founder_twin_athena_1793118295967.jpg"
                alt="TWIN ATHENA Lead Engineer & Consultant"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-white font-bold text-lg">Athena Chen</span>
                <span className="text-emerald-400 text-xs font-mono">
                  Principal Engineer & Automation Architect
                </span>
              </div>
            </div>
          </div>

          {/* Bio & Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
              The Studio Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Bridging Bespoke Web Aesthetics with Direct Revenue Automation.
            </h2>

            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              I created <strong>TWIN ATHENA</strong> with a single mission: to free small business owners from losing valuable leads to slow response times and outdated websites. Most web agencies hand over a static brochure site and disappear.
            </p>

            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              I engineer complete, closed-loop growth engines. Your website showcases your craft with world-class design, while custom WhatsApp automations handle client intake, reservations, and follow-ups within seconds — without adding headcount.
            </p>

            {/* 3 Core Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                  <Code className="w-4 h-4 text-emerald-500" />
                  <span>Zero Templates</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Every site is custom-coded for sub-second speed.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span>Meta Official</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Built on official Cloud APIs with zero ban risks.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4 text-emerald-500" />
                  <span>Direct Partner</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  You work directly with the engineer, not account reps.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 group"
              >
                <span>Schedule a 15-Minute Strategy Call</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
