import { Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative border border-panel-line bg-panel rounded-sm p-6 hover:border-signal/60 transition-colors">
      <span className="frame-corner top-0 left-0 border-t-2 border-l-2 border-panel-line" />
      <span className="frame-corner bottom-0 right-0 border-b-2 border-r-2 border-panel-line" />

      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="font-mono text-[11px] text-trace mb-1">
            {project.tag} · conf {project.confidence}
          </p>
          <h3 className="font-display font-semibold text-xl text-paper">
            {project.name}
          </h3>
        </div>
        {project.link && (
          <a
            href={project.link}
            className="text-fog hover:text-signal transition-colors shrink-0"
            aria-label={`Open ${project.name}`}
          >
            <ArrowUpRight size={20} />
          </a>
        )}
      </div>

      <p className="text-fog text-sm leading-relaxed mb-4">{project.summary}</p>

      <ul className="space-y-2 mb-5">
        {project.points.map((pt, i) => (
          <li key={i} className="text-sm text-fog/90 leading-relaxed pl-4 relative">
            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-signal rounded-full" />
            {pt}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.metrics.map((m) => (
          <span
            key={m.label}
            className="font-mono text-[11px] px-2 py-1 border border-panel-line rounded-sm text-trace"
          >
            {m.label}: {m.value}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-panel-line">
        {project.stack.map((s) => (
          <span key={s} className="text-xs text-fog font-mono">
            {s}
            {s !== project.stack[project.stack.length - 1] && (
              <span className="text-panel-line"> /</span>
            )}
          </span>
        ))}
      </div>
    </article>
  );
}
