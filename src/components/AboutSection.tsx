import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  GraduationCap, 
  Sparkles, 
  Code, 
  Compass, 
  Cpu, 
  CheckCircle, 
  BookOpen, 
  Rocket, 
  Trophy 
} from 'lucide-react';
import { useTheme } from './ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export function AboutSection() {
  const { accentStyles } = useTheme();
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: 'Beginning with Python',
      icon: Sparkles,
      tag: 'Current Learning',
      description: 'Building a foundation in Python and practicing how to solve small problems step by step.',
      keyPoints: ['Learning Python syntax and fundamentals', 'Practicing conditions, loops, and functions', 'Improving through small exercises'],
    },
    {
      id: 1,
      title: 'Starting B.Tech CSE at SRM University Ramapuram',
      icon: GraduationCap,
      tag: 'Academic Pursuit',
      description: 'I recently completed 12th grade and have begun my B.Tech in Computer Science and Engineering at SRM University Ramapuram.',
      keyPoints: ['Adjusting to college and its coursework', 'Building a foundation in computer science', 'Exploring areas that interest me'],
    },
    {
      id: 2,
      title: 'Databases and Computer Networks',
      icon: Cpu,
      tag: 'Academic Subjects',
      description: 'Learning database management, Python database interfaces, and the fundamentals of how computers communicate over networks.',
      keyPoints: ['Studying database concepts', 'Practicing Python database connections', 'Learning computer networking fundamentals'],
    },
    {
      id: 3,
      title: 'Using AI as a Learning Tool',
      icon: Rocket,
      tag: 'Exploration',
      description: 'Learning how to use AI tools responsibly to understand concepts, ask better questions, and support my studies.',
      keyPoints: ['Using AI to clarify unfamiliar topics', 'Checking and understanding generated answers', 'Developing my own skills through practice'],
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070c16]/60">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide uppercase text-indigo-400">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            About <span className={`bg-gradient-to-r ${accentStyles.gradient} bg-clip-text text-transparent`}>B E Kavish Karthikeyan</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A new Computer Science student at <strong className="text-white font-semibold">SRM University Ramapuram</strong>, currently building a foundation in Python, databases, computer networks, and AI tools.
          </p>
        </div>

        {/* 2-Column Grid: Left is Personal Story & SRM Highlights, Right is Interactive Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Story Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Story Glass Box */}
            <div className="p-7 rounded-3xl bg-[#0c1220]/90 border border-white/10 shadow-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${accentStyles.gradient} flex items-center justify-center shadow-lg text-white font-bold font-display text-lg`}>
                  KK
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display leading-tight">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-slate-400">B.Tech CSE Student (2026 – 2030)</p>
                  <p className="text-xs text-indigo-400 font-medium">SRM University Ramapuram, Chennai</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                I recently completed 12th grade and have started my B.Tech in Computer Science and Engineering at SRM University Ramapuram.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                My current focus is learning Python, database management, Python database interfaces, and computer networks one concept at a time.
              </p>

              {/* SRM Academic Highlights Pill */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span>SRM University Ramapuram Snapshot</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 pl-6 list-disc">
                  <li>Degree: Bachelor of Technology (B.Tech)</li>
                  <li>Discipline: Computer Science and Engineering</li>
                  <li>Academic Duration: 2026 to 2030</li>
                  <li>Campus: Ramapuram, Bharathi Salai, Chennai</li>
                </ul>
              </div>

              {/* Quick links to sections */}
              <div className="flex items-center justify-between pt-2 text-xs">
                <a 
                  href="#srm-journey"
                  className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1.5 group"
                >
                  <span>Explore Academic Timeline</span>
                  <Compass className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                </a>
                <a 
                  href="#contact"
                  className="text-slate-400 hover:text-white"
                >
                  Get In Touch →
                </a>
              </div>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <div className="text-2xl font-bold font-display text-white">2</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Projects Built</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <div className="text-2xl font-bold font-display text-emerald-400">200+</div>
                <div className="text-[11px] text-slate-400 mt-0.5">DSA Solved</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <div className="text-2xl font-bold font-display text-indigo-400">2026-30</div>
                <div className="text-[11px] text-slate-400 mt-0.5">SRM CSE Batch</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Pillars Selector */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="text-left space-y-1 mb-2">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">Current Learning</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                What I am learning now
              </h3>
            </div>

            {/* Pillar Accordion / Cards */}
            <div className="space-y-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                const isActive = activePillar === pillar.id;

                return (
                  <motion.div
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    whileHover={{ scale: 1.01 }}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                      isActive 
                        ? 'bg-[#0f172a] border-white/20 shadow-xl ring-1 ring-white/10' 
                        : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isActive ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/5 text-slate-400'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-indigo-400">{pillar.tag}</span>
                            {isActive && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold">
                                Active Focus
                              </span>
                            )}
                          </div>
                          <h4 className="text-base font-bold text-white font-display mt-0.5">
                            {pillar.title}
                          </h4>
                        </div>
                      </div>

                      <span className={`text-xs font-mono px-2.5 py-1 rounded-full border transition-colors ${
                        isActive ? 'border-indigo-500/40 text-indigo-300 bg-indigo-500/10' : 'border-white/10 text-slate-500'
                      }`}>
                        0{pillar.id + 1}
                      </span>
                    </div>

                    {/* Detailed Content & Points */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-white/10 space-y-3"
                      >
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {pillar.description}
                        </p>

                        <div className="space-y-1.5">
                          {pillar.keyPoints.map((pt, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Quote banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 to-slate-900/60 border border-white/10 flex items-center gap-4 text-xs text-slate-300">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <span className="font-semibold text-white">Student Aspirations:</span> Building a strong foundation and gaining practical experience throughout my B.Tech journey.
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
