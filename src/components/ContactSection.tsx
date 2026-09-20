import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Twitter, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  Sparkles,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { useTheme } from './ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const { accentStyles } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship / Project Collaboration',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({ name: '', email: '', subject: 'Internship / Project Collaboration', message: '' });
      setTimeout(() => setSubmittedSuccess(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070b14]/90">
      {/* Background glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ background: `radial-gradient(circle, ${accentStyles.primary}, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide uppercase text-indigo-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Let&apos;s Build Something <span className={`bg-gradient-to-r ${accentStyles.gradient} bg-clip-text text-transparent`}>Exceptional</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Reach out to <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong> for student connections, learning discussions, or academic opportunities at SRM University Ramapuram.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct info & social cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="p-7 rounded-3xl bg-[#0b1120] border border-white/10 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Primary student & professional communications channel
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  SRM University Student Email
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-mono text-white truncate">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white transition-colors shrink-0"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-300" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Campus Location & Batch Details */}
              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">SRM University Ramapuram</div>
                    <div className="text-slate-400">B.Tech Computer Science & Engineering (2026 - 2030)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Chennai, Tamil Nadu</div>
                    <div className="text-slate-400">Ramapuram Campus, India (IST / UTC+5:30)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Response Time</div>
                    <div className="text-slate-400">Usually replies within 24 hours</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Find me on the web
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs text-white transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs text-white transition-colors"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                    <span>Twitter/X</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Send Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#0c1222] border border-white/10 shadow-2xl relative">
              
              <div className="space-y-2 mb-6 text-left">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                    Interactive Dispatch
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Send a Message to Kavish
                </h3>
                <p className="text-xs text-slate-400">
                  Fill out the form below to initiate collaboration, discuss SRM Ramapuram projects, or explore internship opportunities.
                </p>
              </div>

              {submittedSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3"
                >
                  <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Message successfully queued!</span>
                    <p className="text-xs text-emerald-400/90 mt-0.5">
                      Thank you for reaching out to B E Kavish Karthikeyan. A simulated dispatch notification has been generated for his SRM student inbox.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Sundaram"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Subject Matter
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#090d16] border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500/60"
                  >
                    <option value="Internship / Project Collaboration">Internship / Project Collaboration</option>
                    <option value="SRM Ramapuram Academic Inquiry">SRM Ramapuram Academic Inquiry</option>
                    <option value="Student Connection">Student Connection</option>
                    <option value="Open Source & Mentorship">Open Source & Mentorship</option>
                    <option value="General Engineering Talk">General Engineering Talk</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Kavish, I came across your portfolio and wanted to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r ${accentStyles.gradient} shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message to Kavish</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
