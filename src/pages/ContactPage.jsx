import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, Clock, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX Design',
    budget: '$10k - $25k',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const services = ['Brand Identity', 'UI/UX Design', 'Web Development', 'Design System', 'Full Product'];
  const budgets = ['< $10k', '$10k - $25k', '$25k - $50k', '$50k+'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@viha.studio');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto min-h-screen text-white">
      
      {/* Header */}
      <div className="mb-16">
        <div className="w-full flex items-center justify-between pb-5 border-b border-white/10 mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center py-2 px-6 sm:px-8 border-t border-b border-white/25 text-white/90 text-xs sm:text-sm md:text-[15px] font-light tracking-[0.22em] uppercase">
            Get in Touch
          </div>

          <div className="text-xs font-mono text-white/40 tracking-widest hidden sm:block">
            04 CHANNELS
          </div>
        </div>

        <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
          Let’s build something extraordinary together.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/60">
          Have an upcoming project, redesign, or idea? Tell us about your timeline and goals.
        </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Contact Information & Direct Access */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
            <h3 className="text-xl font-display font-bold text-white">Direct Communication</h3>
            
            {/* Quick copy email box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-white/40 block">Email Us</span>
                  <span className="text-sm font-semibold text-white">hello@viha.studio</span>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Timezone / Availability */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Clock className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Typical response time: Within 12-24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Operating globally across US, EU &amp; APAC timezones</span>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-300">
                Currently booking 2 new client engagements for Q2 / Q3
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-card p-6 rounded-3xl border border-white/10">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/40 block mb-4">
              Connect Across Channels
            </span>
            <div className="flex flex-col gap-2.5 text-sm">
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-white/70 hover:text-white transition-colors"
              >
                <span>Dribbble</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="https://behance.net" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-white/70 hover:text-white transition-colors"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-white/70 hover:text-white transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-white/70 hover:text-white transition-colors"
              >
                <span>X (Twitter)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Side: Interactive Project Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white">Message Received!</h3>
                <p className="text-white/60 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for reaching out. We have received your inquiry and will review your project details and get back to you within 24 hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', service: 'UI/UX Design', budget: '$10k - $25k', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-pink-500/60 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-pink-500/60 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Service Selector Pills */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2.5">
                    What can we help you with?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setFormData({ ...formData, service: srv })}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          formData.service === srv
                            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md'
                            : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/5'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range Pills */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2.5">
                    Project Budget (USD)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          formData.budget === b
                            ? 'bg-white text-black font-semibold shadow-md'
                            : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/5'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message / Details */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                    Project Goals &amp; Context
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about what you are building, timeline expectations, or links to current designs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-pink-500/60 focus:bg-white/10 text-white placeholder-white/30 text-sm outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white font-semibold text-base shadow-[0_0_30px_rgba(236,72,153,0.35)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Send Project Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
