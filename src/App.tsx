import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWorks, ProjectItem } from './components/SelectedWorks';
import { Services } from './components/Services';
import { Journal } from './components/Journal';
import { Explorations } from './components/Explorations';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Stats } from './components/Stats';
import { ContactFooter } from './components/ContactFooter';
import { ProjectModal } from './components/ProjectModal';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-bg min-h-screen text-text-primary font-body antialiased selection:bg-amber-500 selection:text-bg">
      
      {/* Loading Screen Overlay */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Navigation */}
      <Navbar onOpenContactModal={scrollToContact} />

      {/* Main Sections */}
      <main>
        <Hero onOpenContactModal={scrollToContact} />
        <SelectedWorks onSelectProject={(p) => setSelectedProject(p)} />
        <Services />
        <Journal />
        <Explorations />
        <ExperienceTimeline />
        <Stats />
      </main>

      {/* Footer & Contact */}
      <ContactFooter onOpenModal={scrollToContact} />

      {/* Project Details Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
};

export default App;
