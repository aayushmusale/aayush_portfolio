import DetectionFrame from "./DetectionFrame";
import { profile } from "@/lib/data";

export default function Hero() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section
      id="top"
      className="relative pt-40 pb-24 px-6 grid-noise border-b border-panel-line overflow-hidden"
    >
      <div className="mx-auto max-w-5xl grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <p className="font-mono text-sm text-trace mb-4">
            hey, i&rsquo;m {profile.handle}{" "}
            <span className="text-fog">{"// scanning portfolio.tsx"}</span>
          </p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-paper">
            {profile.role}
            <span className="block text-fog text-2xl sm:text-3xl md:text-4xl mt-3 font-medium">
              {profile.focus}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-fog text-base sm:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-signal text-ink font-mono text-sm rounded-sm hover:opacity-90 transition-opacity"
            >
              view_projects()
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 border border-panel-line text-paper font-mono text-sm rounded-sm hover:border-trace hover:text-trace transition-colors"
            >
              contact_me()
            </a>
          </div>
        </div>

        <DetectionFrame
          label="role: ml_engineer"
          confidence="0.98"
          className="w-40 h-40 sm:w-52 sm:h-52 mx-auto"
        >
          <div className="w-full h-full bg-panel border border-panel-line flex items-center justify-center">
            <span className="font-display font-bold text-4xl sm:text-5xl text-paper">
              {initials}
            </span>
          </div>
        </DetectionFrame>
      </div>
    </section>
  );
}
