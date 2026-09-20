import { useState, useEffect } from 'react';
import { ArrowUp, Heart, GraduationCap, Clock, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

export function Footer() {
  const { accentStyles } = useTheme();
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Chennai, India (IST, UTC+5:30)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeStr(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#060a12] text-slate-400 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-left">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${accentStyles.gradient} p-0.5 shadow-lg`}>
              <div className="w-full h-full bg-[#070c16] rounded-[10px] flex items-center justify-center font-bold font-display text-white text-xs">
                KK
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-white font-display">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1">
                <GraduationCap className="w-3 h-3 text-indigo-400" />
                <span>SRM University Ramapuram • B.Tech CSE (2026–2030)</span>
              </div>
            </div>
          </div>

          {/* Live Chennai Time & Status */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>Chennai (IST): {timeStr || 'Loading...'}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} B E Kavish Karthikeyan. Engineered with precision for SRM Ramapuram portfolio showcase.
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span>Python</span>
            <span>•</span>
            <span>Databases</span>
            <span>•</span>
            <span>Computer Networks</span>
            <span>•</span>
            <span>AI Tools</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
