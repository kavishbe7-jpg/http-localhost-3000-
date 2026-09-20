/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SRMAcademicJourney } from './components/SRMAcademicJourney';
import { SkillsSection } from './components/SkillsSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#070b12] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-x-hidden">
        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <AboutSection />
          <ProjectsSection />
          <SRMAcademicJourney />
          <SkillsSection />
          <InteractiveTerminal />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Modal Viewers */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </ThemeProvider>
  );
}

