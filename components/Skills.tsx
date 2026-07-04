import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 border-b border-panel-line">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-signal uppercase tracking-wide mb-10">
          03 · Skills
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs text-trace mb-3">
                {group.tag}::{" "}
                <span className="text-fog">{group.label}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-paper/90 bg-panel border border-panel-line rounded-sm px-2.5 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
