import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  FileText, 
  Terminal, 
  Menu, 
  X, 
  GraduationCap, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useTheme } from './ThemeContext';
import { ThemeAccent } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

const ACCENT_OPTIONS: { id: ThemeAccent; label: string; color: string }[] = [
  { id: 'indigo', label: 'Indigo', color: '#6366f1' },
  { id: 'cyan', label: 'Cyan', color: '#06b6d4' },
  { id: 'emerald', label: 'Emerald', color: '#10b981' },
  { id: 'violet', label: 'Violet', color: '#8b5cf6' },
  { id: 'amber', label: 'Amber', color: '#f59e0b' },
];

export function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { accent, setAccent, accentStyles } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'SRM Journey', href: '#srm-journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#070b12]/80 backdrop-blur-md border-b border-white/10 shadow-2xl py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#"
          className="group flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
          id="nav-brand-logo"
        >
          <div className="relative">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accentStyles.gradient} p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-200`}>
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-bold font-display tracking-wider text-sm text-white">
                KK
              </div>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#090d16] rounded-full animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <GraduationCap className="w-3 h-3 text-indigo-400 shrink-0" />
              <span>SRM Ramapuram • CSE &apos;30</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full transition-all duration-200 hover:bg-white/10"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Controls: Theme Picker & Resume CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Palette Switcher */}
          <div className="relative">
            <button
              onClick={() => setPaletteOpen(!paletteOpen)}
              id="theme-palette-button"
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-300 hover:text-white transition-colors"
              title="Change Accent Color Palette"
              aria-label="Change Accent Color Palette"
            >
              <Palette className="w-4 h-4 text-indigo-400" />
              <span 
                className="w-2.5 h-2.5 rounded-full ring-2 ring-white/20" 
                style={{ backgroundColor: accentStyles.primary }}
              />
              <span className="hidden md:inline">{accentStyles.name.split(' ')[1]}</span>
            </button>

            <AnimatePresence>
              {paletteOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-48 p-2 rounded-2xl bg-[#0d1320] border border-white/15 shadow-2xl z-50"
                >
                  <div className="px-2 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Select Accent Palette
                  </div>
                  <div className="space-y-1 mt-1">
                    {ACCENT_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setAccent(opt.id);
                          setPaletteOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs transition-colors ${
                          accent === opt.id 
                            ? 'bg-white/15 text-white font-medium' 
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span 
                            className="w-3 h-3 rounded-full shadow-sm"
                            style={{ backgroundColor: opt.color }}
                          />
                          <span>{opt.label}</span>
                        </div>
                        {accent === opt.id && <Sparkles className="w-3 h-3 text-white" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Terminal Launcher */}
          <a
            href="#terminal"
            id="nav-quick-terminal"
            className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
            title="Open Interactive Terminal"
            aria-label="Open Interactive Terminal"
          >
            <Terminal className="w-4 h-4" />
          </a>

          {/* Resume CTA */}
          <button
            onClick={onOpenResume}
            id="nav-resume-button"
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r ${accentStyles.gradient} shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="p-2 text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-xl"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0f1d] border-b border-white/10 px-4 pt-3 pb-6 space-y-4"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Color Palette:</span>
                <div className="flex items-center gap-1.5">
                  {ACCENT_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setAccent(opt.id)}
                      className={`w-6 h-6 rounded-full transition-transform ${accent === opt.id ? 'ring-2 ring-white scale-110' : 'opacity-70'}`}
                      style={{ backgroundColor: opt.color }}
                      title={opt.label}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r ${accentStyles.gradient}`}
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
