import React, { useState, useEffect, useRef } from 'react';
import { CHAT_SCENARIOS } from '../data/portfolioData';
import { ChatMessage, ChatScenario } from '../types';
import { 
  CheckCheck, 
  RotateCcw, 
  Send, 
  Phone, 
  Video, 
  MoreVertical, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface WhatsAppSimulatorProps {
  onSelectBuildBot?: () => void;
}

export const WhatsAppSimulator: React.FC<WhatsAppSimulatorProps> = ({ onSelectBuildBot }) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const currentScenario: ChatScenario = CHAT_SCENARIOS[selectedScenarioIndex];

  const [messages, setMessages] = useState<ChatMessage[]>(currentScenario.initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Reset when switching scenario
  useEffect(() => {
    setMessages(currentScenario.initialMessages);
    setIsTyping(false);
    setCustomInput('');
  }, [selectedScenarioIndex, currentScenario]);

  // Auto scroll to bottom of chat
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSelectOption = (optionText: string) => {
    if (optionText === '🔄 Test Another Flow') {
      const nextIndex = (selectedScenarioIndex + 1) % CHAT_SCENARIOS.length;
      setSelectedScenarioIndex(nextIndex);
      return;
    }

    if (optionText === '🚀 Build Similar Bot for My Business') {
      if (onSelectBuildBot) {
        onSelectBuildBot();
      } else {
        const pricingEl = document.getElementById('pricing');
        pricingEl?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Add user message
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: optionText,
      time: timeString,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Look up response in scenario
    setTimeout(() => {
      const branchResponses = currentScenario.responses[optionText];
      if (branchResponses && branchResponses.length > 0) {
        // Exclude the user echoed message from branchResponses if already added
        const botReplies = branchResponses.filter((m) => m.sender === 'bot');
        setMessages((prev) => [...prev, ...botReplies]);
      } else {
        // Fallback natural response
        const fallbackMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `Thank you for selecting "${optionText}". Our automated backend has registered this step and logged your inquiry directly into our live dispatch queue!`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          options: ['🔄 Test Another Flow', '🚀 Build Similar Bot for My Business'],
        };
        setMessages((prev) => [...prev, fallbackMsg]);
      }
      setIsTyping(false);
    }, 700);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const userInput = customInput.trim();
    setCustomInput('');

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: userInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Thanks for messaging! Our AI intent engine categorized your inquiry: "${userInput}". In live client deployments, this either matches your custom knowledge base or instantly routes to human staff with a high-priority push notification.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: ['📅 Schedule a Live Demo', '🔄 Test Another Flow', '🚀 Build Similar Bot for My Business'],
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 800);
  };

  const handleReset = () => {
    setMessages(currentScenario.initialMessages);
    setIsTyping(false);
    setCustomInput('');
  };

  // Get current active options from the last bot message
  const lastMessage = messages[messages.length - 1];
  const activeOptions = (!isTyping && lastMessage && lastMessage.sender === 'bot' && lastMessage.options) 
    ? lastMessage.options 
    : [];

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Scenario Selector Tabs */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-2 px-1">
          <span className="font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            Select Industry Flow to Test:
          </span>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs hover:text-neutral-900 dark:hover:text-white transition-colors"
            title="Reset Conversation"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Restart</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800/80 rounded-xl border border-neutral-200/80 dark:border-neutral-700/80">
          {CHAT_SCENARIOS.map((scenario, index) => (
            <button
              key={scenario.id}
              onClick={() => setSelectedScenarioIndex(index)}
              className={`py-2 px-2.5 text-xs font-medium rounded-lg transition-all text-center truncate ${
                selectedScenarioIndex === index
                  ? 'bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-xs font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {index === 0 && 'Bakery & Cafe'}
              {index === 1 && 'Medical Clinic'}
              {index === 2 && 'VIP Retail'}
            </button>
          ))}
        </div>
      </div>

      {/* Realistic Smartphone Shell */}
      <div className="relative rounded-[2.5rem] border-[8px] border-neutral-800 dark:border-neutral-700 shadow-2xl bg-neutral-900 overflow-hidden ring-1 ring-black/10">
        {/* Notch / Speaker Bar */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-800 rounded-full z-20 flex items-center justify-center">
          <div className="w-12 h-1 bg-neutral-700 rounded-full" />
        </div>

        {/* Device Status Bar */}
        <div className="pt-3 px-6 pb-1 bg-[#1f2c34] text-neutral-300 text-[11px] flex justify-between items-center select-none font-mono">
          <span>09:41</span>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* WhatsApp Chat Header */}
        <div className="bg-[#1f2c34] text-white px-4 py-3 flex items-center justify-between border-b border-[#2a3942] z-10 relative">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-inner">
                {currentScenario.id === 'bakery-order' && '🍞'}
                {currentScenario.id === 'clinic-booking' && '🩺'}
                {currentScenario.id === 'retail-concierge' && '✨'}
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#1f2c34] flex items-center justify-center">
                <CheckCircle2 className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-sm flex items-center gap-1.5">
                <span>{currentScenario.name.split(' ')[0]} Bot</span>
                <span className="text-[10px] bg-emerald-950 text-emerald-400 px-1 py-0.2 rounded text-nowrap font-mono">
                  Official
                </span>
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>online 24/7</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-neutral-300">
            <Phone className="w-4 h-4 cursor-pointer hover:text-white" />
            <Video className="w-4 h-4 cursor-pointer hover:text-white" />
            <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Chat Message Scroll Window */}
        <div
          ref={chatScrollRef}
          className="whatsapp-bg h-[380px] p-4 overflow-y-auto space-y-3 text-sm select-text"
        >
          {/* Security Badge Pill */}
          <div className="flex justify-center my-1">
            <div className="bg-[#182229]/90 text-[#ffd279] text-[10px] px-3 py-1 rounded-lg text-center max-w-[85%] border border-[#2a3942] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#ffd279]" />
              <span>Official Meta WhatsApp Cloud API · End-to-end encrypted</span>
            </div>
          </div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[86%] rounded-2xl px-3.5 py-2.5 shadow-sm text-[13px] relative ${
                  msg.sender === 'user'
                    ? 'bg-[#005c4b] text-neutral-100 rounded-tr-xs'
                    : 'bg-[#202c33] text-neutral-100 rounded-tl-xs border border-[#2a3942]'
                }`}
              >
                {/* Text Content */}
                <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>

                {/* Optional Rich Media Card */}
                {msg.media && (
                  <div className="mt-2.5 p-2.5 bg-[#111b21] rounded-xl border border-[#2a3942] text-xs">
                    <div className="font-semibold text-emerald-400 text-xs mb-1">
                      {msg.media.title}
                    </div>
                    <div className="text-neutral-300 font-mono text-[11px] whitespace-pre-line leading-relaxed">
                      {msg.media.detail}
                    </div>
                    {msg.media.subdetail && (
                      <div className="mt-2 pt-1.5 border-t border-[#2a3942] text-[10px] text-neutral-400">
                        {msg.media.subdetail}
                      </div>
                    )}
                  </div>
                )}

                {/* Message Timestamp & Double Checkmarks */}
                <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-neutral-400 select-none">
                  <span>{msg.time}</span>
                  {msg.sender === 'user' && (
                    <CheckCheck className="w-3.5 h-3.5 text-sky-400 inline" />
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-1 bg-[#202c33] text-neutral-300 px-3.5 py-2 rounded-2xl rounded-tl-xs w-16 border border-[#2a3942]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
            </div>
          )}
        </div>

        {/* Quick-Reply Options Shelf */}
        {activeOptions.length > 0 && (
          <div className="bg-[#182229] px-3 py-2.5 border-t border-[#2a3942] space-y-1.5 max-h-40 overflow-y-auto">
            <div className="text-[10px] uppercase font-semibold tracking-wider text-emerald-400 mb-1 flex items-center gap-1">
              <span>Interactive Action Buttons</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {activeOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption(opt)}
                  className="w-full text-left text-xs bg-[#202c33] hover:bg-[#2a3942] active:scale-[0.99] text-emerald-300 hover:text-white px-3 py-2 rounded-xl transition-all border border-[#2a3942] flex items-center justify-between font-medium group"
                >
                  <span className="truncate">{opt}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Bar */}
        <form
          onSubmit={handleCustomSend}
          className="bg-[#1f2c34] p-2.5 flex items-center gap-2 border-t border-[#2a3942]"
        >
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Type a custom query to test..."
            className="flex-1 bg-[#2a3942] text-white text-xs px-3.5 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder-neutral-400"
          />
          <button
            type="submit"
            disabled={!customInput.trim()}
            className="w-8 h-8 rounded-full bg-[#00a884] text-white flex items-center justify-center hover:bg-[#008f72] disabled:opacity-40 transition-colors shrink-0"
            aria-label="Send simulated message"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* Simulator Trust Note */}
      <div className="mt-3 text-center">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          ⚡ 100% simulated live logic. Every flow connects to your CRM or Google Sheets in production.
        </p>
      </div>
    </div>
  );
};
