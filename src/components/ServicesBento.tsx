import React, { useState } from 'react';
import { 
  Globe, 
  MessageSquareCode, 
  Database, 
  Sparkles, 
  Layers, 
  Zap, 
  ArrowRight, 
  Check, 
  Star 
} from 'lucide-react';

interface ServicesBentoProps {
  onOpenQuote: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'automation'>('all');

  return (
    <section id="services" className="py-20 lg:py-28 bg-white dark:bg-[#0c0c0e] border-b border-neutral-200/80 dark:border-neutral-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-2">
              Capabilities & Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Engineered for Small Businesses That Depend on Speed & Inbound Sales.
            </h2>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 shrink-0 self-start md:self-end">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'all'
                  ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              All Capabilities
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'web'
                  ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Websites
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'automation'
                  ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              WhatsApp Automation
            </button>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1: Custom Web Development (col-span-2) */}
          {(activeTab === 'all' || activeTab === 'web') && (
            <div className={`p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700 ${
              activeTab === 'web' ? 'md:col-span-3' : 'md:col-span-2'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center shadow-xs">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-neutral-400">01. Digital Flagship</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                  Bespoke, Ultra-Fast Brand Websites
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  Forget slow, bloated templates. I build clean, high-performance web applications with crisp editorial aesthetics, instant page transitions, and obsessive mobile optimization tailored to your industry.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Lighthouse 95+ Mobile Score</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Click-to-WhatsApp Smart Buttons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Built-in Local SEO & Structured Data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Zero Monthly CMS Bloatware</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  Typical turnaround: 7–10 days
                </span>
                <button
                  onClick={onOpenQuote}
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 flex items-center gap-1 group"
                >
                  <span>Explore package</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* Bento Card 2: 24/7 WhatsApp Conversational Engine */}
          {(activeTab === 'all' || activeTab === 'automation') && (
            <div className={`p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700 ${
              activeTab === 'automation' ? 'md:col-span-3' : 'md:col-span-1'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                    <MessageSquareCode className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-neutral-400">02. Lead Engine</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                  WhatsApp Sales & Triage Bots
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  Turn inbound chats into guaranteed sales. Interactive button menus, table reservations, appointment slots, and instant price calculators right inside WhatsApp.
                </p>

                <div className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Official Meta WhatsApp Cloud API</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Instant 3-second automatic response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Human staff takeover alert flag</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  Zero monthly Meta markups
                </span>
                <button
                  onClick={onOpenQuote}
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 flex items-center gap-1 group"
                >
                  <span>Explore package</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* Bento Card 3: CRM & Database Sync (col-span-1) */}
          <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                  <Database className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-neutral-400">03. Integration</span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                Live CRM & Google Sheets Sync
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                Every reservation, inquiry, or purchase logged in WhatsApp instantly populates your Google Sheet, Notion, or Airtable with customer name, phone, and request parameters.
              </p>
            </div>

            <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono pt-3 border-t border-neutral-200 dark:border-neutral-800">
              Webhooks · Google Calendar · Zapier / Make
            </div>
          </div>

          {/* Bento Card 4: Payments & Checkout Links (col-span-1) */}
          <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-neutral-400">04. Commerce</span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                1-Tap In-Chat Payment Links
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                Collect deposits, catering retainers, or booking payments right in the conversation via Stripe or PayPal without redirecting customers to clunky checkout pages.
              </p>
            </div>

            <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono pt-3 border-t border-neutral-200 dark:border-neutral-800">
              Stripe · Apple Pay · Credit Card · PayPal
            </div>
          </div>

          {/* Bento Card 5: Review Booster & Broadcast Followups (col-span-1) */}
          <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs">
                  <Star className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-neutral-400">05. Growth</span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                Automated Google Review Booster
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                Automatically send a polite, 1-tap Google Review link on WhatsApp 2 hours after a customer finishes an appointment or meal. Build local Google SEO dominance.
              </p>
            </div>

            <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono pt-3 border-t border-neutral-200 dark:border-neutral-800">
              +45% 5-Star Review Growth Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
