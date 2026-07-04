import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 border-b border-panel-line">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-baseline justify-between gap-4 mb-10">
          <p className="font-mono text-sm text-signal uppercase tracking-wide">
            02 · Projects
          </p>
          <p className="font-mono text-xs text-fog">
            {projects.length} detections above threshold
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
