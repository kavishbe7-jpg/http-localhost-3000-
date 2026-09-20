export type ThemeAccent = 'indigo' | 'cyan' | 'emerald' | 'violet' | 'amber';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'Frontend & UI' | 'Systems & AI' | 'Web3 & Realtime';
  description: string;
  longDescription: string;
  tags: string[];
  stars: number;
  forks: number;
  highlightMetric: string;
  features: string[];
  previewUrl?: string;
  githubUrl?: string;
  accentColor: string;
  interactiveType?: 'counter' | 'canvas' | 'theme' | 'code' | 'audio';
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 100
  category: 'Languages' | 'Databases' | 'Python Database Interfaces' | 'Computer Networks';
  experienceYears: string;
  featured?: boolean;
  iconName?: string;
}

export interface EducationMilestone {
  period: string;
  title: string;
  institution: string;
  subtitle: string;
  description: string;
  highlights: string[];
  status: 'In Progress' | 'Upcoming' | 'Milestone';
  badge: string;
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  badge: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
}
