import React, { useEffect } from 'react';
import { CaseStudy } from '../types';
import { X, Check, ArrowRight, TrendingUp, Calendar, Layers } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#121215] border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Header */}
        <div className="sticky top-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <span>{caseStudy.industry}</span>
            <span aria-hidden="true">·</span>
            <span>{caseStudy.timeline}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Visual Banner */}
        <div className="relative aspect-video sm:aspect-21/9 w-full bg-neutral-900 overflow-hidden">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {caseStudy.title}
            </h2>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800">
            {caseStudy.metrics.map((m, i) => (
              <div key={i} className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {m.label}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums">
                  {m.value}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  {m.changeText}
                </div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white uppercase tracking-wider text-xs">
                The Business Challenge
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white uppercase tracking-wider text-xs">
                The Engineered Solution
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Features Implemented */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
              Architecture & Features Delivered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300"
                >
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Unboxed Text */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            <span className="font-sans font-medium text-neutral-700 dark:text-neutral-300">Stack:</span>
            {caseStudy.techStack.map((tech, i) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {i < caseStudy.techStack.length - 1 && <span aria-hidden="true">/</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Client Testimonial Quote */}
          <blockquote className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-3">
            <p className="text-sm sm:text-base italic text-neutral-800 dark:text-neutral-200 leading-relaxed">
              &ldquo;{caseStudy.clientQuote.quote}&rdquo;
            </p>
            <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              — {caseStudy.clientQuote.author}, {caseStudy.clientQuote.role}
            </div>
          </blockquote>

          {/* Modal Action Footer */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Ready for similar business results?
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-xs"
            >
              <span>Build A Similar Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
