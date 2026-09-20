import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Star, 
  GitFork, 
  Sparkles, 
  Layers, 
  X, 
  Check, 
  Play, 
  Zap, 
  Sliders,
  Maximize2
} from 'lucide-react';
import { useTheme } from './ThemeContext';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';

export function ProjectsSection() {
  const { accentStyles } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Interactive demo states inside modal
  const [interactiveCounter, setInteractiveCounter] = useState(42);
  const [demoTheme, setDemoTheme] = useState<'cyber' | 'neon' | 'sunset'>('cyber');
  const [demoSpeed, setDemoSpeed] = useState(1);
  const [simulatedLog, setSimulatedLog] = useState<string[]>(['System initialized.', 'Connected to SRM Virtual Cluster.']);

  const categories = ['All', 'Full Stack', 'Frontend & UI', 'Systems & AI', 'Web3 & Realtime'];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSimulateAction = (msg: string) => {
    setSimulatedLog(prev => [msg, ...prev.slice(0, 4)]);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#080d18]">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide uppercase text-indigo-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Works</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Selected <span className={`bg-gradient-to-r ${accentStyles.gradient} bg-clip-text text-transparent`}>Projects</span> & Systems
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Real-world architectures, responsive component labs, and campus tools built by B E Kavish Karthikeyan during his B.Tech CSE journey at SRM University Ramapuram.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.04] border border-white/10 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-white/15 text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="w-full sm:w-64 relative">
            <input
              type="text"
              placeholder="Search tech, stack, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2 pl-9 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
            />
            <Layers className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-3xl bg-[#0b111e]/90 border border-white/10 hover:border-white/20 p-6 flex flex-col justify-between shadow-xl transition-all duration-300 backdrop-blur-md overflow-hidden"
              >
                {/* Accent glow corner */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-25 rounded-bl-full transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${accentStyles.primary}, transparent)` }}
                />

                <div className="space-y-4">
                  {/* Top Bar: Category & Stars */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-slate-500" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-indigo-400 font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlight Metric Pill */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                    <Zap className="w-3 h-3 text-emerald-400" />
                    <span>{project.highlightMetric}</span>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      setActiveModalProject(project);
                      setSimulatedLog([`Loaded ${project.title} live demo environment.`]);
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Inspect & Test</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    title="View Source on GitHub"
                    aria-label="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.previewUrl && (
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl text-indigo-400 hover:text-white bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 transition-colors"
                      title="Live Mock Site"
                      aria-label="Live Mock Site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-slate-400">
            <p>No projects match your search query &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-indigo-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}

      </div>

      {/* Project Deep-Dive Interactive Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#0d1322] border border-white/20 shadow-2xl p-6 sm:p-8 space-y-6 text-left my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                    {activeModalProject.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    By {PERSONAL_INFO.name} (SRM Ramapuram)
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-indigo-400 font-medium">
                  {activeModalProject.tagline}
                </p>
              </div>

              {/* Full Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalProject.longDescription}
              </p>

              {/* Live Interactive Simulator Widget Box */}
              <div className="p-5 rounded-2xl bg-[#090d16] border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold text-white">
                      Interactive Live Simulator
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">
                    ● Mock Runtime Connected
                  </span>
                </div>

                {/* Interactive Controls based on project */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div className="space-y-3">
                    <div className="text-xs text-slate-300">
                      Simulation Control:
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setInteractiveCounter(c => c + 1);
                          handleSimulateAction(`State update: Iteration #${interactiveCounter + 1} synced to campus node.`);
                        }}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5"
                      >
                        <Play className="w-3 h-3" />
                        <span>Trigger Event ({interactiveCounter})</span>
                      </button>

                      <button
                        onClick={() => {
                          const themes: ('cyber' | 'neon' | 'sunset')[] = ['cyber', 'neon', 'sunset'];
                          const nextTheme = themes[(themes.indexOf(demoTheme) + 1) % themes.length];
                          setDemoTheme(nextTheme);
                          handleSimulateAction(`Theme state changed to: [${nextTheme.toUpperCase()}]`);
                        }}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/15 text-slate-200 flex items-center gap-1.5"
                      >
                        <Sliders className="w-3 h-3" />
                        <span>Cycle Preset ({demoTheme})</span>
                      </button>
                    </div>

                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <span>Exec Speed:</span>
                      <input
                        type="range"
                        min="0.5"
                        max="3"
                        step="0.5"
                        value={demoSpeed}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setDemoSpeed(val);
                          handleSimulateAction(`Clock frequency scaled to: ${val}x`);
                        }}
                        className="w-24 accent-indigo-500"
                      />
                      <span className="font-mono text-[11px]">{demoSpeed}x</span>
                    </div>
                  </div>

                  {/* Simulated Telemetry Log */}
                  <div className="bg-black/50 p-3 rounded-xl border border-white/5 font-mono text-[11px] space-y-1 text-slate-400 h-28 overflow-y-auto">
                    <div className="text-slate-500 pb-1 border-b border-white/5">Telemetry Log Feed:</div>
                    {simulatedLog.map((log, i) => (
                      <div key={i} className="text-emerald-400/90 truncate">
                        &gt; {log}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Architectural Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Architectural Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>

                  {activeModalProject.previewUrl && (
                    <a
                      href={activeModalProject.previewUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r ${accentStyles.gradient}`}
                    >
                      <span>Simulate Deployment</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
