import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeAccent } from '../types';

interface ThemeContextType {
  accent: ThemeAccent;
  setAccent: (accent: ThemeAccent) => void;
  accentStyles: {
    name: string;
    primary: string;
    text: string;
    bg: string;
    bgLight: string;
    border: string;
    glowClass: string;
    ring: string;
    gradient: string;
  };
}

const ACCENT_MAP: Record<ThemeAccent, ThemeContextType['accentStyles']> = {
  indigo: {
    name: 'Electric Indigo',
    primary: '#6366f1',
    text: 'text-indigo-400',
    bg: 'bg-indigo-500',
    bgLight: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
    glowClass: 'glow-accent-indigo',
    ring: 'ring-indigo-500',
    gradient: 'from-indigo-500 to-cyan-400',
  },
  cyan: {
    name: 'Cyber Cyan',
    primary: '#06b6d4',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500',
    bgLight: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    glowClass: 'glow-accent-cyan',
    ring: 'ring-cyan-500',
    gradient: 'from-cyan-400 to-blue-500',
  },
  emerald: {
    name: 'Neon Emerald',
    primary: '#10b981',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500',
    bgLight: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    glowClass: 'glow-accent-emerald',
    ring: 'ring-emerald-500',
    gradient: 'from-emerald-400 to-teal-500',
  },
  violet: {
    name: 'Cosmic Violet',
    primary: '#8b5cf6',
    text: 'text-violet-400',
    bg: 'bg-violet-500',
    bgLight: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    glowClass: 'glow-accent-violet',
    ring: 'ring-violet-500',
    gradient: 'from-violet-400 to-fuchsia-500',
  },
  amber: {
    name: 'Solar Amber',
    primary: '#f59e0b',
    text: 'text-amber-400',
    bg: 'bg-amber-500',
    bgLight: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    glowClass: 'glow-accent-amber',
    ring: 'ring-amber-500',
    gradient: 'from-amber-400 to-orange-500',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccent] = useState<ThemeAccent>('indigo');

  useEffect(() => {
    // Sync class or attribute if needed
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  return (
    <ThemeContext.Provider value={{ accent, setAccent, accentStyles: ACCENT_MAP[accent] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
