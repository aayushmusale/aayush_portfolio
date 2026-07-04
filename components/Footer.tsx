import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-panel-line">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-fog">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="text-panel-line">
          built with <span className="text-trace">Next.js</span> &amp;{" "}
          <span className="text-signal">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
