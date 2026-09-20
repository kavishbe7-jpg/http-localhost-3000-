import { useState, useTransition } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Code2, 
  GraduationCap, 
  MapPin, 
  Layers, 
  Zap, 
  Play, 
  RotateCcw,
  CheckCircle2,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { useTheme } from './ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const { accentStyles } = useTheme();
  const [activeTab, setActiveTab] = useState<'code' | 'interactive' | 'srm'>('code');
  const [, startTransition] = useTransition();

  // Interactive sandbox state for Tab 2
  const [dragCount, setDragCount] = useState(0);
  const [springTension, setSpringTension] = useState(180);
  const [springFriction, setSpringFriction] = useState(12);
  const [pulseCount, setPulseCount] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopySnippet = () => {
    startTransition(() => {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    });
  };

  return (
    <section 
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-20 overflow-hidden flex items-center justify-center bg-grid-pattern"
    >
      {/* Background radial ambient glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{
          background: `radial-gradient(circle, ${accentStyles.primary} 0%, rgba(99, 102, 241, 0.1) 50%, transparent 80%)`,
        }}
      />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal identity, bio & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Academic & Availability Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-sm"
              >
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-semibold text-slate-200">
                  SRM University Ramapuram
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="text-xs text-indigo-300 font-medium">Starting B.Tech CSE</span>
              </motion.div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for Internships</span>
              </div>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                <span>Hello, I am</span>
                <span className="h-px w-8 bg-slate-700 inline-block" />
                <span className={`font-semibold ${accentStyles.text}`}>Beginner Programmer</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
                {PERSONAL_INFO.name}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                A new Computer Science student at <span className="text-white font-medium">SRM University Ramapuram</span> learning Python, database management, computer networks, and how to use AI tools.
              </p>
            </div>

            {/* Quick Metadata Pill Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>2 Learning Projects</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Python Learner</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                <Laptop className="w-3.5 h-3.5 text-emerald-400" />
                <span>Recently Completed 12th</span>
              </div>
            </div>

            {/* Interactive Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                id="hero-explore-projects-cta"
                className={`group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r ${accentStyles.gradient} shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200`}
              >
                <span>View Learning Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#terminal"
                id="hero-launch-terminal-cta"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 transition-all duration-200"
              >
                <TerminalIcon className="w-4 h-4 text-indigo-400" />
                <span>View My Learning</span>
              </a>

              <button
                onClick={onOpenResume}
                id="hero-view-resume-cta"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm text-slate-400 hover:text-white bg-transparent hover:bg-white/5 transition-colors"
              >
                <span>View Student Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>

          {/* Right Column: Interactive Sandbox & Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Outer decorative glow rim */}
              <div 
                className="absolute -inset-1 rounded-3xl opacity-40 blur-xl transition-all duration-500"
                style={{ background: `linear-gradient(135deg, ${accentStyles.primary}, #06b6d4)` }}
              />

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-[#0b101c] border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Window Topbar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#080d18] border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400 truncate">
                      kavish-karthikeyan@srm-ramapuram ~
                    </span>
                  </div>

                  {/* Tab Selector */}
                  <div className="flex items-center gap-1 bg-black/30 p-1 rounded-lg border border-white/10">
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-2 py-0.5 text-xs font-mono rounded ${
                        activeTab === 'code' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Kavish.ts
                    </button>
                    <button
                      onClick={() => setActiveTab('interactive')}
                      className={`px-2 py-0.5 text-xs font-mono rounded flex items-center gap-1 ${
                        activeTab === 'interactive' ? 'bg-white/15 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      Physics
                    </button>
                    <button
                      onClick={() => setActiveTab('srm')}
                      className={`px-2 py-0.5 text-xs font-mono rounded ${
                        activeTab === 'srm' ? 'bg-white/15 text-indigo-300' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      SRM.json
                    </button>
                  </div>
                </div>

                {/* Tab 1: Kavish.ts code showcase */}
                {activeTab === 'code' && (
                  <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 bg-[#0a0f1d] min-h-[340px] flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="text-slate-500">// B E Kavish Karthikeyan | Portfolio Configuration</div>
                      <div>
                        <span className="text-indigo-400">const</span> developer = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">name</span>: <span className="text-amber-300">&quot;B E Kavish Karthikeyan&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">institution</span>: <span className="text-amber-300">&quot;SRM University Ramapuram&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">department</span>: <span className="text-amber-300">&quot;B.Tech CSE (2026–2030)&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">focus</span>: [
                        <span className="text-emerald-300">&quot;Python&quot;</span>,{' '}
                        <span className="text-emerald-300">&quot;Databases&quot;</span>,{' '}
                        <span className="text-emerald-300">&quot;Computer Networks&quot;</span>
                        ],
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">coreStack</span>: &#123;
                      </div>
                      <div className="pl-8">
                        <span className="text-slate-400">programming</span>: <span className="text-purple-300">[&quot;Python&quot;]</span>,
                      </div>
                      <div className="pl-8">
                        <span className="text-slate-400">data</span>: <span className="text-purple-300">[&quot;Databases&quot;, &quot;Python DB&quot;]</span>
                      </div>
                      <div className="pl-4">&#125;,</div>
                      <div className="pl-4">
                        <span className="text-cyan-300">isAvailableForHiring</span>: <span className="text-emerald-400">true</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">sayHello</span>(): <span className="text-indigo-400">void</span> &#123;
                      </div>
                      <div className="pl-8 text-slate-400">
                        console.log(<span className="text-emerald-300">&quot;Welcome to my creative workspace!&quot;</span>);
                      </div>
                      <div className="pl-4">&#125;</div>
                      <div>&#125;;</div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>Currently learning • Building fundamentals</span>
                      </div>
                      <button
                        onClick={handleCopySnippet}
                        className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                      >
                        {copiedCode ? (
                          <>
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400 font-sans">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Code2 className="w-3 h-3" />
                            <span className="font-sans">Copy Object</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 2: Interactive Motion Physics Sandbox */}
                {activeTab === 'interactive' && (
                  <div className="p-5 min-h-[340px] flex flex-col justify-between bg-[#0a0f1d]">
                    <div className="text-left space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">Learning Playground</span>
                        <span className="text-[11px] font-mono text-cyan-400">Try the interaction!</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Explore a small interactive demo while learning how interfaces work.
                      </p>
                    </div>

                    {/* Interactive Canvas Stage */}
                    <div className="relative h-44 my-2 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden">
                      {/* Grid crosshair lines */}
                      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
                      <div className="absolute w-full h-px bg-white/10" />
                      <div className="absolute h-full w-px bg-white/10" />

                      {/* Interactive Draggable Physics Orb */}
                      <motion.div
                        drag
                        dragConstraints={{ left: -110, right: 110, top: -60, bottom: 60 }}
                        dragElastic={0.2}
                        onDragEnd={() => setDragCount(c => c + 1)}
                        onClick={() => setPulseCount(c => c + 1)}
                        whileHover={{ scale: 1.15, cursor: 'grab' }}
                        whileTap={{ scale: 0.95, cursor: 'grabbing' }}
                        animate={{ 
                          boxShadow: `0 0 35px ${accentStyles.primary}`,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: springTension,
                          damping: springFriction,
                        }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${accentStyles.gradient} flex items-center justify-center text-white font-display font-bold text-xs shadow-xl cursor-grab select-none z-10`}
                      >
                        <div className="text-center">
                          <Zap className="w-5 h-5 mx-auto animate-pulse" />
                          <span className="text-[9px] font-mono opacity-80">DRAG ME</span>
                        </div>
                      </motion.div>

                      {/* Ripple burst effects indicator */}
                      {pulseCount > 0 && (
                        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400">
                          Clicks: {pulseCount} • Drags: {dragCount}
                        </div>
                      )}
                    </div>

                    {/* Controls for Tension and Damping */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span>Stiffness: {springTension}</span>
                        <input
                          type="range"
                          min="50"
                          max="400"
                          value={springTension}
                          onChange={(e) => setSpringTension(Number(e.target.value))}
                          className="w-28 accent-indigo-500 cursor-pointer"
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span>Damping: {springFriction}</span>
                        <input
                          type="range"
                          min="4"
                          max="30"
                          value={springFriction}
                          onChange={(e) => setSpringFriction(Number(e.target.value))}
                          className="w-28 accent-cyan-500 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: SRM Ramapuram JSON overview */}
                {activeTab === 'srm' && (
                  <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 bg-[#0a0f1d] min-h-[340px] flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="text-indigo-400 font-bold">&#123; /* SRM University Ramapuram */ &#125;</div>
                      <div className="text-slate-400">&#123;</div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;institution&quot;</span>: <span className="text-emerald-300">&quot;SRM Institute of Science & Technology&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;campus&quot;</span>: <span className="text-emerald-300">&quot;Ramapuram Campus, Chennai&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;degree&quot;</span>: <span className="text-emerald-300">&quot;B.Tech in Computer Science and Engineering&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;batch&quot;</span>: <span className="text-amber-300">&quot;2026 - 2030&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;student&quot;</span>: <span className="text-amber-300">&quot;B E Kavish Karthikeyan&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;currentStatus&quot;</span>: <span className="text-indigo-300">&quot;Foundations • Building core skills&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;learningTopics&quot;</span>: [
                        <span className="text-purple-300">&quot;Python&quot;</span>,{' '}
                        <span className="text-purple-300">&quot;Computer Networks&quot;</span>
                        ]
                      </div>
                      <div className="text-slate-400">&#125;</div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Chennai, Tamil Nadu</span>
                      <a 
                        href="#srm-journey"
                        className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 flex items-center gap-1 font-sans"
                      >
                        <span>View Academic Roadmap</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
