"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#me", label: "Me" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-panel-line bg-ink/80 backdrop-blur">
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-fog tracking-tight">
          <span className="text-signal">$</span> am_v1
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-fog hover:text-paper transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:aayushmusale04@gmail.com"
            className="text-sm font-mono border border-panel-line px-3 py-1.5 rounded-sm hover:border-signal hover:text-signal transition-colors"
          >
            get_in_touch()
          </a>
        </div>
        <button
          className="md:hidden text-paper"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-panel-line bg-ink px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-fog hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
