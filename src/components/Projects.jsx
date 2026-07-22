import { ExternalLink, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projectAccents, projects } from "../data/portfolio";

function ProjectCard({ project }) {
  const accent = projectAccents[project.title] || "#a78bfa";

  return (
    <article className="surface-card overflow-hidden flex flex-col h-full group hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-1">
      <div
        className="px-6 py-5 border-b border-white/[0.06]"
        style={{ background: `linear-gradient(135deg, ${accent}18, transparent)` }}
      >
        <p className="text-[#d4d4e0] text-sm md:text-base leading-relaxed font-medium">
          {project.summary}
        </p>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display text-xl font-bold text-white group-hover:text-[color:var(--accent)] transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2 shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-[#8b8b9e] hover:text-white hover:border-white/25 transition-colors"
              title="GitHub"
            >
              <Code2 className="w-4 h-4" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-[#8b8b9e] hover:text-white hover:border-white/25 transition-colors"
                title="Live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-[#8b8b9e] text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-lg border border-white/10 text-[#c4c4d4]"
              style={{ borderColor: `${accent}33`, color: accent }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/[0.06]">
      <div className="section-wrap">
        <SectionHeading
          number="04 — Projects"
          title="Things I've built"
          subtitle="Each project leads with what it does — descriptions instead of screenshots."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
