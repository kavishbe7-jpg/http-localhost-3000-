import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Trophy,
  Sparkles, 
  Award, 
  Building2, 
  ArrowRight,
  Code
} from 'lucide-react';
import { useTheme } from './ThemeContext';
import { EDUCATION_MILESTONES, ACHIEVEMENTS, PERSONAL_INFO } from '../data/portfolioData';

export function SRMAcademicJourney() {
  const { accentStyles } = useTheme();
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(0);

  const activeMilestone = EDUCATION_MILESTONES[selectedYearIndex];

  return (
    <section id="srm-journey" className="py-24 relative overflow-hidden bg-[#070b14]/80">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ background: `radial-gradient(circle, ${accentStyles.primary}, #06b6d4, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide uppercase text-indigo-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Pathway • 2026 to 2030</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            SRM University Ramapuram <span className={`bg-gradient-to-r ${accentStyles.gradient} bg-clip-text text-transparent`}>B.Tech CSE</span> Journey
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Four-year comprehensive engineering roadmap of <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong> at SRM Institute of Science and Technology, Ramapuram Campus, Chennai.
          </p>
        </div>

        {/* SRM Campus Header Showcase Box */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0d1424] via-[#0f172a] to-[#0a101d] border border-white/10 p-6 sm:p-8 shadow-2xl mb-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Institution ID: SRM-RPM-CSE-2026
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Active Enrolled Student
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                SRM Institute of Science and Technology
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Campus: <strong className="text-white">Ramapuram, Chennai, Tamil Nadu</strong>. Department of Computer Science and Engineering. Program: Bachelor of Technology (B.Tech CSE) from <strong className="text-white">2026 to 2030</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>Bharathi Salai, Ramapuram, Chennai</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Graduation Target: 2030</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>State-of-the-Art CSE Computing Labs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 rounded-2xl p-5 border border-white/10 space-y-3 text-left">
              <div className="text-xs font-mono text-indigo-300 uppercase tracking-wider">
                Student Profile
              </div>
              <div className="text-sm font-bold text-white">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-slate-300 space-y-1">
                <div>Course: <span className="text-white">B.Tech Computer Science & Eng.</span></div>
                <div>Tenure: <span className="text-indigo-400 font-mono">2026 – 2030</span></div>
                <div>Status: <span className="text-emerald-400 font-mono font-bold">Building foundations</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Year Timeline Interactive Switcher */}
        <div className="space-y-8">
          {/* Year Buttons Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {EDUCATION_MILESTONES.map((milestone, idx) => {
              const isSelected = selectedYearIndex === idx;
              return (
                <button
                  key={milestone.period}
                  onClick={() => setSelectedYearIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden ${
                    isSelected
                      ? 'bg-[#10192e] border-indigo-500/50 shadow-xl ring-1 ring-indigo-500/30'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-indigo-400' : 'text-slate-400'}`}>
                      {milestone.period.split(' ')[0]}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      idx === 0 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-white/5 text-slate-400'
                    }`}>
                      {milestone.badge}
                    </span>
                  </div>

                  <div className="text-sm font-bold text-white font-display line-clamp-1">
                    {milestone.period.includes('Year 1') ? 'Year 1: Foundations' :
                     milestone.period.includes('Year 2') ? 'Year 2: Core Systems' :
                     milestone.period.includes('Year 3') ? 'Year 3: Applied AI & Cloud' :
                     'Year 4: Capstone & Career'}
                  </div>

                  {isSelected && (
                    <motion.div
                      layoutId="active-year-indicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Year Detailed Card View */}
          <motion.div
            key={activeMilestone.period}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-[#0c1220]/90 border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Academic Period: {activeMilestone.period}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                  {activeMilestone.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  {activeMilestone.subtitle} • {activeMilestone.institution}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Status: {activeMilestone.status}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {activeMilestone.description}
            </p>

            {/* Curriculum & Practical Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Key Curricular Objectives & Milestones:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeMilestone.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* SRM Achievements & Accolades Gallery */}
        <div className="mt-16 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
                <Trophy className="w-4 h-4" />
                <span>Honors &amp; Competitions</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                Learning Journey So Far
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-300">These are my achievements.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                src: '/certificates/WhatsApp%20Image%202%202026-09-20%20at%205.17.24%20PM.jpeg',
                alt: 'Certificate of participation in the Deconstructed Ladders event',
                title: 'Deconstructed Ladders',
              },
              {
                src: '/certificates/WhatsApp%20Image%202026-09-20%20at%205.17.24%20PM.jpeg',
                alt: 'Certificate of participation in the Who Dunnit event',
                title: 'Who Dunnit',
              },
              {
                src: '/certificates/WhatsApp%20Image%202026-09-20%20at%205.17.29%20PM.jpeg',
                alt: 'Certificate of completion for the Data Science and AI course',
                title: 'Data Science and AI',
              },
            ].map((certificate) => (
              <figure key={certificate.src} className="overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10">
                <img
                  src={certificate.src}
                  alt={certificate.alt}
                  className="w-full aspect-[4/3] object-cover"
                />
              </figure>
            ))}
          </div>

          <div className="hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACHIEVEMENTS.filter(() => false).map((ach) => (
              <div
                key={ach.id}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-200 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">{ach.year}</span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {ach.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {ach.title}
                  </h4>
                  <p className="text-[11px] text-indigo-300 font-medium">
                    {ach.organization}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
