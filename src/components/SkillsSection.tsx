import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Search, 
  Sparkles, 
  Cpu, 
  Server, 
  Layout, 
  Terminal, 
  Check, 
  BarChart3 
} from 'lucide-react';
import { useTheme } from './ThemeContext';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';

export function SkillsSection() {
  const { accentStyles } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [skillSearch, setSkillSearch] = useState<string>('');

  const categories = ['All', 'Languages', 'Databases', 'Python Database Interfaces', 'Computer Networks'];

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCat = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(skillSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#090e1a]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide uppercase text-indigo-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Skill <span className={`bg-gradient-to-r ${accentStyles.gradient} bg-clip-text text-transparent`}>Matrix</span> & Expertise
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A focused overview of the technologies and computer science subjects I am currently learning and building with.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.04] border border-white/10 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-white/15 text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="w-full sm:w-64 relative">
            <input
              type="text"
              placeholder="Search skill (e.g. Python, networks)..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="w-full px-3.5 py-2 pl-9 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
            {skillSearch && (
              <button
                onClick={() => setSkillSearch('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill: SkillItem, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-[#0b1220]/80 border border-white/10 hover:border-white/20 transition-all duration-200 space-y-3 relative overflow-hidden group shadow-lg"
              >
                {/* Glow hint */}
                <div 
                  className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-15 rounded-bl-full transition-opacity pointer-events-none"
                  style={{ background: accentStyles.primary }}
                />

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white font-display group-hover:text-indigo-300 transition-colors">
                      {skill.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] font-mono text-slate-400">
                        {skill.category}
                      </span>
                      <span className="text-[10px] text-slate-500">•</span>
                      <span className="text-[11px] font-mono text-indigo-400">
                        {skill.experienceYears}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-mono font-bold text-white">
                      {skill.level}%
                    </span>
                    {skill.featured && (
                      <div className="text-[9px] font-semibold text-emerald-400 uppercase tracking-wider">
                        Core
                      </div>
                    )}
                  </div>
                </div>

                {/* Animated Level Bar */}
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.03 }}
                    className={`h-full rounded-full bg-gradient-to-r ${accentStyles.gradient}`}
                  />
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Competencies Summary Strip */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
            <Layout className="w-8 h-8 text-cyan-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-white">Python</div>
              <div className="text-slate-400">Programming fundamentals and problem solving</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-indigo-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-white">Databases</div>
              <div className="text-slate-400">Database concepts and data organization</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
            <Server className="w-8 h-8 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-white">Python Database Interface</div>
              <div className="text-slate-400">Connecting Python programs with databases</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-amber-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-white">Computer Networks</div>
              <div className="text-slate-400">Networking fundamentals and communication</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
