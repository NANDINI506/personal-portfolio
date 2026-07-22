import SectionHeading from "./SectionHeading";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/[0.06]">
      <div className="section-wrap">
        <SectionHeading
          number="03 — Experience"
          title="Where I've worked"
          subtitle="Professional roles focused on delivery — no confidential client or internal details."
        />

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <article
              key={`${exp.role}-${exp.date}`}
              className="surface-card p-6 md:p-8 hover:border-white/[0.12] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                <div>
                  <span className="font-mono text-xs text-[#fb7185]">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mt-1">
                    {exp.role}
                  </h3>
                  <p className="text-[#a78bfa] font-medium mt-1">{exp.company}</p>
                </div>
                <span className="font-mono text-xs text-[#6b6b80] shrink-0 md:mt-6">
                  {exp.date}
                </span>
              </div>

              <p className="text-[#8b8b9e] text-sm leading-relaxed mb-5">
                {exp.summary}
              </p>

              <ul className="grid md:grid-cols-2 gap-3">
                {exp.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm text-[#c4c4d4] leading-relaxed surface-card !rounded-xl !p-4 !bg-white/[0.02]"
                  >
                    <span className="text-[#fb7185] shrink-0">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
