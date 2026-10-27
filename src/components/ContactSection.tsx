import React, { useState, useEffect } from 'react';
import { ContactFormData } from '../types';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

interface ContactSectionProps {
  initialServiceInterest?: string;
  initialEstimate?: number;
  initialDetails?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceInterest = 'Complete Growth Suite',
  initialEstimate,
  initialDetails = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    contactMethod: 'whatsapp',
    phoneOrEmail: '',
    serviceInterest: initialServiceInterest,
    estimatedBudget: initialEstimate ? `$${initialEstimate.toLocaleString()}` : '$1,500 - $3,000',
    projectDetails: initialDetails,
  });

  useEffect(() => {
    if (initialServiceInterest) {
      setFormData((prev) => ({
        ...prev,
        serviceInterest: initialServiceInterest,
        estimatedBudget: initialEstimate ? `$${initialEstimate.toLocaleString()}` : prev.estimatedBudget,
        projectDetails: initialDetails || prev.projectDetails,
      }));
    }
  }, [initialServiceInterest, initialEstimate, initialDetails]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business or project name';
    if (!formData.phoneOrEmail.trim()) {
      errs.phoneOrEmail = 'Please provide your WhatsApp number or email address';
    } else if (
      formData.contactMethod === 'email' &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.phoneOrEmail.trim())
    ) {
      errs.phoneOrEmail = 'Please provide a valid email format (e.g. name@domain.com)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const directWhatsAppUrl = `https://wa.me/?text=${encodeURIComponent(
    `Hello TWIN ATHENA! I am interested in discussing a website and WhatsApp automation project for my business.`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-[#0c0c0e] border-b border-neutral-200/80 dark:border-neutral-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Value */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-2">
                Initiate Consultation
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4">
                Let’s Automate Your Leads & Build Your Digital Storefront.
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Tell me about your business bottlenecks. I will review your requirements and provide a free video audit of how a custom site and WhatsApp chat funnel will boost your sales.
              </p>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                    Need an Instant Reply?
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    Chat with TWIN ATHENA directly on WhatsApp now.
                  </p>
                </div>
              </div>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-xs"
              >
                <span>Launch WhatsApp Live Chat</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Signals */}
            <div className="space-y-3 pt-2 text-xs text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Guaranteed written response within 4 hours during business days</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>NDA & complete data privacy guaranteed on all discussions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#121215] border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. I have received your project details for <strong>{formData.businessName}</strong>. I will reach out via {formData.contactMethod === 'whatsapp' ? 'WhatsApp' : 'email'} within 4 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        businessName: '',
                        contactMethod: 'whatsapp',
                        phoneOrEmail: '',
                        serviceInterest: 'Complete Growth Suite',
                        estimatedBudget: '$1,500 - $3,000',
                        projectDetails: '',
                      });
                    }}
                    className="inline-flex items-center justify-center px-5 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Marcus Vance"
                        className={`w-full px-4 py-2.5 text-sm rounded-xl bg-white dark:bg-neutral-900 border text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
                          errors.fullName
                            ? 'border-rose-500 dark:border-rose-500'
                            : 'border-neutral-200 dark:border-neutral-700'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                        Business / Brand Name *
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => {
                          setFormData({ ...formData, businessName: e.target.value });
                          if (errors.businessName) setErrors({ ...errors, businessName: '' });
                        }}
                        placeholder="e.g. Knead Bakery & Cafe"
                        className={`w-full px-4 py-2.5 text-sm rounded-xl bg-white dark:bg-neutral-900 border text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
                          errors.businessName
                            ? 'border-rose-500 dark:border-rose-500'
                            : 'border-neutral-200 dark:border-neutral-700'
                        }`}
                      />
                      {errors.businessName && (
                        <p className="text-xs text-rose-500 mt-1">{errors.businessName}</p>
                      )}
                    </div>
                  </div>

                  {/* Contact Method Selector */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                      Preferred Way to Reply
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: 'whatsapp' })}
                        className={`py-2 px-3 text-xs font-medium rounded-xl border flex items-center justify-center gap-2 transition-all ${
                          formData.contactMethod === 'whatsapp'
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold'
                            : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400'
                        }`}
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                        <span>WhatsApp (Fastest)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: 'email' })}
                        className={`py-2 px-3 text-xs font-medium rounded-xl border flex items-center justify-center gap-2 transition-all ${
                          formData.contactMethod === 'email'
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold'
                            : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400'
                        }`}
                      >
                        <Mail className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Email Message</span>
                      </button>
                    </div>
                  </div>

                  {/* Phone or Email Input */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                      {formData.contactMethod === 'whatsapp' ? 'WhatsApp Phone Number *' : 'Email Address *'}
                    </label>
                    <input
                      type="text"
                      value={formData.phoneOrEmail}
                      onChange={(e) => {
                        setFormData({ ...formData, phoneOrEmail: e.target.value });
                        if (errors.phoneOrEmail) setErrors({ ...errors, phoneOrEmail: '' });
                      }}
                      placeholder={
                        formData.contactMethod === 'whatsapp'
                          ? '+1 (555) 000-0000 or country code'
                          : 'marcus@business.com'
                      }
                      className={`w-full px-4 py-2.5 text-sm rounded-xl bg-white dark:bg-neutral-900 border text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
                        errors.phoneOrEmail
                          ? 'border-rose-500 dark:border-rose-500'
                          : 'border-neutral-200 dark:border-neutral-700'
                      }`}
                    />
                    {errors.phoneOrEmail && (
                      <p className="text-xs text-rose-500 mt-1">{errors.phoneOrEmail}</p>
                    )}
                  </div>

                  {/* Service & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                        Selected Service
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="Complete Growth Suite">Complete Growth Suite ($2,450)</option>
                        <option value="WhatsApp Sales Engine">WhatsApp Sales Engine ($1,450)</option>
                        <option value="Starter Web Engine">Starter Web Engine ($1,250)</option>
                        <option value="Custom Project Consultation">Custom Project Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                        Budget Range
                      </label>
                      <select
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="$1,000 - $1,500">$1,000 - $1,500 USD</option>
                        <option value="$1,500 - $2,500">$1,500 - $2,500 USD</option>
                        <option value="$2,500 - $4,000">$2,500 - $4,000 USD</option>
                        <option value="$4,000+">$4,000+ USD</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                      Tell Me About Your Goals & Current Workflow
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="e.g. We are a dental clinic losing appointments because our front desk is slow to reply in the evenings. We need a booking bot and an updated site."
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-neutral-400"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-neutral-950 dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-spin">⏳</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Project Brief</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
