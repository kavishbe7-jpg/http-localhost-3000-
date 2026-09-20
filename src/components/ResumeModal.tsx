import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  Printer, 
  Check, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Briefcase, 
  Code, 
  Trophy 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { accentStyles } = useTheme();
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Simulated PDF file generation
    const resumeText = `
============================================================
RESUME: ${PERSONAL_INFO.name}
${PERSONAL_INFO.degree} | ${PERSONAL_INFO.college} (${PERSONAL_INFO.duration})
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
============================================================

EDUCATION:
• SRM Institute of Science and Technology, Ramapuram Campus
  Bachelor of Technology in Computer Science and Engineering (B.Tech CSE)
  Tenure: 2026 – 2030 | Recently completed 12th grade

CORE SKILLS:
• Programming: Python
• Databases: Database Management
• Python Database Interface: Connecting Python applications with databases
• Computer Networks: Networking fundamentals

KEY PROJECTS:
1. Python Practice Programs - Beginner Python exercises
2. Database Learning Notes - Database and Python connection practice

CURRENT STATUS:
• Building my college foundations
• 200+ DSA problems solved through self-study
============================================================
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Kavish_Karthikeyan_SRM_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl rounded-3xl bg-[#0d1322] border border-white/20 shadow-2xl overflow-hidden my-6 text-left"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#090d16] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-slate-300">
              Resume Preview • B E Kavish Karthikeyan
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r ${accentStyles.gradient} shadow-sm transition-all duration-200`}
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Paper Document Container */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto font-sans text-slate-200 space-y-6 bg-[#0c1220]">
          
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6 space-y-2 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-display font-extrabold text-white">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm text-indigo-400 font-medium">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <div className="text-xs text-slate-400 space-y-1 sm:text-right font-mono mt-3 sm:mt-0">
              <div>{PERSONAL_INFO.email}</div>
              <div>{PERSONAL_INFO.location}</div>
              <div className="text-indigo-300">SRM University Ramapuram (CSE &apos;30)</div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 border-b border-white/10 pb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <span className="font-bold text-white">SRM Institute of Science and Technology, Ramapuram Campus</span>
                <span className="text-xs font-mono text-slate-400">Chennai, Tamil Nadu</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-300">
                <span>{PERSONAL_INFO.degree}</span>
                <span className="font-mono text-indigo-300">Batch: 2026 – 2030</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                Building my computer science foundations after completing 12th grade, with a current focus on Python, databases, computer networks, and AI tools.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 border-b border-white/10 pb-1">
              <Code className="w-4 h-4" />
              <span>Technical Skills</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="font-bold text-white">Programming:</span>
                <p className="text-slate-300 font-mono">Python</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="font-bold text-white">Databases:</span>
                <p className="text-slate-300 font-mono">Database Management</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="font-bold text-white">Python Database Interface:</span>
                <p className="text-slate-300 font-mono">Connecting Python applications with databases</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="font-bold text-white">Computer Networks:</span>
                <p className="text-slate-300 font-mono">Networking fundamentals and communication</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 border-b border-white/10 pb-1">
              <Briefcase className="w-4 h-4" />
              <span>Selected Project Works</span>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Python Practice Programs</span>
                  <span className="font-mono text-slate-400">Python • Beginner Practice</span>
                </div>
                <p className="text-slate-300">
                  Small programs created while learning Python fundamentals and basic problem solving.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Database Learning Notes</span>
                  <span className="font-mono text-slate-400">Python • Databases • Networks</span>
                </div>
                <p className="text-slate-300">
                  Beginner practice for database concepts, Python database connections, and computer networking fundamentals.
                </p>
              </div>

            </div>
          </div>

          {/* Honors & Hackathons */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 border-b border-white/10 pb-1">
              <Trophy className="w-4 h-4" />
              <span>Current Progress</span>
            </div>

            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong className="text-white">Recently completed 12th grade</strong> — Building foundations in B.Tech CSE</li>
              <li><strong className="text-white">Currently learning</strong> — Python, databases, Python database interfaces, and computer networks</li>
              <li><strong className="text-white">DSA practice</strong> — 200+ problems solved through self-study</li>
              <li><strong className="text-white">Exploring AI tools</strong> — Using them to support learning and understand new concepts</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#090d16] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Student at SRM University Ramapuram (2026-2030)</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </motion.div>
    </div>
  );
}
