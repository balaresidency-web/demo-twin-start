import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

interface CaseStudiesProps {
  onOpenQuote: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenQuote }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="py-20 lg:py-28 bg-neutral-50/60 dark:bg-[#09090b] border-b border-neutral-200/80 dark:border-neutral-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-2">
            Selected Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4">
            Real Small Business Clients. Measurable Revenue Growth.
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Every build is engineered to solve a concrete business bottleneck: stopping lost phone orders, automating patient intake, or turning catalog views into instant sales.
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedCaseStudy(project)}
              className="group cursor-pointer rounded-2xl bg-white dark:bg-[#121215] border border-neutral-200/80 dark:border-neutral-800 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700"
            >
              <div>
                {/* Media Container */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle Media Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top-Right Open Indicator */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-sm text-neutral-900 dark:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Unboxed Metadata Line with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2.5">
                    <span>{project.industry}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.timeline}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Primary Highlight Metric Box */}
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 mb-6">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                        {project.metrics[0].label}
                      </span>
                      <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums">
                        {project.metrics[0].value}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                      {project.metrics[0].changeText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="font-semibold text-neutral-900 dark:text-white group-hover:underline">
                  Inspect Architecture & Case
                </span>
                <span className="text-neutral-400 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Lightbox Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
};
