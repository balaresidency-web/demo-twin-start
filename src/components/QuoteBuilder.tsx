import React, { useState } from 'react';
import { SERVICE_PACKAGES, QUOTE_ADDONS } from '../data/portfolioData';
import { ServicePackage, QuoteAddon } from '../types';
import { 
  Check, 
  MessageSquare, 
  Calculator, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Zap
} from 'lucide-react';

interface QuoteBuilderProps {
  onSelectForContact: (packageTitle: string, totalEstimate: number, details: string) => void;
}

export const QuoteBuilder: React.FC<QuoteBuilderProps> = ({ onSelectForContact }) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('pkg-turnkey-suite');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['addon-stripe']);
  const [needsMaintenance, setNeedsMaintenance] = useState(false);

  const selectedPackage = SERVICE_PACKAGES.find((p) => p.id === selectedPackageId) || SERVICE_PACKAGES[0];

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  // Calculate total price and delivery days
  const addonsTotal = selectedAddonIds.reduce((sum, id) => {
    const addon = QUOTE_ADDONS.find((a) => a.id === id);
    return sum + (addon ? addon.priceUSD : 0);
  }, 0);

  const totalPrice = selectedPackage.priceUSD + addonsTotal + (needsMaintenance ? 190 : 0);

  const totalDays = Math.max(
    5,
    selectedPackage.turnaroundDays +
      selectedAddonIds.reduce((sum, id) => {
        const addon = QUOTE_ADDONS.find((a) => a.id === id);
        return sum + (addon ? addon.turnaroundDays : 0);
      }, 0)
  );

  // Generate WhatsApp Direct Pre-filled message
  const generateWhatsAppUrl = () => {
    const selectedAddonNames = selectedAddonIds
      .map((id) => QUOTE_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const messageText = `Hi TWIN ATHENA! I customized a project quote on your portfolio:
• Selected Package: ${selectedPackage.name} ($${selectedPackage.priceUSD})
• Optional Add-ons: ${selectedAddonNames || 'None'}
• Ongoing Flow Support: ${needsMaintenance ? 'Yes ($190/mo)' : 'No'}
• Total Estimate: ~$${totalPrice.toLocaleString()} USD (~${totalDays} business days)

I would love to discuss kickstarting this for my business!`;

    return `https://wa.me/?text=${encodeURIComponent(messageText)}`;
  };

  const handleUseInForm = () => {
    const selectedAddonNames = selectedAddonIds
      .map((id) => QUOTE_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const details = `Package: ${selectedPackage.name} ($${selectedPackage.priceUSD}) | Add-ons: ${selectedAddonNames || 'None'} | Maintenance: ${needsMaintenance ? 'Yes' : 'No'}`;
    onSelectForContact(selectedPackage.name, totalPrice, details);

    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white dark:bg-[#0c0c0e] border-b border-neutral-200/80 dark:border-neutral-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-2">
            Transparent Pricing & Scopes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4">
            No Ambiguous Rates. Instant Custom Estimates.
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Choose a turnkey base package or customize your exact scope. Receive transparent pricing, sprint delivery dates, and an instant direct WhatsApp bridge.
          </p>
        </div>

        {/* 3 Core Service Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SERVICE_PACKAGES.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackageId(pkg.id)}
                className={`cursor-pointer rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 relative ${
                  pkg.highlighted
                    ? 'bg-neutral-900 text-white dark:bg-[#18181b] border-2 border-emerald-500 shadow-xl'
                    : isSelected
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-2 border-emerald-500 dark:border-emerald-600'
                    : 'bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                    Most Popular & Complete
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${
                      pkg.highlighted ? 'text-emerald-400' : 'text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {pkg.name}
                    </span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.turnaroundDays} Days</span>
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : 'text-neutral-900 dark:text-white'}`}>
                    {pkg.tagline}
                  </h3>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl sm:text-4xl font-extrabold tabular-nums tracking-tight ${
                        pkg.highlighted ? 'text-white' : 'text-neutral-900 dark:text-white'
                      }`}>
                        ${pkg.priceUSD.toLocaleString()}
                      </span>
                      <span className={`text-xs ${pkg.highlighted ? 'text-neutral-400' : 'text-neutral-500 dark:text-neutral-400'}`}>
                        USD fixed
                      </span>
                    </div>
                  </div>

                  <p className={`text-xs leading-relaxed mb-6 ${
                    pkg.highlighted ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-300'
                  }`}>
                    {pkg.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {pkg.features.slice(0, 5).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={pkg.highlighted ? 'text-neutral-200' : 'text-neutral-700 dark:text-neutral-300'}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPackageId(pkg.id);
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all text-center ${
                    isSelected
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-xs'
                      : pkg.highlighted
                      ? 'bg-white text-neutral-950 hover:bg-neutral-100'
                      : 'bg-neutral-900 text-white dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-700'
                  }`}
                >
                  {isSelected ? '✓ Selected in Calculator' : 'Select Package'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Quote Calculator Panel */}
        <div className="rounded-3xl p-6 sm:p-10 bg-neutral-50 dark:bg-[#121215] border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Custom Project Estimator</span>
          </div>
          <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-8">
            Tailor Features & Add-ons to Your Exact Business Goals
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Addon Checkboxes */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                Available Modular Enhancements:
              </div>

              {QUOTE_ADDONS.map((addon) => {
                const isChecked = selectedAddonIds.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all flex items-start justify-between gap-4 ${
                      isChecked
                        ? 'bg-white dark:bg-neutral-900 border-emerald-500 shadow-xs'
                        : 'bg-white/60 dark:bg-neutral-900/40 border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center border transition-colors shrink-0 ${
                        isChecked
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'border-neutral-300 dark:border-neutral-600'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                          {addon.name}
                        </div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mt-0.5">
                          {addon.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-sm font-bold text-neutral-900 dark:text-white tabular-nums">
                        +${addon.priceUSD}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        {addon.turnaroundDays > 0 ? `+${addon.turnaroundDays}d` : `${addon.turnaroundDays}d`}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Maintenance Toggle */}
              <div
                onClick={() => setNeedsMaintenance(!needsMaintenance)}
                className={`cursor-pointer p-4 rounded-xl border transition-all flex items-center justify-between gap-4 ${
                  needsMaintenance
                    ? 'bg-white dark:bg-neutral-900 border-emerald-500 shadow-xs'
                    : 'bg-white/60 dark:bg-neutral-900/40 border-neutral-200/80 dark:border-neutral-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors shrink-0 ${
                    needsMaintenance
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-neutral-300 dark:border-neutral-600'
                  }`}>
                    {needsMaintenance && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                      Ongoing Monthly Bot Care & Optimization
                    </span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Flow tweaks, weekly Google Sheets sync audits, and priority SLA.
                    </p>
                  </div>
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-white tabular-nums shrink-0">
                  +$190/mo
                </div>
              </div>
            </div>

            {/* Right: Summary Box with Instant WhatsApp Dispatch */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900 text-white dark:bg-black border border-neutral-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                  Estimated Investment
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  Fixed Transparent Scope
                </span>
              </div>

              <div>
                <div className="text-xs text-neutral-400 mb-1">Base Package</div>
                <div className="text-base font-bold text-white flex justify-between">
                  <span>{selectedPackage.name}</span>
                  <span className="tabular-nums font-mono">${selectedPackage.priceUSD.toLocaleString()}</span>
                </div>
              </div>

              {selectedAddonIds.length > 0 && (
                <div className="space-y-1.5 text-xs text-neutral-300 border-t border-neutral-800/80 pt-3">
                  <div className="text-neutral-400 font-medium">Selected Enhancements ({selectedAddonIds.length}):</div>
                  {selectedAddonIds.map((id) => {
                    const addon = QUOTE_ADDONS.find((a) => a.id === id);
                    if (!addon) return null;
                    return (
                      <div key={id} className="flex justify-between text-neutral-300">
                        <span className="truncate pr-2">• {addon.name}</span>
                        <span className="font-mono tabular-nums shrink-0">+${addon.priceUSD}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {needsMaintenance && (
                <div className="flex justify-between text-xs text-emerald-400 border-t border-neutral-800/80 pt-2">
                  <span>• Ongoing Monthly Care</span>
                  <span className="font-mono tabular-nums">+$190/mo</span>
                </div>
              )}

              {/* Total Calculation Display */}
              <div className="pt-4 border-t border-neutral-800">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-sm font-semibold text-neutral-300">Total Project Estimate</span>
                  <span className="text-3xl font-extrabold text-white tabular-nums tracking-tight">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Estimated Sprint Delivery: ~{totalDays} business days</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Quote to TWIN ATHENA on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleUseInForm}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
                >
                  <span>Or Pre-Fill Email Contact Form Below</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[11px] text-neutral-500 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Zero obligations · 50% start deposit / 50% on verified launch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
