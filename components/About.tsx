import { profile, leadership } from "@/lib/data";

export default function About() {
  return (
    <section id="me" className="px-6 py-24 border-b border-panel-line">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[auto_1fr] gap-10">
        <p className="font-mono text-sm text-signal uppercase tracking-wide">
          01 · Me
        </p>
        <div className="max-w-2xl">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-paper mb-6">
            Building things that have to survive contact with reality.
          </h2>
          <p className="text-fog leading-relaxed mb-4">
            I&rsquo;m a Computer Engineering student at AISSMS IOIT, Pune, spending most
            of my time at the intersection of computer vision, edge deployment, and
            generative AI pipelines. I like models that are correct in a notebook
            and models that survive a 2MB quantized binary on a microcontroller — the
            second one is the interesting problem.
          </p>
          <p className="text-fog leading-relaxed">
            Recent work spans real-time voice pipelines, INT8-quantized object
            detectors for edge hardware, and imbalance-aware classifiers for fraud
            and spam. I also co-led a 40-team campus hackathon, because someone has
            to own the logistics too.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <div className="border border-panel-line bg-panel p-4 rounded-sm">
              <p className="font-mono text-xs text-trace mb-1">education</p>
              <p className="text-paper text-sm font-medium">
                {profile.education.degree}
              </p>
              <p className="text-fog text-sm">{profile.education.school}</p>
              <p className="text-fog text-xs mt-1">{profile.education.detail}</p>
            </div>
            <div className="border border-panel-line bg-panel p-4 rounded-sm">
              <p className="font-mono text-xs text-trace mb-1">currently</p>
              <p className="text-paper text-sm font-medium">
                Placement season — ML/AI internships
              </p>
              <p className="text-fog text-sm">
                Computer vision · edge AI · GenAI pipelines · NLP
              </p>
            </div>
          </div>

          <div className="mt-4 border border-panel-line bg-panel p-4 rounded-sm">
            <p className="font-mono text-xs text-trace mb-1">leadership</p>
            <p className="text-paper text-sm font-medium">
              {leadership.role} — {leadership.org}
            </p>
            <p className="text-fog text-sm">{leadership.detail}</p>
            <p className="text-fog text-xs mt-1">{leadership.period}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
