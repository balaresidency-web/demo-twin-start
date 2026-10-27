export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  timeline: string;
  summary: string;
  challenge: string;
  solution: string;
  image: string;
  metrics: {
    label: string;
    value: string;
    changeText: string;
  }[];
  tags: string[];
  techStack: string[];
  keyFeatures: string[];
  clientQuote: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  description: string;
  priceUSD: number;
  turnaroundDays: number;
  highlighted: boolean;
  features: string[];
  idealFor: string;
  category: 'web' | 'bot' | 'full';
}

export interface QuoteAddon {
  id: string;
  name: string;
  category: 'automation' | 'web' | 'integration';
  priceUSD: number;
  turnaroundDays: number;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  text: string;
  highlightMetric: string;
  verifiedOutcome: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user' | 'system';
  text: string;
  time: string;
  options?: string[];
  badge?: string;
  media?: {
    type: 'image' | 'receipt' | 'booking_card';
    title: string;
    detail: string;
    subdetail?: string;
  };
}

export interface ChatScenario {
  id: string;
  name: string;
  industry: string;
  tagline: string;
  initialMessages: ChatMessage[];
  responses: Record<string, ChatMessage[]>;
}

export interface ContactFormData {
  fullName: string;
  businessName: string;
  contactMethod: 'whatsapp' | 'email';
  phoneOrEmail: string;
  serviceInterest: string;
  estimatedBudget: string;
  projectDetails: string;
}
