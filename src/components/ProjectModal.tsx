import React from 'react';
import { ProjectItem } from './SelectedWorks';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[10000] bg-bg/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto cursor-pointer animate-role-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full bg-surface border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl my-auto cursor-default"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-bg/80 border border-stroke text-text-primary hover:text-amber-400 hover:border-amber-500/50 flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        {/* Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display text-text-primary mt-2">
                {project.title} — <span className="italic text-amber-400">{project.italicTitle}</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-text-primary bg-bg border border-stroke px-3 py-1 rounded-full">
              {project.metrics}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-2">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-text-primary/90 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4 border-y border-stroke/50">
            <div>
              <div className="text-xs font-mono text-muted mb-1">Target Market</div>
              <div className="text-sm font-semibold text-text-primary font-mono">{project.location}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-muted mb-1">Live URL</div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-amber-400 hover:underline font-mono"
              >
                {project.url.replace('https://', '')} ↗
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-3">
              Technologies & Deliverables
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-text-primary bg-bg border border-stroke px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link */}
          <div className="pt-2 flex justify-end">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full text-sm font-medium px-6 py-3 bg-amber-500 hover:bg-amber-400 text-bg transition-colors"
            >
              <span>Visit Live Website</span>
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
