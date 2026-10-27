import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, Star, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-neutral-50/60 dark:bg-[#09090b] border-b border-neutral-200/80 dark:border-neutral-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-2">
            Client Proof & Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4">
            Trusted by Boutique Founders & Local Operators.
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Here is how custom websites and automated WhatsApp conversational funnels transformed daily operations and revenue for small businesses.
          </p>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-white dark:bg-[#121215] border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between transition-all hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md"
            >
              <div>
                {/* Highlight Metric Strip */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100 dark:border-neutral-800/80">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 font-mono tabular-nums">
                    {t.highlightMetric}
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-neutral-900 dark:text-white flex items-center gap-1.5">
                      <span>{t.author}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 inline" />
                    </div>
                    {/* Unboxed Metadata Line with typographic separators */}
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      <span>{t.role}</span>
                      <span aria-hidden="true"> · </span>
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">{t.company}</span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-2 font-mono">
                  Result: {t.verifiedOutcome}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
