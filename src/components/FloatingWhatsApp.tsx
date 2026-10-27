import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight, CheckCheck } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const directWhatsAppUrl = `https://wa.me/?text=${encodeURIComponent(
    'Hi TWIN ATHENA! I was exploring your portfolio and would love to ask a question about web & WhatsApp automation.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Mini Chat Drawer popup */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-[#1f2c34] text-white shadow-2xl border border-[#2a3942] overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-[#111b21] p-3 flex items-center justify-between border-b border-[#2a3942]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xs text-white">
                TA
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-xs text-white">TWIN ATHENA</div>
                <div className="text-[10px] text-emerald-400">Typically replies in &lt; 15 mins</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-neutral-400 hover:text-white"
              aria-label="Close chat bubble"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3 text-xs space-y-2 bg-[#0b141a]">
            <div className="bg-[#202c33] p-2.5 rounded-xl rounded-tl-xs text-neutral-200 border border-[#2a3942] leading-relaxed">
              👋 Hi there! Curious how a custom website or automated WhatsApp funnel would look for your business? Click below to chat directly with our lead developer on WhatsApp.
              <div className="flex justify-end gap-1 text-[9px] text-neutral-400 mt-1">
                <span>Just now</span>
                <CheckCheck className="w-3 h-3 text-sky-400 inline" />
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="p-2.5 bg-[#1f2c34] border-t border-[#2a3942]">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Quick Connect"
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
        )}
      </button>
    </div>
  );
};
