import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/lib/data";

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: GithubIcon, label: "github.com/aayushmusale", href: profile.github },
  {
    icon: LinkedinIcon,
    label: "linkedin.com/in/aayush-musale",
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-signal uppercase tracking-wide mb-10">
          04 · Contact
        </p>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-paper mb-4">
              Open to ML/AI internship roles — reach out.
            </h2>
            <p className="text-fog max-w-lg mb-8">
              Currently interviewing for computer vision, edge AI, and GenAI
              engineering internships. Fastest way to reach me is email.
            </p>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 text-sm text-fog hover:text-paper transition-colors w-fit"
                >
                  <span className="w-8 h-8 rounded-sm border border-panel-line flex items-center justify-center group-hover:border-signal group-hover:text-signal transition-colors">
                    <l.icon size={15} />
                  </span>
                  <span className="font-mono">{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="border border-panel-line bg-panel rounded-sm p-5 w-full md:w-64">
            <p className="font-mono text-xs text-trace mb-2 flex items-center gap-1.5">
              <MapPin size={12} /> location
            </p>
            <p className="text-paper text-sm font-medium">{profile.location}</p>
            <div className="mt-4 h-24 rounded-sm border border-panel-line grid-noise relative overflow-hidden">
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-signal shadow-[0_0_0_5px_rgba(255,106,61,0.15)]" />
              </span>
            </div>
            <p className="font-mono text-[11px] text-fog mt-3">
              open to remote &amp; on-site
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
